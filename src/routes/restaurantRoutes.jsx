import MyListingsContainer from "../components/views/Restaurant/MyListings/MyListingsContainer";
import Profile from "../components/views/Restaurant/Profile/Profile";
import AddressesContainer from "../components/views/Restaurant/Addresses/AddressesContainer";

const restaurantRoutes = [
    {
        path: "/restaurant/profile",
        sidebarName: "Restaurant profile",
        navbarName: "Restaurant profile",
        icon: "",
        component: Profile
    },
    {
        path: "/restaurant/my-leftovers",
        sidebarName: "My Listings",
        navbarName: "My listings",
        component: MyListingsContainer
    },
    {
      path: "/restaurant/addresses",
      sidebarName: "My Adresses",
      navbarName: "My Addresses",
      icon: "",
      component: AddressesContainer
    },
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

export default restaurantRoutes;
