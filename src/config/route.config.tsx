import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { Home } from "@/pages/Home"
import WhatToDo from "@/pages/WhatToDo"
import WhereToStay from "@/pages/WhereToStay"
import Events from "@/pages/Events"
import { PlanYourTrip } from "@/pages/PlanYourTrip"
import { About } from "@/pages/About"
import { NotFound } from "@/pages/NotFound"
import { ROUTES } from "./routes"
import Blogs from "@/pages/Blogs"
import BlogDetail from "@/components/blog/[id]/BlogDetail"

export interface RouteConfig {
  path: string
  element: React.ComponentType
  title?: string
  description?: string
  requiresAuth?: boolean
}

export const routeConfig: RouteConfig[] = [
  {
    path: ROUTES.HOME,
    element: Home,
    title: "Home",
    description: "Visit Addis Ababa - The Vibrant Heart of Africa",
  },
  {
    path: ROUTES.WHAT_TO_DO,
    element: WhatToDo,
    title: "What to Do",
    description: "Discover amazing activities and experiences in Addis Ababa",
  },
  {
    path: ROUTES.WHERE_TO_STAY,
    element: WhereToStay,
    title: "Where to Stay",
    description: "Find the perfect accommodation for your stay in Addis Ababa",
  },
  {
    path: ROUTES.EVENTS,
    element: Events,
    title: "Events",
    description: "Explore upcoming events and festivals in Addis Ababa",
  },
  {
    path: ROUTES.PLAN_YOUR_TRIP,
    element: PlanYourTrip,
    title: "Plan Your Trip",
    description: "Get all the information you need to plan your perfect trip to Addis Ababa",
  },
  {
    path: ROUTES.ABOUT,
    element: About,
    title: "About Us",
    description: "Learn more about Visit Addis Ababa and our mission",
  },
  {
    path: ROUTES.BLOGS,
    element: Blogs,
    title: "Blogs",
  },
  {
    path: ROUTES.BlogDetail,
    element: BlogDetail,
    title: "Blog Detail",
    description: "Blog Detail"
  }
]

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      {routeConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default ROUTER

