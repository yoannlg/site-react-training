import { useState } from "react";

export default function LoginForm() {

//state
const [inputValue, setInputValue] = useState("");

//comportement
const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Bonjour ${inputValue}`)
    setInputValue('')
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
