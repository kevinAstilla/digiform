import { useState } from "react";
import { useParams } from "react-router-dom";
import UseHttp from "../hooks/useHttp";
import FormComponent from "../components/FormComponent";
import style from "./FormNewSubmissionPage.module.css";
export default function FormNewSubmissionPage() {
  const { formId } = useParams();
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
    <div className={style.form}>
      <FormComponent
        formData={formData}
        templateId={form.template_id}
        onSubmit={onSubmit}
      />
    </div>
  );
}
