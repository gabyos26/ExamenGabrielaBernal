import { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css"

function Form() {
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState (false);
  const [mostrar, setMostrar] = useState(false);

   const autorValido = autor.trim();
   const tituloValido = titulo.length >= 6;

   function subidaDeDatos (x) {
    x.preventDefault();

    if (autorValido.length >= 3 && tituloValido) {
        setError (false)
        setMostrar (true)
    } else {
        setError (true)
    }
   };

  const onChangeAutor = (x) => {
    setAutor(x.target.value)
  };

  const onChangeTitulo = (x) => {
    setTitulo(x.target.value)
  };

  const onChangeCategoria = (x) => {
    setCategoria(x.target.value)
  };


  return (
    <div className={styles.container}> 
    <h1>La Libreria</h1>
    <form onSubmit={subidaDeDatos}>
        <div>
            <input
             className={styles.input}
                type="text"
                placeholder="Escriba autor"
                value={autor}
                onChange={onChangeAutor}
            />
            </div>
            <div>
             <input
                className={styles.input}
                type="text"
                placeholder="Escriba Título"
                value={titulo}
                onChange={onChangeTitulo}
            />
            </div>
            <div>
            <select className={styles.input} placeholder="Seleccione categoría" value={categoria} onChange={onChangeCategoria}>
                <option value="">Seleccione categoría</option>
                <option value="Terror" >Terror</option>
                <option value="Aventura" >Aventura</option>
                <option value="Comedia" >Comedia</option>
            </select>

            {error && <h5 className={styles.text}>Por favor chequea que la información sea correcta.</h5>}
            
            <div><button className={styles.button} type="submit">Enviar</button></div> 
        </div>
    </form>
    {mostrar && <Card autor={autor} titulo={titulo} categoria={categoria}/>}
    </div>
  )
}

export default Form