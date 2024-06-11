"use client";

import { useCartContext } from "@/context/cart-context";
import { useEffect, useState } from "react";

import PaymentDetails from "@/components/checkout/payment-details";
import Summary from "@/components/checkout/summary";
import BillFormField from "@/components/UI/form-elements/bill-form-field";
import Success from "../success";

function CheckoutForm() {
  const { cartList, clearShoppingCart, cartSummary } = useCartContext();

  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const newErrors = {};
    for (const [key, value] of data.entries()) {
      if (!value) {
        newErrors[key] = `This field is required`;
      }
    }
    setFormError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formDataObject = Object.fromEntries(data);
      setFormData({
        customerInfo: formDataObject,
        purchasedList: cartList,
        orderSummary: cartSummary,
      });
      setSuccess(true);
      clearShoppingCart();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [success]);

  return (
    <>
      <form onSubmit={handleSubmit} className="lg:flex lg:gap-5 lg:items-start">
        <div className="bg-white p-5 md:p-0 lg:p-5 rounded-lg lg:w-8/12">
          <h1 className="uppercase md:p-5 tracking-wider text-black text-[28px] font-bold mb-8">
            Checkout
          </h1>
          <div className="flex w-full flex-col gap-10">
            {/* billing details section */}
            <BillFormField
              formName="Billing Details"
              formError={formError}
              inputs={[
                { id: "name", title: "Name", placeholder: "Alexei Ward" },
                {
                  id: "email",
                  title: "Email Address",
                  placeholder: "alexei@mail.com",
                  type: "email",
                },
                {
                  id: "phone-number",
                  title: "Phone Number",
                  placeholder: "+1 202-555-0136",
                  type: "text",
                },
              ]}
            />

            {/* shipping info */}
            <BillFormField
              formName="Shipping Info"
              formError={formError}
              inputs={[
                {
                  id: "address",
                  title: "Your Address",
                  placeholder: "1137 Williams Avenue",
                },
                {
                  id: "zip-code",
                  title: "ZIP Code",
                  placeholder: "10001",
                  type: "number",
                },
                {
                  id: "city",
                  title: "City",
                  placeholder: "New York",
                },
                {
                  id: "country",
                  title: "Country",
                  placeholder: "United States",
                },
              ]}
            />

            <PaymentDetails formError={formError} />
          </div>
        </div>
        <Summary />
      </form>
      <Success success={success} formData={formData} />
    </>
  );
}

export default CheckoutForm;
