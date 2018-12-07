import ListingsContainer from "../components/views/Admin/Listings/ListingsContainer";
import UsersContainer from "../components/views/Admin/Users/UsersContainer";
import LeftoverMapContainer from "../components/views/Admin/Map/LeftoverMapContainer";

const adminRoutes = [
    {
        path: "/admin/leftovers",
        sidebarName: "All leftovers",
        navbarName: "All leftovers",
        icon: "",
        component: ListingsContainer
    },
    {
        path: "/admin/map",
        sidebarName: "Map",
        navbarName: "Map",
        component: LeftoverMapContainer
    },
    {
        path: "/admin/users",
        sidebarName: "Users",
        navbarName: "Users",
        component: UsersContainer
    },
];

export default adminRoutes;
