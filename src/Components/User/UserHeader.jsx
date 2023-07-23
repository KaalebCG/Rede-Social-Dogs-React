import React from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    if ("/conta/estatisticas" === location.pathname) setTitle("Estatisticas");
    if ("/conta" === location.pathname) setTitle("Minha Conta");
    if ("/conta/postar" === location.pathname) setTitle("Poste Sua Foto");
  }, [location]);

  return (
    <div className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </div>
  );
};
