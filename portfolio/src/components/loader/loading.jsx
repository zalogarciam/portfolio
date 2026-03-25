const LoadingContainer = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 backdrop-blur-sm">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingContainer;
