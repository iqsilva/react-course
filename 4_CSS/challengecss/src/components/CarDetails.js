import React from 'react'
import styles from "./CarDetails.module.css";

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2 className={styles["my_title"]}>Detalhes do Carro</h2>
        <ul className={styles["my_list"]}>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails