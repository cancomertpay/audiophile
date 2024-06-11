"use client";

import { useState } from "react";
import Module from "./UI/module";
import Button from "./UI/button";
import Image from "next/image";
import formatPrice from "@/utils/currency-formatter";
import { removeKeywords } from "@/utils/remove-keywords";

function Success({ formData, success }) {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <Module open={success} center>
      <div id="success" className="mx-6 p-7 md:p-14 bg-white rounded-lg md:min-w-[540px]">
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="Succes icon"
          className="mb-5"
          width={64}
          height={64}
        />
        <div>
          <h3 className="font-bold text-[24px] md:text-[32px] md:leading-9 mb-5">
            THANK YOU {<br className="hidden md:block" />} FOR YOUR ORDER
          </h3>
          <p className="text-black/50 text-[15px] font-medium mb-5 md:mb-8">
            You will receive an email confirmation shortly.
          </p>
        </div>
        {/* products */}
        <div className="my-5 md:mb-10 md:w-full md:flex md:items-stretch md:justify-center md:h-[140px] box-border">
          <ul
            className="box-content bg-off-white p-5 rounded-t-lg md:rounded-t-none md:rounded-s-lg max-h-[20vh] overflow-auto md:w-1/2 md:max-h-none cursor-pointer"
            onClick={() => setShowOthers((prev) => !prev)}
          >
            {formData?.purchasedList?.map((item, index, arr) => (
              <li
                key={index}
                className={`w-full flex items-center gap-5 ${
                  arr.length > 1 && index === 0 ? "pb-3 border-b-2" : ""
                } ${index > 0 && showOthers ? "py-3 border-b-2" : ""} ${
                  arr.length - 1 === index ? "pb-0 border-none" : ""
                }`}
              >
                {index === 0 || showOthers ? (
                  <>
                    <Image
                      src={item.image.mobile}
                      alt={item.name}
                      width={38}
                      height={42}
                    />
                    <div className="w-full flex items-center justify-between">
                      <div>
                        <div className="text-black font-bold text-[15px] uppercase">
                          {removeKeywords(item.name)}
                        </div>
                        <div className="text-black/50 font-bold text-[14px]">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                      <div className="text-black/50 font-bold text-[15px] text-end">
                        x{item.quantity}
                      </div>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
            {formData?.purchasedList?.length > 1 && !showOthers && (
              <li className="font-bold text-xs text-black/50 p-4 pb-0 cursor-pointer text-center">
                and {formData?.purchasedList?.length - 1} other item(s)
              </li>
            )}
          </ul>
          <div className="bg-black rounded-b-lg md:rounded-b-none md:rounded-e-lg p-5 md:w-1/2">
            <div className="md:flex md:flex-col md:h-full md:justify-center">
              <div className="text-white/50 font-bold uppercase tracking-wider text-[15px] mb-2">
                Grand Total
              </div>
              <div className="text-white font-bold text-[18px] tracking-wider">
                {formatPrice(formData?.orderSummary?.grandTotal)}
              </div>
            </div>
          </div>
        </div>
        <Button type="link" href={"/"}>
          Back to home
        </Button>
      </div>
    </Module>
  );
}

export default Success;
