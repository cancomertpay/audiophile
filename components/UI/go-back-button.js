"use client";

import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={router.back}
      className="block py-5 lg:pt-20 lg:pb-14 text-base text-charcoal-gray/60"
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
