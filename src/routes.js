// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DashboardPage from "./views/Dashboard/Dashboard.jsx";
import UserProfile from "./views/UserProfile/UserProfile.jsx";
import Vacations from "./views/Vacations/Vacations.jsx";
import FAQ from "./views/Faq/faq";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/vacations",
    name: "Vacations",
    icon: "event",
    component: Vacations,
    layout: "/admin"
  },
  {
    path: "/faq",
    name: "FAQ",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: FAQ,
    layout: "/admin"
  }
];

export default dashboardRoutes;
