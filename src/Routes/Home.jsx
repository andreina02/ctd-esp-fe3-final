
import Card from '../Components/Card'
import { Link } from "react-router-dom";
import { useDentistState } from '../Context/Context';
import styles from '../styles/Home.module.css';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state: {dentist}} = useDentistState();

  return (
    <main className={styles.mainContainer}>
      <h1>Home</h1>
      <div>
        <div className={styles.cardGrid}>
        {dentist.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home