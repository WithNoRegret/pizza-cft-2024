import { createRootRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/component";

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout />
        </>
    )
})