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


// const left_side = {
//   "background-color": "azure",
//   display: "inline",
//   width: 600,
//   // float: "left",
// }

// const rigth_side={
//   display:'inline'
// }

export default App;
