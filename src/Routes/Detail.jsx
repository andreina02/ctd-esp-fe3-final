import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import styles from '../styles/Detail.module.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  console.log(useParams());
  const params=useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(()=> {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
     <div className={styles.detailsContainer}>
      <h1 className={styles.title}>Detail Dentist {dentist.id}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>{dentist.name}</td>
            <td className={styles.td}>{dentist.email}</td>
            <td className={styles.td}>{dentist.phone}</td>
            <td className={styles.td}>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Detail