import { StrictMode, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configure.js";
import Home from "./pages/Home.jsx";
import DetailedPage from "./pages/DetailedPage.jsx";
import SearchinPage from "./pages/SearchinPage.jsx";
import Header from "./components/HomeComponent/Header.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { AppContextProvider, AppContext } from "./context/AppContext.jsx";
import { toast } from "react-toastify";

function AppWrapper() {
  const { authToken } = useContext(AppContext);

  useEffect(() => {
    if (authToken) {
      toast.success("Login successful!");
    }
  }, [authToken]);

  return <RouterProvider router={routes} />;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

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
        path: "/:game-name",
        element: <DetailedPage />,
      },
      {
        path: "/favourite",
        element: (
          <SignedIn>
            <FavouritePage />
          </SignedIn>
        ),
      },
    ],
  },
  {
    path: "/searching-page",
    element: (
      <>
        <Header />
        <SearchinPage />
      </>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <SignedOut>
        <SignIn />
      </SignedOut>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <SignedOut>
        <SignUp />
      </SignedOut>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContextProvider>
        <Provider store={store}>
          <AppWrapper />
        </Provider>
      </AppContextProvider>
    </ClerkProvider>
  </StrictMode>
);
