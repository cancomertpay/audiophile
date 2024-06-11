function NumberField({ productAmount, setProductAmount }) {
  if (productAmount === undefined || (productAmount && null)) {
    throw new Error("Must be an productAmount state.");
  } else if (!setProductAmount) {
    throw new Error("Must be an setProductAmount state function.");
  }

  return (
    <div className="min-w-[120px] inline-flex items-center justify-around px-1 py-3 bg-off-white select-none">
      <span
        className="text-xs font-bold text-black hover:text-primary-index cursor-pointer"
        onClick={() =>
          setProductAmount((prev) => (prev !== 1 ? prev - 1 : prev))
        }
      >
        -
      </span>
      <span className="w-[25px] text-center">{productAmount}</span>
      <span
        className="text-xs font-bold text-black hover:text-primary-index cursor-pointer"
        onClick={() => setProductAmount((prev) => prev + 1)}
      >
        +
      </span>
    </div>
  );
}

export default NumberField;
