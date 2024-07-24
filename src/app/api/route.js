export const listaDeCartas = [
    {
      id: 1,
      image: "",
      nome: "Black Lotus",
      cor: "Artefato",
      descricao: "Adicione três manas de qualquer cor à sua reserva de mana. Depois, descarte Black Lotus.",
      valorEstimado: "USD 100,000",
      nivelRaridade: "Rara",
      artista: "Christopher Rush"
    },
    {
      id: 2,
      image: "",
      nome: "Ancestral Recall",
      cor: "Azul",
      descricao: "Compre três cartas ou force um jogador a comprar três cartas.",
      valorEstimado: "USD 50,000",
      nivelRaridade: "Rara",
      artista: "Mark Poole"
    },
    {
      id: 3,
      image: "",
      nome: "Mox Sapphire",
      cor: "Artefato",
      descricao: "Adicione uma mana azul à sua reserva de mana.",
      valorEstimado: "USD 40,000",
      nivelRaridade: "Rara",
      artista: "Dan Frazier"
    },
    {
      id: 4,
      image: "",
      nome: "Time Walk",
      cor: "Azul",
      descricao: "Tome um turno extra após este.",
      valorEstimado: "USD 45,000",
      nivelRaridade: "Rara",
      artista: "Amy Weber"
    },
    {
      id: 5,
      image: "",
      nome: "Mox Jet",
      cor: "Artefato",
      descricao: "Adicione uma mana preta à sua reserva de mana.",
      valorEstimado: "USD 35,000",
      nivelRaridade: "Rara",
      artista: "Dan Frazier"
    }
  ];
  
  export async function GET() {
    return NextResponse.json(listaDeCartas);
  }
  