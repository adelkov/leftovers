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
];

export default restaurantRoutes;
