// hooks
import UseHttp from "../hooks/useHttp";
import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
// UI and utils
import { dateFormatter } from "../utils/dateFormatter";
import DataTable from "../UI/DataTable";
import FormComponent from "../components/FormComponent";
import Modal from "../UI/Modal";

export default function SubmissionsPage() {
  const { form } = useRouteLoaderData("formDetail");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [searchParams, setSearchParams] = useState({});
  const params = new URLSearchParams(searchParams);
  const {
    data: response,
    isLoading,
    error,
    sendRequest,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/forms/${
      form.id
    }/submissions?${params}`,
    initialData: {
      currentPage: 1,
      data: [],
    },
  });

  function rowClickHandler({ index, value }) {
    setFormData(() => {
      return { ...value.data };
    });
    setShowModal(() => true);
  }

  function closeModalHandler() {
    setShowModal(() => false);
    setFormData(() => {});
  }

  function pageButtonHandler(id) {
    setSearchParams((curr) => {
      return {
        ...curr,
        page: id,
      };
    });
    sendRequest();
  }

  return (
    <>
      <Modal open={showModal} onClose={() => closeModalHandler()}>
        <FormComponent
          formData={formData}
          templateId={form.template_id}
          isPreview={true}
        />
      </Modal>
      <p className="page-title">Submissions</p>
      <DataTable
        values={response.data.map((submission) => {
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
        currentPage={response.currentPage}
        totalPages={response.totalPages}
        isLoading={isLoading}
        isPaginated={true}
        onClickPageButton={pageButtonHandler}
        onRowClick={rowClickHandler}
        onClickPreviousPage={() => {
          pageButtonHandler(response.currentPage - 1);
        }}
        onClickNextPage={() => {
          pageButtonHandler(response.currentPage + 1);
        }}
      />
    </>
  );
}
