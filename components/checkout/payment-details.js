"use client";

import { useState } from "react";
import RadioSelection from "../UI/form-elements/radio-selection";
import Input from "../UI/form-elements/input";

function PaymentDetails({ formError }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("e-money");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="md:px-5 md:pb-5">
      <div className="w-full md:flex md:justify-between">
        <div className="text-xs font-bold text-black mb-2">Payment Method</div>
        <div className="flex flex-col gap-4 md:min-w-[309px]">
          <RadioSelection
            id="e-money"
            title="e-Money"
            value="e-money"
            checked={selectedPaymentMethod === "e-money"}
            onChange={handlePaymentMethodChange}
          />
          <RadioSelection
            id="cash-on-delivery"
            title="Cash on Delivery"
            value="cash-on-delivery"
            checked={selectedPaymentMethod === "cash-on-delivery"}
            onChange={handlePaymentMethodChange}
          />
        </div>
      </div>
      {selectedPaymentMethod === "e-money" && (
        <div className="mt-8 w-full md:flex md:items-center md:justify-center md:gap-5">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <Input
              id="e-money-number"
              title="e-Money Number"
              placeholder="238521993"
              formError={formError["e-money-number"]}
            />
          </div>
          <div className="md:w-1/2">
            <Input
              id="e-money-pin"
              title="e-Money PIN"
              placeholder="6891"
              formError={formError["e-money-pin"]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentDetails;
