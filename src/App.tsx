import './App.css';
import styles from './index.module.css';
import larissa from './imagens/larissa.jpeg';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className={styles.main_content} >
      <div className={styles.left_side}> 
        <MainContent></MainContent>
      </div>
      <div className={styles.rigth_side}>
        <img src={larissa} className={styles.imagem_right} alt=""/>
      </div>
    </div>
  );
}

export default App;
