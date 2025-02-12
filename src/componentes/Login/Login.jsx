import{FaUser, FaLock} from 'react-icons/fa';
import './Login.css';
import Logo from "../../assets/Img/logoHam.png";




function Login() {
    return (
        <div className="Main-Login">

            <div className="container-login-left">

                <form action="">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h1>Amparo de Maria</h1>
                    <div className='input-box'>
                        <input type="text" placeholder="Usuário"/>
                        <FaUser className="icon" />
                    </div>

                    <div className='input-box'>              
                        <input type="password" placeholder="Senha" />
                        <FaLock className = "icon" />
                    </div>

                    <p> Esqueceu a senha?&nbsp;<a href='#'>Clique Aqui </a></p>

                    <button type='submit' className='btn-login'>Entrar</button>

                </form>
            </div>
            <div className="container-login-right">
                <div className='container-login-right-enter'>

                <h1>Olá! Seja bem-vindo(a)</h1>

                <p>Para se cadastrar basta clicar no botão abaixo.</p>

                <button className='btn-register'>Cadastre-se aqui!</button>
                </div>
            </div>



        </div>


    )
}

export default Login;
