import { createBrowserRouter } from 'react-router';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import { DefaultLayout } from '~/components/Layouts';

import routesConfig from '~/config/routes';

export const publicRoutes = createBrowserRouter([
    {
        path: routesConfig.home,
        element: <DefaultLayout />, // layout chính
        children: [
            { index: true, element: <Home /> },
            { path: routesConfig.profile, element: <Profile /> },
            { path: routesConfig.following, element: <Following /> },
        ],
    },
]);
