
function App() {
  const submit = (e) => {
    e.preventDefault(); // Previene el evento
    const data = Array.from(new FormData(e.target)); // new FormData(e.target) Convierte en objeto y Array.from lo convierte en arreglos
    console.log(Object.fromEntries(data)); // Object.fromEntries Toma un arreglo y toma el priemer valor de estos arreglos y lo utiliza como la llave y el segundo comos su valor 
  }
  return (
    <form onSubmit={submit}> 
      <div>
        <span>
          Hola mundo
        </span>
        <input name='campo'/>
      </div>
      <input name='campo2'/>
      <input type='submit' value='Enviar'/>
    </form>
  );
}

export default App;
