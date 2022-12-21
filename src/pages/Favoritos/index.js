import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";

function Favoritos(){
  return (
    <>
    <Banner imagem="favoritos" />
    <Titulo> <h1>Favoritos</h1></Titulo>    
    </>
  )
}

export default Favoritos;