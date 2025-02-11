import FormForm from "../components/FormForm";

export default function FormEditPage() {
  // const { form } = useRouteLoaderData("formDetail");
  const form = {};
  return <FormForm method="PUT" form={form} />;
}
