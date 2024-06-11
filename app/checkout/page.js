import CheckoutForm from "@/components/checkout/checkout-form";
import GoBackButton from "@/components/UI/go-back-button";

function CheckoutPage() {
  return (
    <div className="mx-5 lg:mx-36 pb-24">
      <GoBackButton />
      <CheckoutForm />
    </div>
  );
}

export default CheckoutPage;
