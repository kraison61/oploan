const layoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
          {children}
      </div>
    </div>
  );
};
export default layoutAdmin;
