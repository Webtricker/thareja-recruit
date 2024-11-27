import { ReactNode } from "react";

type PropsType = {
  className?: string;
  children: ReactNode;
};

// px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]
/*
above padding is the minimum padding of phone please use the same padding
for left and right of the page as we don't have any mobile and tablet design we 
have to use the same padding for mobile and tablet devices. I have already used those 
so please use those for consistancy. for larger device like xl and 2xl you have to style 
according to figma. Thank you.
*/
const Container = ({ className, children }: PropsType) => {
  return (
    <div
      id="custom_container"
      className={`${className} w-full max-w-[1518px] mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
