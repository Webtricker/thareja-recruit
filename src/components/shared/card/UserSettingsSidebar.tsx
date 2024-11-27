import Link from "next/link";

type Links = {
  label: string;
  slug: string;
};
const sidebarLinks: Links[] = [
  {
    label: "Contact Info",
    slug: "contact-info",
  },
  {
    label: "Tax Information",
    slug: "tax-information",
  },
  {
    label: "Tax Forms",
    slug: "tax-forms",
  },
  {
    label: "My Profile",
    slug: "profile-settings",
  },
  {
    label: "Profile Settings",
    slug: "my-profile",
  },
  {
    label: "My Teams",
    slug: "my-teams",
  },
  {
    label: "Identity Verification",
    slug: "identity-verification",
  },
];

type Props = {
  activePage: string;
};
const UserSettingsSidebar = ({ activePage }: Props) => {
  return (
    <div className="w-full py-[30px] px-6 rounded-[20px] border border-[#97BCFF] bg-[#FAFCFF]">
      <h3 className="fs-lg-lh-normal text-[#005AFF]">User Settings</h3>
      {/* ======== links ====== */}
      <ul className="flex flex-col gap-5 mt-5 relative">
        {sidebarLinks.map((link, _i) => (
          <li
            className={`fs-base z-20
                ${
                  activePage === link.slug
                    ? "py-1 !bg-[#FAFCFF]"
                    : "bg-transparent"
                } 
                 ${activePage === link.slug && _i === 0 ? "!pt-0" : ""}
                 ${
                   activePage === link.slug && _i === sidebarLinks.length - 1
                     ? "!pb-0"
                     : ""
                 }
                 `}
            key={link.label}
          >
            {activePage === link.slug ? (
              <h5
                className={`pl-[10px]  text-[#005AFF] cursor-pointer block ${
                  activePage === link.slug && "border-l-2 border-[#005AFF]"
                }`}
              >
                {link.label}
              </h5>
            ) : (
              <Link className="pl-[12px]" href={`/settings/${link.slug}`}>
                {link.label}
              </Link>
            )}
          </li>
        ))}

        {/* ===== active border ======== */}
        <div className="z-10 w-0.5 h-full bg-[#A8B7C1] absolute top-0 left-0"></div>
      </ul>
    </div>
  );
};

export default UserSettingsSidebar;
