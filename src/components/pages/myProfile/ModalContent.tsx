import {
  CustomModal,
  CustomModalHeader,
} from "@/components/shared/modal/Modal";

/*
custom modal props 
 closeHandler?: Function;
  wrapperContainerStyle?: string;
  containerStyle?: string;
  children: React.ReactNode;
  activeKey: string;

  Header props
  title: string;
  containerStyle?: string;
  buttonStyle?: string;
  titleStyle?: string;
  closeHandler: Function;
*/
export const CategoryUpdateModal = () => {
  // constrant & variables
  const activeKey = "SETTING_MY_PROFILE_CATEGORY_UPDATE_MODAL";
  return (
    <CustomModal activeKey={activeKey} key={activeKey}>
      <CustomModalHeader title="Update Categories" />
      <div className="w-full mt-5">
        <h2>Couldn&apos; find any related content!</h2>
      </div>
    </CustomModal>
  );
};
