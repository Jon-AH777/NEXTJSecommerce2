"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`text-white flex items-center gap-2.5 mx-0 my-[5px] p-5 rounded-[10px] ${
        pathname === item.path ? "bg-hoverColor" : "hover:bg-hoverColor"
       }  `}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
