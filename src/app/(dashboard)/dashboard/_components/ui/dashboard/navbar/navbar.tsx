"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-backSoft flex items-center justify-between p-5 rounded-[10px]">
    <div className="font-bold capitalize text-white">
      {pathname.split("/").pop()}
    </div>
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2.5 p-2 rounded-[10px] bg-hoverColor">
        <MdSearch />
        <input type="text" placeholder="Search..." className="bg-transparent border-[none]" />
      </div>
      <div className="flex gap-5">
        <MdOutlineChat size={20} />
        <MdNotifications size={20} />
        <MdPublic size={20} />
      </div>
    </div>
  </div>
  )
}

export default navbar