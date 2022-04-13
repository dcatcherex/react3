import React from 'react';
import LoginCard from '../components/Login/LoginCard';
import styles from './Home.module.css'


export const Home = (props) => {
    
    return (
        <main className={styles['home_container']}>
          <LoginCard />
        </main>
      );
}