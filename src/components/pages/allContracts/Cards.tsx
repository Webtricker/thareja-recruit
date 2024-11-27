"use client";
import { setReviewContractIndex } from "@/redux/features/contact/allContractsSlice";
import {
  setActiveModal,
  setModalType,
  updateMessageSendingData,
} from "@/redux/features/contact/contractModals";
import { RootState } from "@/redux/store";
import { Contract } from "@/staticData/contractData";
import { getFormattedTimeDifference } from "@/utils/UtilityFN";
import { useDispatch, useSelector } from "react-redux";
import { FilledCircleBlueSVG } from "./Icons";

type PropsType = {
  data: Contract;
  index: number;
};
export const AllContractCard = ({ data, index }: PropsType) => {
  const dispatch = useDispatch();
  const contracts = useSelector(
    (state: RootState) => state.allContracts.activeContracts
  );
  const { clientEmail, contractName } = contracts[index];

  // ======= handlers =========
  const handleCLick = () => {
    dispatch(setReviewContractIndex(index));
    dispatch(setModalType("REVIEW_CONTRACT"));
    dispatch(setActiveModal(true));
    dispatch(
      updateMessageSendingData({
        target: "email",
        value: clientEmail ? clientEmail : "",
      })
    );
    dispatch(
      updateMessageSendingData({
        target: "contract",
        value: contractName ? contractName : "",
      })
    );

    dispatch(setReviewContractIndex(index));
  };
  return (
    <div
      onClick={handleCLick}
      className="w-full p-5 md:p-6 lg:p-8 2xl:p-10 rounded-[20px] border border-[#00000024] flex flex-col gap-5"
    >
      <h3 className="fs-xl-lh-normal">{data.contractName}</h3>
      <p className="fs-lg-lh-normal text-[#A8B7C1]">{data.clientEmail}</p>
      <p className="fs-xl-lh-normal">${data.totalAmount}</p>
      <p className="fs-xl-lh-normal mt-6 flex gap-2.5 items-center">
        <FilledCircleBlueSVG className="min-w-[21px]" />{" "}
        <span>
          Waiting to be accepted - {getFormattedTimeDifference(data.createdAt)}
        </span>
      </p>
    </div>
  );
};
