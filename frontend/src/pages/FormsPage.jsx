import { useLoaderData, useNavigate } from "react-router-dom";
import FormList from "../components/FormList.jsx";
import Button from "../UI/Button";

export async function loader() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/forms`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Response({ message: "Failed to load events" }, { status: 500 });
  }
  const data = await response.json();

  return { forms: data };
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
