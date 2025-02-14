import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dateFormatter } from "../utils/dateFormatter";
import UseHttp from "../hooks/useHttp";
import FormComponent from "../components/FormComponent";
import CollapsableSidebar from "../UI/CollapsableSidebar";
import { IconArrowBackUp } from "@tabler/icons-react";
import style from "./FormNewSubmissionPage.module.css";
import Button from "../UI/Button";

export default function FormNewSubmissionPage() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const {
    data: form,
    isLoading,
    error,
    sendRequest: getForm,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/forms/${formId}`,
    initialData: {},
  });

  async function onSubmit(event) {
    if (event.errors.length > 0) {
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/forms/${formId}/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formId: formId,
          data: { ...event.formData },
        }),
      }
    );
    if (!response.ok) {
      throw new Response(
        {
          message: response.error || "Failed to submit",
        },
        { status: 500 }
      );
    }
    setFormData(() => {
      return {};
    });
  }
  if (isLoading) {
    return <h1>is loading</h1>;
  }
  return (
    <>
      <CollapsableSidebar>
        <div className={style.sideMenu}>
          <h3 style={{ fontWeight: 700, margin: 0 }}>{form.name}</h3>
          <span>
            Created At:{" "}
            <span style={{ fontWeight: 600 }}>
              {dateFormatter(form.created_at)}
            </span>
          </span>
          <span>
            Updated At:{" "}
            <span style={{ fontWeight: 600 }}>
              {dateFormatter(form.updated_at)}
            </span>
          </span>
        </div>

        <div className={style.sideMenu}>
          <Button
            style={{
              justifyContent: "left",
            }}
            outlined
            onClick={() => {
              navigate("/forms");
            }}
          >
            <IconArrowBackUp />
            Exit
          </Button>
        </div>
      </CollapsableSidebar>
      <div className={style.form}>
        <FormComponent
          formData={formData}
          templateId={form.template_id}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}
