import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.css';
import Logo from "../../assets/Img/logoHam.png";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleRecoverPasswordClick = (e) => {
    e.preventDefault();
    navigate('/RecoverPassword');
  };
  return (
    <div className={styles['tela-login']}>
      <div className={styles['container-login-left']}>
        <form>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <h1>Amparo de Maria</h1>
          <div className={styles['input-box']}>
            <input type="text" placeholder="Usuário" />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles['input-box']}>
            <input type="password" placeholder="Senha" />
            <FaLock className={styles.icon} />
          </div>
          <p> Esqueceu a senha?&nbsp;<a href= '#' onClick={handleRecoverPasswordClick}>Clique Aqui </a></p>
          <button className={styles['btn-login']}>Entrar</button>
        </form>
      </div>
      <div className={styles['container-login-right']}>
        <div className={styles['container-login-right-enter']}>
          <h1>Olá! Seja bem-vindo(a)</h1>
          <p>Para se cadastrar basta clicar no botão abaixo.</p>
          <button onClick={() => navigate("/Register")} className={styles['btn-register']}>
            Cadastre-se aqui!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;