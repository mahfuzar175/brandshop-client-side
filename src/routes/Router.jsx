import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../components/AboutUs";
import Brands from "../pages/Home/Brands/Brands";
import AddProduct from "../pages/Add Product/AddProduct";
import MyCart from "../pages/My Cart/MyCart";
import Product from "../pages/Product/Product";
import Details from "../pages/Details/Details";
import Update from "../pages/Update/Update";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brands',
                element:<Brands></Brands>,
                loader: async () => {
                    const res = await fetch('/brands.json');
                    const services = await res.json();
                    return services;}
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/product/:brand_name',
                element: <Product></Product>,
                loader: () => fetch('https://b8a10-brandshop-server-side-mahfuzar175-6b3kn7e7g.vercel.app/products')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-mahfuzar175-6b3kn7e7g.vercel.app/products/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-mahfuzar175-6b3kn7e7g.vercel.app/products/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://b8a10-brandshop-server-side-mahfuzar175-6b3kn7e7g.vercel.app/cart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
        
        
    }
]);

export default router;