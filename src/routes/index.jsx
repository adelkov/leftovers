import Home from "../components/views/Home/Home";
import LoginContainer from "../components/views/Auth/Login/LoginContainer";
import TextInputExample from "../components/common/TextInput/TextInputExample";
import AdminContainer from "../components/views/Admin/AdminContainer";
import RestaurantContainer from "../components/views/Restaurant/RestaurantContainer";

const indexRoutes = [
    { path: "/home", component: Home},
    { path: "/login", component: LoginContainer},
    { path: "/restaurant", component: RestaurantContainer},
    { path: "/admin", component: AdminContainer},
    { path: "/formsy", component: TextInputExample},
    { path: "/", component: Home},
];

export default indexRoutes;

