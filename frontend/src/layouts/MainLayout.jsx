import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import PageContent from "../components/PageContent";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navigation />
      <PageContent>
        <Outlet />
      </PageContent>
    </div>
  );
}
