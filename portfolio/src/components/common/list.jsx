import Link from "next/link";
import { usePathname } from "next/navigation";

const List = ({
  className = "",
  handleClickList = () => {},
  handleClickNavLink = () => {
    window.scrollTo(0, 0);
  },
  elements,
  paths,
}) => {
  const pathname = usePathname();

  return (
    <ul className={`flex items-center ${className}`} onClick={handleClickList}>
      {elements.map((element, index) => {
        const path = paths[index] === "" ? "/" : "/" + paths[index];
        const isActive = pathname === path;

        return (
          <li key={element} className="mx-2 lg:mx-4">
            <Link
              href={path}
              className={`text-sm lg:text-base transition-all duration-300 hover:text-accent ${
                isActive
                  ? "text-accent font-semibold"
                  : "text-muted"
              }`}
              onClick={handleClickNavLink}
            >
              {element}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
