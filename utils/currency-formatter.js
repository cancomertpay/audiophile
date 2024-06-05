function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2, 
  }).format(price);
}

export default formatPrice;
