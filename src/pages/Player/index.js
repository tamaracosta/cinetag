import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import videos from "json/db.json";

function Player() {
  const parametro = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametro.id);
  })
  console.log(video);
  return (
    <>
      <Banner imagem="player" />
      <Titulo><h1>Player</h1></Titulo>
      <section>
        <iframe 
          width="100%" 
          height="100%" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>        
        </iframe>
      </section>
    </>

  )

}

export default Player;