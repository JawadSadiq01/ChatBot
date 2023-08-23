import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import Loader from "./components/Loader";
import { ROUTES_CONSTANTS } from "./config/constants";
import FirstPage from "./pages/firstPage";
import LastPage from "./pages/lastPage";
import AppLayout from "./layout";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

const SecondPage = Loadable(lazy(() => import("./pages/secondPage")));

const appRoutes = [
  {
    key: `${ROUTES_CONSTANTS.FIRST_PAGE}`,
    path: "/",
    element: <FirstPage />,
  },
  {
    key: `${ROUTES_CONSTANTS.MAIN_LAYOUT}`,
    path: "/",
    element: (
      <AppLayout />
    ),
    children: [
      {
        key: `${ROUTES_CONSTANTS.SECOND_PAGE}`,
        path: `${ROUTES_CONSTANTS.SECOND_PAGE}`,
        element: <SecondPage />,
      },
      {
        key: `${ROUTES_CONSTANTS.EXIT_PAGE}`,
        path: `${ROUTES_CONSTANTS.EXIT_PAGE}`,
        element: <LastPage />,
      },
    ],
  },
];

const ROLES_ROUTES: any = {
  Student: appRoutes,
};

export const getRoutes = (role: any) => {
  return ROLES_ROUTES[role];
};
