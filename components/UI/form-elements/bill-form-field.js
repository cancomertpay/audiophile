import Input from "./input";

function BillFormField({ formName = "", formError, inputs = [] }) {
  return (
    <div>
      <h2 className="uppercase text-primary-index font-bold text-[13px] tracking-widest mb-5 md:px-5 md:mb-1">
        {formName}
      </h2>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-0">
        {inputs.length > 0 &&
          inputs.map((input, index) => (
            <div
              key={index}
              className={`w-full md:p-5 ${
                input.id === "address" ? "md:w-full" : "md:w-1/2"
              }`}
            >
              <Input
                id={input?.id}
                title={input?.title}
                placeholder={input?.placeholder}
                type={input?.type}
                formError={formError[input?.id]}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default BillFormField;
