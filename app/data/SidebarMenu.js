import {
  BarChart4,
  BookUser,
  CircleDollarSign,
  ClipboardPlus,
  Gift,
  Layout,
  Network,
  RefreshCcwDot,
  Settings,
  ShieldCheck,
  ShoppingBasket,
  UserRoundCog,
} from "lucide-react";

export const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: ClipboardPlus,
    label: "Patient Info",
    href: "/dashboard/patient",
  },
  {
    icon: ClipboardPlus,
    label: "Patient Info",
    href: "/dashboard/patientinfo",
  },
];

export const adminRoutes = [
  {
    icon: ClipboardPlus,
    label: "Patient Info",
    href: "/dashboard/patientinfo",
  },
];
