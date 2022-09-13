import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CardCenter.module.css'
import Card3 from '../components/singup/Card3';
import Card1 from '../components/shared/Card1';


const Cadastro = () =>{
  return (
    <div className={styles.center}>
      <Card1 />
      <Card3 />
    </div>
  );
}

export default Cadastro;