import { useLocation, useNavigate } from "react-router-dom"
import login from "../../assets/Labeddit-login.png"
import imgLabenu from "../../assets/Labeddit-menor.png"
import closeX from "../../assets/close.png"

function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    const renderHeader = () => {
        switch (location.pathname) {
            case "/users/login":
                return (
            <div>
                <img src={login}/>
                <p>O projeto de rede social da Labenu</p>
            </div>
        )
                break;
            case "/users/signup":
                return(
                    <div>
                        <img src={imgLabenu}/>
                        <button onClick={() => goToPost(navigate)}>Entrar</button>
                    </div>
                )
                break;
            case "/posts":
                return(
                    <div>
                        <img src={imgLabenu}/>
                        <button onClick={() => goToLogin(navigate)}>Logout</button>
                    </div>
                )
                break;  
            case "posts/postId/comments":
                return(
                    <div>
                        <img src={closeX}/>
                        <img src={imgLabenu}/>
                        <button onClick={() => goToLogin(navigate)}>Logout</button>
                    </div>
                )
                break;     
            default:
                alert("Esta Página Não existe!")
                goToPost(navigate)
                break;
        }
        
}
}

