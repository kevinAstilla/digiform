import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export function getAuthToken() {
    return localStorage.getItem("authToken");
}

export function setAuthToken(token) {
    localStorage.setItem("authToken", token);
}

export function removeAuthToken() {
    localStorage.removeItem("authToken");
}

export function isAuthenticatedLoader() {
    const token = getAuthToken();
    console.log("isAuthenticatedLoader", token);
    if (!token) {
        return redirect("/login");
    }

    const { exp } = jwtDecode(token);
    if (exp * 1000 < Date.now()) {
        localStorage.clear();
        return redirect("/login");
    }

    return jwtDecode(token);
}