import { Outlet } from "react-router-dom";
import PageContent from "../components/PageContent";
export default function SubmissionLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <PageContent>
        <Outlet />
      </PageContent>
    </div>
  );
}
