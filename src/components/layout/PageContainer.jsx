const PageContainer = ({ children }) => {
  return (
    <div className="px-5"> 
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-[1600px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
