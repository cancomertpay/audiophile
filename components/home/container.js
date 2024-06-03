function Container({ children }) {
  return (
    <div className="w-full my-32 px-5 md:px-10 flex items-center justify-center gap-5 overflow-hidden lg:px-44">
      {children}
    </div>
  );
}

export default Container;
