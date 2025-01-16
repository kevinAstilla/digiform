import { useNavigate, useSubmit } from "react-router-dom";
import UseHttp from "../hooks/useHttp";

import { dateFormatter } from "../utils/dateFormatter";
import FormComponent from "./FormComponent";
import Button from "../UI/Button";

import style from "./FormDetail.module.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function FormDetail({ form }) {
  const navigate = useNavigate();
  const submit = useSubmit();
  const {
    data,
    isLoading,
    error,
    sendRequest: submitForm,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/form/submit`,
    config: {
      method: "POST",
    },
  });

  function handleBack() {
    navigate("..");
  }

  function handleEdit() {
    navigate("edit");
  }

  function handleDelete() {
    const proceed = window.confirm("Delete this form?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  async function onSubmitHandler({ formData }) {
    console.log(`formData: ${JSON.stringify(formData)}`);
    await submitForm(formData);
    if (error) {
      //show a ui for this warning
      console.log(error);
    } else {
      //show a ui for this success
      console.log(data);
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1 id={style.title}>{form.name}</h1>
          <p id={style.subtitle}>Created at: {dateFormatter(form.createdAt)}</p>
        </div>

        <div>
          <p className={style.cta}>
            <Button onClick={() => handleBack()} textOnly>
              Back
            </Button>
            <Button onClick={() => handleEdit()} rounded outlined>
              <IconEdit />
            </Button>
            <Button onClick={() => handleDelete()} rounded outlined>
              <IconTrash />
            </Button>
          </p>
        </div>
      </div>

      <FormComponent
        form={form.formSchema.form}
        ui={form.formSchema.ui}
        onSubmit={onSubmitHandler}
      />
    </>
  );
}
