function RadioSelection({ name, label, ...restProps }) {
  return (
    <label className="flex items-center p-5 border border-off-white rounded-md hover:border-primary-index transition-all duration-300 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="h-5 w-5 accent-primary-index"
        {...restProps}
      />
      <span className="ml-2 text-black text-sm font-bold">{label}</span>
    </label>
  );
}

export default RadioSelection;
