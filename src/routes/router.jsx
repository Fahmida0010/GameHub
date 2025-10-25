import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";
import ExtraPage from "../pages/ExtraPage";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import About from "../pages/About";
import GameCard from "../components/GameCard";
import AllGames from "../pages/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  //  errorElement: <NotFound/>,
    children: [
      { index: true, element: <Home/> },
      {
        path: "games/:id",
        element: (
          <PrivateRoute>
            <GameDetails/>
          </PrivateRoute>
        ),
      },
      { path: "my-profile", 
        element: <MyProfile/>
      },
      { path: "update",
         element: <PrivateRoute><UpdateProfile/></PrivateRoute> 
        },
      { path: "extrapage", 
        element: <ExtraPage/> 
      },
       { path: "about",
         element: <About/> 
        },
        { path: "games",
         element: <GameCard/> 
        },
         
         { path: "*",
         element: <NotFound/> 
        },
      { path: "login",
         element: <Login/> 
        },
      { path: "register", 
        element: <Register/> 
      },
      { path: "forget-password", 
        element: <ForgetPassword/>
       },
       { path: "allgames", 
        element: <AllGames/>
       },
    ],
  },
]);

export default router;
