function RadioSelection({ id, title, value, checked, onChange }) {
  return (
    <label
      className={`flex items-center p-5 border rounded-lg hover:border-primary-index transition-all duration-300 cursor-pointer ${
        checked ? "border-primary-index" : "border-off-white"
      }`}
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        name="payment-method"
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 accent-primary-index"
      />
      <span className="ml-2 text-black text-sm font-bold">{title}</span>
    </label>
  );
}

export default RadioSelection;
