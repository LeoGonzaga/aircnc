import React, { useState } from "react";
import API from "../../services/api";

export default function Login({ history }) {
  let [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await API.post("/sessions/", { email });
    console.log(response);

    const { _id } = response.data;
    localStorage.setItem("user", _id);
    history.push("/dashboard/");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          required
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
