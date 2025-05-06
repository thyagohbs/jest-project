import Contador from "./components/simples/Contador";
import ToDoApp from "./components/complexos/ToDoApp";
import styles from "./page.module.css";
import BuscaComLoader from "./components/carregamento/BuscaComLoader";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ backgroundColor: '#05a4ee', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Contador</h3>
          <br />
          <Contador />
        </div>
        <div style={{ backgroundColor: '#58a708', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - ToDoApp</h3>
          <br />
          <ToDoApp />
        </div>
        <div style={{ backgroundColor: '#934ac4', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - BuscaComLoader</h3>
          <br />
          <BuscaComLoader />
        </div>
      </main >
    </div >
  );
}
