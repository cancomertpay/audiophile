function NewProductIndicator({ color = "text-primary-index" }) {
  if (!color.includes("text")) {
    throw new Error("Please only use tailwindcss color classes.");
  }
  return (
    <span className={`text-sm tracking-[10px] uppercase text-center ${color}`}>
      New Product
    </span>
  );
}

export default NewProductIndicator;
