"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { listaDeCartas } from "./api/route";
import Updating from "./Updating";
import ErrorFetch from "./ErrorFetch";
import styles from "./main.module.css";


export async function GET(req) {
  const id = parseInt(req.url.split('/api/')[1]);
  let objeto = null;
  listaDeCartas.forEach((obj) => {
    if (obj.id === id) {
      objeto = obj;
    }
  });
  return NextResponse.json(objeto);
}

export default function Main() {
  const [listCartas, setListCartas] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setListCartas(data);
        setListComplete(data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchCards();
  }, []);

  const search = (text) => {
    setTextSearch(text);
      if (text.trim() == ""){
       setListCartas(listComplete);
        return
      }
      const newList = listProduct.filter((produto) =>
        produto.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim())
        );
        setListCartas(newList);
    }
      if(isError == true){
        return <ErrorFetch/>
      
      }

  if (listComplete.length === 0) {
    return <Updating />; 
  }

  return (
    <main className={styles.main}>
      {listProduct.map((card) => (
        <div className={styles.card} key={card.id}>
          <Image
            src={card.imagem || "/default-image.png"}
            className={styles.imagem}
            alt={card.nome}
            width={150}
            height={200}
          />
          <h3>{card.nome}</h3>
          <p>Cor: {card.cor}</p>
          <p>Descrição: {card.descricao}</p>
          <p>Valor estimado: {card.valorEstimado}</p>
          <p>Nível de raridade: {card.nivelRaridade}</p>
          <p>Artista: {card.artista}</p>
        </div>
      ))}
    </main>
  );
}
