import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../UserContext/UserContext";
import styles from "./Login.module.css";
import { NotFound } from "../../Components/Helper/NotFound";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};
