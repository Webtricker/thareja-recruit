const PaymentCalculatedAmounts = () => {
  return (
    <div className="w-full flex flex-col gap-[13px]">
      <div className="w-full flex items-center justify-between">
        <p className="fs-lg-lh-normal">Subtotal</p>
        <span className="fs-lg-lh-normal">
          $<span>29.99</span>
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="fs-lg-lh-normal">Estimated taxes</p>
        <span className="fs-lg-lh-normal">
          <span>--</span>
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="fs-lg-lh-normal">Estimated total</p>
        <span className="fs-lg-lh-normal">
          <span>--</span>
        </span>
      </div>
    </div>
  );
};

export default PaymentCalculatedAmounts;
