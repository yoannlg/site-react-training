import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { userName } = useParams();
  return (
    <>
      <h1> Bonjour {userName} </h1>
      <br />
      <Link to={"/"}>
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
