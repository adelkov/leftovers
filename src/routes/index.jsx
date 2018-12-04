import Home from "../components/views/Home/Home";
import Restaurant from "../components/views/Restaurant/Restaurant";
import Admin from "../components/views/Admin/Admin";
import LoginContainer from "../components/views/Auth/Login/LoginContainer";
import TextInputExample from "../components/common/TextInput/TextInputExample";

const indexRoutes = [
    { path: "/home", component: Home},
    { path: "/login", component: LoginContainer},
    { path: "/restaurant", component: Restaurant},
    { path: "/admin", component: Admin},
    { path: "/formsy", component: TextInputExample},
];

export default indexRoutes;

