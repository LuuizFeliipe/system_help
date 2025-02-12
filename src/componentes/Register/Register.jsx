

function Register () {
  return (
    <div>
        <h1>Register</h1>
        <form>
        <div className="input-box">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className="input-box">
            <label htmlFor="cpf">CPF</label>
            <input type="number" id="cpf" name="cpf" required />
        </div>

        <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
        </div>
        
        <div className="input-box">
            <label htmlFor="Setor">Setor</label>
            <input type="text" id="Setor" name="Setor" required />
        </div>

        <div className="input-box">
            <label htmlFor="Matiricula">Matrícula</label>
            <input type="number" id="matricula" required/>
        </div>

        <button type="submit"> Enviar </button>
        </form>
    </div>
 
  )};

  export default Register;