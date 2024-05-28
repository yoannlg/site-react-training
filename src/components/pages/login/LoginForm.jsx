import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

//state
const [inputValue, setInputValue] = useState("");
const navigate = useNavigate()

//comportement
const handleSubmit = (e)=>{
    e.preventDefault();
    setInputValue('')
    navigate(`order/${inputValue}` )
}

const handleChange = (e) =>{
    setInputValue(e.target.value);
}


//render
    return (
        <form action="submit" onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>

                <input 
                onChange={handleChange} 
                value={inputValue}
                type="text" 
                required
                id="userName" 
                placeholder="Entrez votre prénom..."
                />
                <button>Accédez à votre espace</button>
        </form>
    )
}
