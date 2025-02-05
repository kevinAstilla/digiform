import { Form, redirect } from "react-router-dom";
import style from "./LoginPage.module.css";
import UseHttp from "../hooks/useHttp";

import Buton from "../UI/Button";
import Input from "../UI/Input";
import { getAuthToken, setAuthToken } from "../utils/auth";
import loginBackground from "../assets/login_image.jpg";

export async function action({ request }) {
  if (request.method === "POST") {
    console.log("Login successful");
  }
  const formData = await request.formData();

  // const requestConfig = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // const requestBody = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // };

  // const { data, error, sendRequest } = UseHttp({
  //   config: { url: "/auth/login", method: "POST" },
  // });

  // await sendRequest(requestBody);

  const authUrl = import.meta.env.VITE_AUTH_URL;

  const response = await fetch(`${authUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });

  if (response.status === 422) {
    return response.message;
  }
  if (!response.ok) {
    throw new Response(
      { message: response.message },
      { status: response.status }
    );
  }

  const { token } = await response.json();
  setAuthToken(token);

  return redirect("..");
}

export function loader() {
  console.log("loader");
  const token = getAuthToken();
  if (token) {
    return redirect("/");
  }
  return null;
}

export default function LoginPage() {
  return (
    <div
      style={{
        background: `url(${loginBackground})`,
        "background-size": "cover",
        "background-position": "center",
      }}
      className={style.background}
    >
      <div className={style.overlay}></div>
      <div className={style.loginForm}>
        <Form method="POST">
          <Input id="email" label="Email" type="email" />
          <Input id="password" label="Password" type="password" />
          <Buton type="submit">Login</Buton>
        </Form>
      </div>
    </div>
  );
}
