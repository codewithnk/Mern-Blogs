import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { TbLogs } from "react-icons/tb";
import { FaComments } from "react-icons/fa6";
import { LiaUserSolid } from "react-icons/lia";

const menuItems = [
  { name: "Home", icon: <IoHomeOutline />, path: "/" },
  { name: "Categories", icon: <BiCategoryAlt />, path: "/categories" },
  { name: "Blogs", icon: <TbLogs />, path: "/blogs" },
  { name: "Comments", icon: <FaComments />, path: "/comments" },
  { name: "Users", icon: <LiaUserSolid />, path: "/users" },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={Logo} width={120} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup />
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton>
                {item.icon}
                <Link to={item.path}>{item.name}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
