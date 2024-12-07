import React from "react";
import { Link } from 'react-router-dom';
import { useDentistState } from "../Context/Context";
import CardStyles from "../styles/Card.module.css";


const Card = ({ dentist}) => {
  const {dispatch, state}=useDentistState()
  const findFav = state.favs.some((fav) => fav.id === dentist.id)
  console.log(findFav)

  const toggleFav = ()=>{
    dispatch({type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist});
  };
  const cardClass = `${CardStyles.cardContainer} ${state.theme === 'dark' ? CardStyles.dark : ''}`;

  return (
    <div className={cardClass}>
      <img src="./images/doctor.jpg" alt='Doctor' className={CardStyles.cardImg} />
      <Link to={`/dentist/${dentist.id}`}>
      <h3>Name: {dentist.name}</h3>
      <p>Username: {dentist.username}</p>
      <p>ID: {dentist.id}</p>
      </Link>
      <button onClick={toggleFav} className={CardStyles.favButton}>{findFav ? "Delete Fav":"Add Fav ⭐"}</button>
    </div>
  );
};

export default Card;
