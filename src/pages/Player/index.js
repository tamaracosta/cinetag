import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Player.module.css";
import NaoEncontrada from "pages/NaoEncontrada";
import Banner from "components/Banner";
import Titulo from "components/Titulo";

function Player() {
  const parametro = useParams();  
  const [video, setVideo] = useState();

  useEffect(()=> {
    fetch(`https://my-json-server.typicode.com/tamaracosta/cinetag-api/videos?id=${parametro.id}`)
      .then(resposta => resposta.json())
      .then( dados => { setVideo(...dados)})
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }  
  
  return (
    <>
      <Banner imagem="player" />
      <Titulo><h1>Player</h1></Titulo>
      <section className={styles.container} >
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