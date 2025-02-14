import './Register.css';



function Register () {
  return (
    <main>
        <div className="register">
            <h1>Pré-Cadastro</h1>
            <form className='form-register'> 
                
                <div className='boxes'>
                    <div className="input-box">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="cpf">CPF</label>
                        <input type="number" id="cpf" name="cpf" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email"> E-mail</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    
                    <div className="input-box">
                        <label htmlFor="Setor">Setor</label>
                        <input type="text" id="Setor" name="setor" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="Matiricula">Matrícula</label>
                        <input type="number" id="matricula" name ="matricula" required/>
                    </div>
                    </div>
            </form>
            <button className='btn-enviar' type="submit"> Enviar </button>
        </div>
    
    </main>
    
  )};

  export default Register;