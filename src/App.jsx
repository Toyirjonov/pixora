import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import { Home, Login, Profile, Signup, SingleImage } from "./pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, authReady } from "./app/features/userSlice";

import { useDispatch } from "react-redux";

function App() {
  const { user, isAuthReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleImage/:id",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    dispatch(login(user));
    dispatch(authReady());
  });

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
