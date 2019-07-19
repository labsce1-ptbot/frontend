// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Register from "@material-ui/icons/GroupAdd";
import Login from "@material-ui/icons/LockOpen";
import DashboardPage from "./views/Dashboard/Dashboard.jsx";
import UserProfile from "./views/UserProfile/UserProfile.jsx";
import TableList from "./views/TableList/TableList.jsx";
import NotificationsPage from "./views/Notifications/Notifications.jsx";
import LoginPage from "./views/Pages/LoginPage.jsx";
import RegisterPage from "./views/Pages/RegisterPage.jsx";
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
