import styles from '../index.module.css';
import React from 'react';
import ListEnable from './ListEnable';
import ListDisable from './ListDisable';

class MainContent extends React.Component {
    render() {
        return <div className={styles.titulo_bemvindo}>
            <p>
                Bem Vindo<br /> Esta é minha lista de presentes<br />
            </p>

            <ListEnable></ListEnable>
            <ListDisable></ListDisable>
        </div>;
    }   
}

export default MainContent