import { createBrowserRouter } from 'react-router';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import DefaultLayout from '~/layouts';

import config from '~/config';

export const publicRoutes = createBrowserRouter([
    {
        path: config.routes.home,
        element: <DefaultLayout />, // layout chính
        children: [
            { index: true, element: <Home /> },
            { path: config.routes.profile, element: <Profile /> },
            { path: config.routes.following, element: <Following /> },
        ],
    },
]);
