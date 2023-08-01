import React from "react";
import { UserHeader } from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";
import { UserContext } from "../../UserContext/UserContext";
import { NotFound } from "../Helper/NotFound";
import { Head } from "../Helper/Head";

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" description="Configuraçoes de conta" />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
