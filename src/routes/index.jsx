import Home from "../components/views/Home/Home";
import LoginContainer from "../components/views/Auth/Login/LoginContainer";
import TextInputExample from "../components/common/TextInput/TextInputExample";
import AdminContainer from "../components/views/Admin/AdminContainer";
import RestaurantContainer from "../components/views/Restaurant/RestaurantContainer";
import withAuth from "../HOCs/withAuth";

const indexRoutes = [
    { path: "/home", component: Home},
    { path: "/login", component: LoginContainer},
    { path: "/restaurant", component: withAuth(RestaurantContainer)},
    { path: "/admin", component: withAuth(AdminContainer)},
    { path: "/formsy", component: TextInputExample},
    { path: "/", component: Home},
];

export default indexRoutes;

