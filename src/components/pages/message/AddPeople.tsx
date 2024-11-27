import { setUserProfileActiveDropdown } from "@/redux/features/message/MessageActiveStages";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { GroupPeopleSVG, UpArrowSVG } from "./Icons";

type ConnectedProple = {
  id: number;
  imgUrl: string;
  imgAlt: string;
  name: string;
  status: string;
  role: string;
};
const connectedPeople: ConnectedProple[] = [
  {
    id: 2,
    imgUrl: "/img/profile/muhammad-i.svg",
    imgAlt: "Muhammad I",
    name: "Muhammad l.",
    status: "ACTIVE",
    role: "Admin (you)", // have to change it later.
  },
  {
    id: 1,
    imgUrl: "/img/profile/ali-d.svg",
    name: "Ali D.",
    imgAlt: "Ali D",
    status: "ACTIVE",
    role: "Owner",
  },
];

type UserCardPropsType = {
  user: ConnectedProple;
};
const UserCard = ({ user }: UserCardPropsType) => {
  return (
    <div className="w-full flex gap-[18px]">
      <div className="relative w-full max-w-[72px]">
        {user.imgUrl ? (
          <div
            className={`p-1 rounded-full w-[72px]  h-[72px] border-[1.5px] ${
              user.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <Image
              src={user.imgUrl}
              width={72}
              height={72}
              alt="Profile"
              className="w-full h-full bg-[#DDE3E7] rounded-full"
            />
          </div>
        ) : (
          <div
            className={`p-1 rounded-full w-[72px]  h-[72px] border-[1.5px] flex items-center justify-center bg-[#DDE3E7] ${
              user.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <span className="fs-md text-[#525966]">{user.imgAlt}</span>
          </div>
        )}

        <span
          className={`absolute z-50 right-0.5 bottom-0.5  w-[17px] h-[17px] rounded-full border-[1.5px] border-white ${
            user.status === "ACTIVE" ? "bg-[#01D18F]" : "bg-[#DDE3E7]"
          } `}
        ></span>
      </div>
      <div className="flex-grow">
        <h4 className="fs-lg-lh-normal mb-1.5">{user.name}</h4>
        <p>{user.role}</p>
      </div>
    </div>
  );
};

const AddPeople = () => {
  const dispatch = useDispatch();
  return (
    <div className="custom_scrollbar w-full max-w-[420px]  p-5 md:p-6 lg:p-[30px] bg-[#005aff0a] rounded-[30px] h-full overflow-y-auto">
      <div className="mb-6 flex items-center  w-full gap-5 md:gap-2.5 max-w-[720px] justify-between">
        <div className="flex items-center gap-5 w-full flex-grow">
          <GroupPeopleSVG />
          <p className="fs-md">People</p>
        </div>
        <button
          onClick={() => dispatch(setUserProfileActiveDropdown(null))}
          className="text-[#005AFF] w-auto"
        >
          <UpArrowSVG />
        </button>
      </div>

      {/* ========= all grouped people =========== */}
      <div className="w-full flex flex-col gap-5 mb-10">
        {/* ===== profile ========  */}
        {connectedPeople.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <button className="fs-md btn-large btn-border-blue w-full bg-white">
        Add people
      </button>
    </div>
  );
};

export default AddPeople;
