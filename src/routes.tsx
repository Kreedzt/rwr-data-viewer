import { Navigate, useRoutes } from 'react-router-dom';
import Home from './entries/home/Home';
import Dashboard from './entries/dashboard/Dashboard';
import NotFound from './entries/notFound/NotFound';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: '404',
                    element: <NotFound />,
                },
                {
                    path: '*',
                    element: <Navigate to="/404" />,
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default Router;
