
export default async function Card ({params}){

  const response = await fetch("http://localhost:3000/card/" + params.id); 
  const data = await response.json();
  
      return (
          <p>{data.id}</p>
      );
  }