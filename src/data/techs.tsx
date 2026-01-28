import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaFlask,
  FaWrench,
  FaBrain,
} from "react-icons/fa6";
import type { Tech, TechCategoryInfo } from "@/interfaces";

export const TECH_CATEGORIES: TechCategoryInfo[] = [
  {
    id: "frontend",
    icon: <FaCode className="h-4 w-4" />,
  },
  {
    id: "backend",
    icon: <FaServer className="h-4 w-4" />,
  },
  {
    id: "database",
    icon: <FaDatabase className="h-4 w-4" />,
  },
  {
    id: "devops",
    icon: <FaRocket className="h-4 w-4" />,
  },
  {
    id: "testing",
    icon: <FaFlask className="h-4 w-4" />,
  },
  {
    id: "tools",
    icon: <FaWrench className="h-4 w-4" />,
  },
  {
    id: "ai",
    icon: <FaBrain className="h-4 w-4" />,
  },
];

export const TECH_STACK: Tech[] = [];
