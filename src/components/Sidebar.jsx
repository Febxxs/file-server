import { motion } from "motion/react";
import { SidebarAnimation } from "../utils/motion";
import { CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import { sidebarAdminMenu, sidebarMenu } from "../utils/sidebarMenu";
import { Divider } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarOpen }) => {
  return (
    <motion.aside
      variants={SidebarAnimation}
      animate={sidebarOpen ? "open" : "closed"}
      className="bg-white  z-[999] w-64 max-w-64 h-screen overflow-hidden md:relative fixed"
    >
      <div className="flex items-center gap-5 py-5 mx-4 overflow-x-hidden min-w-max ">
        <CircuitBoard size={30} className="text-primary" />
        <h1 className="font-bold text-xl whitespace-pre ">File Server</h1>
      </div>

      <div className="px-3">
        <Divider />
      </div>

      {/* menu */}
      <div className="flex flex-col h-full">
        <ul className="whitespace-pre px-2.5 py-5 flex flex-col gap-1 overflow-x-hidden">
          {sidebarMenu.map((item) => (
            <li
              className="link hover:bg-primary transition-colors duration-300 group"
              key={item.id}
            >
              <Link className="min-w-max flex items-center gap-5 font-se group-hover:text-white group-hover:bg-opacity-90 transition-all duration-300">
                {<item.icon className={`transition-colors ${item.color}`} />}
                <span className="font-semibold">{item.name}</span>
              </Link>
            </li>
          ))}

          {/* admin menu */}
          {sidebarAdminMenu.map((item) => (
            <li
              className="link hover:bg-primary transition-colors duration-300 group"
              key={item.id}
            >
              <Link className="min-w-max flex items-center gap-5 font-se group-hover:text-white group-hover:bg-opacity-90 transition-all duration-300">
                {<item.icon className={`transition-colors ${item.color} `} />}
                <span className="font-semibold">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
