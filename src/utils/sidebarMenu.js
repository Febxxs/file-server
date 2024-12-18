import {
  CircleDot,
  CircleUserRound,
  CloudUpload,
  FolderGit2,
  LayoutDashboard,
  ListTree,
  MonitorCog,
  Wrench,
} from "lucide-react";

export const sidebarMenu = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    color: "text-red-400 group-hover:text-white active:text-white",
  },
  {
    id: 2,
    name: "Iso",
    icon: CircleDot,
    path: "",
    color: "text-blue-400 group-hover:text-white active:text-white",
  },
  {
    id: 3,
    name: "Laboratorium",
    icon: MonitorCog,
    path: "",
    color: "text-green-600 group-hover:text-white active:text-white",
  },
  {
    id: 4,
    name: "Driver",
    icon: Wrench,
    path: "",
    color: "text-yellow-400 group-hover:text-white active:text-white",
  },
  {
    id: 5,
    name: "Lainya",
    icon: FolderGit2,
    path: "",
    color: "text-purple-400 group-hover:text-white active:text-white",
  },
  {
    id: 6,
    name: "Profile",
    icon: CircleUserRound,
    path: "/profile",
    color: "text-purple-400 group-hover:text-white active:text-white",
  },
];

export const sidebarAdminMenu = [
  {
    id: 1,
    name: "Upload",
    icon: CloudUpload,
    path: "",
    color: "text-purple-400 group-hover:text-white active:text-white",
  },
  {
    id: 2,
    name: "User List",
    icon: ListTree,
    path: "",
    color: "text-purple-400 group-hover:text-white active:text-white",
  },
];
