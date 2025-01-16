import Form from "@rjsf/core";
// import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import style from "./FormComponent.module.css";
export default function FormComponent({ form, ui, onSubmit }) {
  const shema = form;
  const uiSchema = ui;
  return (
    <div id={style.formDiv}>
      <div style={{ padding: "1.5rem 1.5rem" }}>
        <Form
          schema={shema}
          onSubmit={onSubmit}
          validator={validator}
          uiSchema={uiSchema}
        />
      </div>
    </div>
  );
}
