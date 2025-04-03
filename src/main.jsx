import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configure.js";
import Home from "./pages/Home.jsx";
import DetailedPage from "./pages/DetailedPage.jsx";
import SearchinPage from "./pages/SearchinPage.jsx";
import Header from "./components/HomeComponent/Header.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/:game-name",
        element:<DetailedPage/>
      },
      {
        path:"/favourite",
        element:<FavouritePage/>
      }
    ],
  },
  
  {
    path:"/searching-page",
    element:<>
    <Header/>
    <SearchinPage/>
    </>
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
