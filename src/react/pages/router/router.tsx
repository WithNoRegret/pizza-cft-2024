import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';

import { MainPage } from '../MainPage/MainPage';
import { OrderPage } from '../OrderPage/OrderPage';
import { ProfilePage } from '../ProfilePage/ProfilePage';
import { OrderListPage } from '../OrderListPage/OrderListPage';
import { OrderCardPage } from '../OrderCardPage/OrderCardPage';
import { OrderDetailsPage } from '../OrderDetailsPage/OrderDetailsPage';

const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainPage />} >
            <Route path="order/" element={<OrderPage />} >
                <Route path="details" element={<OrderDetailsPage />} />
                <Route path="card" element={<OrderCardPage />} />
            </Route>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="orderList" element={<OrderListPage />} />
        </Route>
    )
);

export const mainRouterProvider = () => {
    return <RouterProvider router={mainRouter} />
}