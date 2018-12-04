import ShowMapContainer from "../components/views/Admin/ShowMap/ShowMapContainer";
import ListingsContainer from "../components/views/Admin/Listings/ListingsContainer";

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
        component: ShowMapContainer
    },
];

export default adminRoutes;
