import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { GroupsPage } from "./pages/GroupsPage";
import { VideosPage } from "./pages/VideosPage";
import { ForumPage } from "./pages/ForumPage";
import { MapPage } from "./pages/MapPage";
import { ParkingPage } from "./pages/ParkingPage";
import { ProfilePage } from "./pages/ProfilePage";
import { EnterprisePage } from "./pages/EnterprisePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "groups", Component: GroupsPage },
      { path: "videos", Component: VideosPage },
      { path: "forum", Component: ForumPage },
      { path: "map", Component: MapPage },
      { path: "parking", Component: ParkingPage },
      { path: "entreprise", Component: EnterprisePage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);
