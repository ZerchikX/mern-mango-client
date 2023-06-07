import Admin from "./pages/Admin"
import Auth from "./pages/auth"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import TovarPage from "./pages/TovarPage"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, BASKET_ROUTE, TOVAR_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TOVAR_ROUTE + '/:id',
        Component: TovarPage
    },

]