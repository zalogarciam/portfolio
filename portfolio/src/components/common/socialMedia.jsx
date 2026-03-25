import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaSteam, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = ({}) => {
  const socials = [
    { icon: <BsGithub />, href: "//github.com/zalogarciam", label: "GitHub" },
    { icon: <BsLinkedin />, href: "//linkedin.com/in/zalogarciam", label: "LinkedIn" },
    { icon: <BsInstagram />, href: "//instagram.com/zalogarciam", label: "Instagram" },
    { icon: <BsYoutube />, href: "//youtube.com/zalogarciam", label: "YouTube" },
    { icon: <BsTwitter />, href: "//twitter.com/zalogarciam", label: "Twitter" },
    { icon: <BsFacebook />, href: "//facebook.com/zalogarciam", label: "Facebook" },
    { icon: <FaTiktok />, href: "//tiktok.com/@zalogarciam7", label: "TikTok" },
    { icon: <FaSteam />, href: "//steamcommunity.com/id/zalogarciam/", label: "Steam" },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          className="p-3 bg-foreground/5 rounded-xl text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
          aria-label={social.label}
        >
          <span className="text-xl">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
