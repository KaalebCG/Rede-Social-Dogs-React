import React from "react";
import { useParams } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { Head } from "../Helper/Head";

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Head title={user} description="Home do site dogs, com feed de fotos" />
      <Feed user={user} />
    </section>
  );
};
