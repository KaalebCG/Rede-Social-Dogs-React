import React from "react";
import { NavLink,  useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

export const UserHeaderNav = () => {
  const { mobile, setMobile } = React.useContext(UserContext);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate();
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && "Adicionar Foto"}
      </NavLink>

      <button onClick={handleLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};