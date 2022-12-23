import { useEffect, useState } from "react";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import Card from "components/Card";


function Inicio(){
  const [videos, setVideo] = useState([]);

  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/tamaracosta/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {setVideo(dados)})
  }, [])

  return (
    <>      
      <Banner imagem="home" />
      <Titulo> <h1>Um lugar para guardar seus vídeos e filmes</h1></Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />

        })}
      </section>    
    </>
    
  )
}

export default Inicio;