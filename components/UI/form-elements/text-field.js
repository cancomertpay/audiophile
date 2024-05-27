function TextField({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMsg = "",
  ...restProps
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className={`flex items-center justify-between`}>
        <label
          htmlFor={id}
          className={`text-xs font-bold ${error ? "text-error" : "text-black"}`}
        >
          {label}
        </label>
        <span className="text-error text-xs font-bold">{errorMsg}</span>
      </div>
      <input
        className={`p-4 ring-1 outline-none rounded-md text-sm font-bold text-black transition-all duration-300 ${
          error
            ? "ring-error"
            : "ring-off-white focus:ring-primary-index hover:ring-primary-hover"
        }`}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
}

export default TextField;
