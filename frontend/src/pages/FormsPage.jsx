import { useNavigate } from "react-router-dom";
import UseHttp from "../hooks/useHttp";
import FormList from "../components/FormList";
import Button from "../UI/Button";

export default function FormsPage() {
  const {
    data: forms,
    isLoading,
    error,
    sendRequest: getForms,
  } = UseHttp({
    url: `${import.meta.env.VITE_API_URL}/forms`,
    initialData: [],
  });
  //to-do: add the toolbars on the side for this page
  //to-do: if in table then add the toolbar as another row else a column

  const navigate = useNavigate();

  function handleNewForm() {
    navigate("new");
  }

  return (
    <>
      <Button onClick={() => handleNewForm()}>New</Button>
      <FormList forms={forms} onRefresh={getForms} />
    </>
  );
}
