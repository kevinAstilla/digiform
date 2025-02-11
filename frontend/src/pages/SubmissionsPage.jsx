// hooks
import UseHttp from "../hooks/useHttp";
import { useRouteLoaderData } from "react-router-dom";
// UI and utils
import { dateFormatter } from "../utils/dateFormatter";
import { IconLoaderQuarter } from "@tabler/icons-react";
import DataTable from "../UI/DataTable";

export default function SubmissionsPage() {
  //   const { formId } = useParams();
  const { form } = useRouteLoaderData("formDetail");
  const {
    data: submissions,
    isLoading,
    error,
    sendRequest,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/forms/${form.id}/submissions`,
  });

  return (
    <>
      <p className="page-title">Submissions</p>
      <DataTable
        values={submissions.map((submission) => {
          return {
            ...submission,
            created_at: dateFormatter(submission.created_at),
            submitted_at: dateFormatter(submission.submitted_at),
          };
        })}
        columns={{
          id: "ID",
          created_at: "Created at",
          submitted_at: "Submitted at",
        }}
        isLoading={isLoading}
      />
    </>
  );
}
