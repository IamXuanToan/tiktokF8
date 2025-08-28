import { createBrowserRouter } from 'react-router';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import { DefaultLayout } from '~/components/Layout';

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />, // layout chính
        children: [
            { index: true, element: <Home /> },
            { path: 'profile', element: <Profile /> },
            { path: 'following', element: <Following /> },
        ],
    },
]);
