const ProjectTechs = ({ techs }) => {
  return (
    <div className="d-flex gap-xs">
      {techs.map((t, index) => {
        return <img key={index} src={t} alt={t} width="32" height="32"></img>;
      })}
    </div>
  );
};

export default ProjectTechs;
