import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { Apartment } from "./components/Apartment";
import Photos from "./components/Photos";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home />, index: true },
            { path: "/apartment", element: <Apartment /> },
            { path: "/photos", element: <Photos /> },
            { path: "/settings", element: <Home />}
    ]
    }
])