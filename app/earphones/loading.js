import Image from "next/image";

function Loading() {
  return (
    <div className="h-screen w-screen bg-charcoal-gray flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/shared/desktop/logo.svg"
        alt="audiophile logo"
        width="148"
        height="25"
        priority
        className="animate-pulse"
      />
    </div>
  );
}

export default Loading;
