import Listings from "../components/views/Admin/Listings/Listings";
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
    // {
    //   path: "/table",
    //   sidebarName: "Table List",
    //   navbarName: "Table List",
    //   icon: "content_paste",
    //   component: TableList
    // },
    // {
    //   path: "/typography",
    //   sidebarName: "Typography",
    //   navbarName: "Typography",
    //   icon: LibraryBooks,
    //   component: Typography
    // },
    // {
    //   path: "/icons",
    //   sidebarName: "Icons",
    //   navbarName: "Icons",
    //   icon: BubbleChart,
    //   component: Icons
    // },
    // {
    //   path: "/maps",
    //   sidebarName: "Maps",
    //   navbarName: "Map",
    //   icon: LocationOn,
    //   component: Maps
    // },
    // {
    //   path: "/notifications",
    //   sidebarName: "Notifications",
    //   navbarName: "Notifications",
    //   icon: Notifications,
    //   component: NotificationsPage
    // },
    //
    // {redirect: true, path: "/", to: "/my-leftovers", navbarName: "Redirect"}
];

export default adminRoutes;
