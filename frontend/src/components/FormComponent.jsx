import Form from "@rjsf/core";
import { useEffect } from "react";
import UseHttp from "../hooks/useHttp";
// import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import style from "./FormComponent.module.css";

export default function FormComponent({ templateId, onSubmit }) {
  const { data, isLoading, error, clearData } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/templates/${templateId}`,
    initialData: {
      formSchema: {
        form: {},
        ui: {},
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div id={style.formDiv}>
      <div style={{ padding: "1.5rem 1.5rem" }}>
        <Form
          schema={data.formSchema.form}
          onSubmit={onSubmit}
          validator={validator}
          uiSchema={data.formSchema.ui}
        />
      </div>
    </div>
  );
}
