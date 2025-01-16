import { useLoaderData, useNavigate } from "react-router-dom";
import FormList from "../components/FormList.jsx";
import forms from "../data/form.js";

import Button from "../UI/Button";

export function loader() {
  return { forms: forms };
}

export default function FormsPage() {
  //to-do: add the toolbars on the side for this page
  //to-do: if in table then add the toolbar as another row else a column

  const navigate = useNavigate();

  function handleNewForm() {
    navigate("new");
  }

  const { forms } = useLoaderData();
  return (
    <>
      <Button onClick={() => handleNewForm()}>New</Button>
      <FormList forms={forms} />
    </>
  );
}
