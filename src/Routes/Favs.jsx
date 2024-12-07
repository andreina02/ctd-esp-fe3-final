import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import {useDentistState } from '../Context/Context';  
import styles from '../styles/Favs.module.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state:{favs}} = useDentistState();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={styles.favsContainer}>
        {favs.length === 0 ? (
        <p>No tienes dentistas destacados.</p>
        ) : (
        <div className={styles.cardGrid}>
          {favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
      </div>
    </>
  );
};

export default Favs;
