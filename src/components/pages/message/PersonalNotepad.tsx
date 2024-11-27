import { setUserProfileActiveDropdown } from "@/redux/features/message/MessageActiveStages";
import { useDispatch } from "react-redux";
import { EditDocumentSVG, UpArrowSVG } from "./Icons";

const PersonalNotepad = () => {
  const dispatch = useDispatch();
  return (
    <div className="custom_scrollbar w-full max-w-[420px]  p-5 md:p-6 lg:p-[30px] bg-[#005aff0a] rounded-[30px] h-full overflow-y-auto">
      <div className="mb-6 flex items-center  w-full gap-5 md:gap-2.5 max-w-[720px] justify-between">
        <div className="flex items-center gap-5 w-full flex-grow">
          <EditDocumentSVG />
          <p className="fs-md">Personal notepad</p>
        </div>
        <button
          onClick={() => dispatch(setUserProfileActiveDropdown(null))}
          className="text-[#005AFF] w-auto"
        >
          <UpArrowSVG />
        </button>
      </div>

      {/*  =========== content =========== */}
      <div className="w-full">
        <p className="fs-base ml-[17px] mb-[14px]">
          Use this space to save your thought however you&apos;d like:
        </p>

        {/*  ========= unordered lists =========== */}
        <ul className="w-full mb-[14px] list-disc ml-[17px] flex flex-col gap-2.5 max-w-[263px]">
          <li className="fs-base">Type notes on your conversation</li>
          <li className="fs-base">Organise your project plans</li>
          <li className="fs-base">Keep a record of to-dos and due dates</li>
          <li className="fs-base">Make note of key client preferences</li>
        </ul>

        {/* ========== note =========== */}
        <p className="fs-base ml-[17px] mb-[30px]">
          Notes you type are only visible to you, and can always be accessed
          through your messages with this client.
        </p>

        <p className="fs-base ml-[17px] mb-[30px]">
          Notes are saved automatically as you type.
        </p>
      </div>
    </div>
  );
};

export default PersonalNotepad;
