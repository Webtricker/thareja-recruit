type PropsType = {
  children: JSX.Element;
};
const ReviewPostFieldModal = ({ children }: PropsType) => {
  return (
    <div className="overflow-y-auto w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0000009e] flex items-center justify-center p-4 py-10 lg:p-10 z-[99999999]">
      {children}
    </div>
  );
};
export default ReviewPostFieldModal;
