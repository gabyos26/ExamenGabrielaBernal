import React from "react"
import styles from "./Card.module.css"

function Card({autor, titulo, categoria}) {
  return (
    <div className={styles.texto}>
        <div>
            Felicidades! Escogiste {titulo} de {autor}
        </div>
       <di>
       perteneciente a la categoria {categoria}
       </di> 
    </div>
  )
}

export default Card