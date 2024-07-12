import { createLazyFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "../pages/ProfilePage/page";

export const Route = createLazyFileRoute('/profile')({
        component: ProfilePage,
    })