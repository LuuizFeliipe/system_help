
import "./RecoverPassword.css";

const RecoverPassword = () => {
  return (
    <main>
      <div className='container-password'>
      <h1>Esqueceu a senha?</h1>
      <h2>Informe  seu e-mail e enviaremos um link para a recuperação de senha</h2>

      <form>
      <div className="input-email">        
        <label htmlFor="Email"> E-mail</label>
        <input type="email" id='email' name='email' required/>
        </div>
      </form> 

      <div className='btn-recuperar'>
        <button>Recuperar</button>
      </div>
      <div className='btn-entrar'>
        <button>Entrar</button>
      </div>
    </div>
    </main>
  
  );
};

export default RecoverPassword;