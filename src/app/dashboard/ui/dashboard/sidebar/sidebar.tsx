import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from 'next/image';
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
      { title: "Products", path: "/dashboard/products", icon: <MdShoppingBag /> },
      { title: "Transactions", path: "/dashboard/transactions", icon: <MdAttachMoney /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/dashboard/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
    ],
  },
  {
    title: "User",
    list: [
      { title: "Settings", path: "/dashboard/settings", icon: <MdOutlineSettings /> },
      { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];


const sidebar = () => {
  return (
    <div className="sticky top-10">
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default sidebar