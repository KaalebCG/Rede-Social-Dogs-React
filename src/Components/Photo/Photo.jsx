import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GETT } from "../../services/api";
import { Error } from "../Helper/Error";
import { Loading } from "../Helper/Loading";
import { PhotoContent } from "../Photo/PhotoContent";
import { Head } from "../Helper/Head";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTOS_GETT(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
          <Head title={data.photo.title} description="Aba para postar suas fotos" />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
