const ProjectTechs = ({ techs }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map((t, index) => (
        <div 
          key={index} 
          className="w-8 h-8 p-1.5 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-colors"
        >
          <img 
            src={t} 
            alt="tech" 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectTechs;
