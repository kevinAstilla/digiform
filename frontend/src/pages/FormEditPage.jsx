import { useRouteLoaderData } from "react-router-dom";

import FormForm from "../components/FormForm";

export default function FormEditPage() {
  const { form } = useRouteLoaderData("formDetail");

  return <FormForm method="PUT" form={form} />;
}
