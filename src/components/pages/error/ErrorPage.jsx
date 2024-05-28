/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>

            <h1>Error Page</h1>
            <Link to={"/"}><button>Retourner à la page d'accueuil</button></Link>
        </div>
    )
}
