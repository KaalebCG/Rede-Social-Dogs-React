import React from "react";
import { Feed } from "../../Components/Feed/Feed";
import { Head } from "../../Components/Helper/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com feed de fotos" />
      <Feed />
    </section>
  );
};
