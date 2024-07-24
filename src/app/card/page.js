
import { useEffect, useState } from 'react';
import Updating from '../Updating'; 
import ErrorFetch from '../ErrorFetch'; 

export default function CardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchCard = async () => {
        try {
          const response = await fetch(`/api/${id}`);
          const data = await response.json();
          setCard(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Erro ao buscar a carta:", error);
          setIsError(true);
          setIsLoading(false);
        }
      };
      fetchCard();
    }
  }, [id]);

  if (Updating) {
    return <Updating />;
  }

  if (isError) {
    return <ErrorFetch />;
  }

  if (!card) {
    return <p>Carta não encontrada.</p>;
  }

  return (
    <main>
      <h1>{card.nome}</h1>
      <p>Cor: {card.cor}</p>
      <p>Descrição: {card.descricao}</p>
      <p>Valor estimado: {card.valorEstimado}</p>
      <p>Nível de raridade: {card.nivelRaridade}</p>
      <p>Artista: {card.artista}</p>
    </main>
  );
}
