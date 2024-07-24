import { useParams } from "next/navigation";

export default function Card (){
  return(
    <p>id: {params.id} </p>
  );
}