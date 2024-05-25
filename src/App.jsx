import { useState } from "react"
import LoginPage from "./components/pages/LoginPage";

function App(){
    //state
    const [name, setName] = useState("") 


    //comportement
    const handleSubmit = (e)=>{
        e.preventDefault();
        setName('')


    }

    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleClick = ()=>{
        alert(`Bonjour ${name}`)
    }

    //render
    return (
        <>
        <LoginPage/>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <p>Connectez-vous</p>
                <form action="submit" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={name} type="text" required name="" id="userName" placeholder="Entrez votre prénom..."/>
                    <button onClick={handleClick}>Accédeez à votre espace</button>
                </form>
                
            </div>
        </>
    )

}
export default App
