import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

    //state
    //const params = useParams() //Sans le destructuring
    const {inputValue} = useParams(); //Avec le DESTRUCTURING

    //comportement

    //render
    return (
        <>
            <h1> Bonjour {inputValue} </h1>
            <br />
            <Link to={"/"}><button>Déconnexion</button></Link>
        </>
    )
}