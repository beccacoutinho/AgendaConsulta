import React from 'react';
import { Link } from 'react-router-dom';
import Card2 from '../components/main/Card2';
import Card1 from '../components/shared/Card1';
import styles from '../styles/CardCenter.module.css'

const Home = () =>{
  return (
    <div className={styles.center}>
      <Card1 />
      <Card2 />
    </div>
  );
}

export default Home;