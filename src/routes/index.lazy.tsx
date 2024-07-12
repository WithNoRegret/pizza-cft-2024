import { createLazyFileRoute } from "@tanstack/react-router";
import { IndexPage } from "@pages/IndexPage/page";
export const Route = createLazyFileRoute('/')({
    component: IndexPage,
  })