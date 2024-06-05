function Container({ children }) {
  return (
    <div className="w-full py-32 px-5 md:px-10 lg:px-36 lg:pb-40 flex items-center justify-center gap-5 overflow-hidden ">
      {children}
    </div>
  );
}

export default Container;
