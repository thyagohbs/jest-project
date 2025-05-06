import Contador from "./components/simples/Contador";
import ToDoApp from "./components/complexos/ToDoApp";
import styles from "./page.module.css";
import BuscaComLoader from "./components/carregamento/BuscaComLoader";
import ExemploUsoModal from "./components/modal/ExemploUsoModal";
import ExemploUsoAlerta from "./components/alerta/ExemploUsoAlerta";
import ExemploUsoListaComRemocao from "./components/lista/ExemploUsoListaComRemocao";

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
        <div style={{ backgroundColor: '#686569', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Modal de confirmação</h3>
          <br />
          <ExemploUsoModal />
        </div>
        <div style={{ backgroundColor: '#98b10a', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Alerta</h3>
          <br />
          <ExemploUsoAlerta />
        </div>
        <div style={{ backgroundColor: '#e05a0c', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Lista com Remoção</h3>
          <br />
          <ExemploUsoListaComRemocao />
        </div>
      </main >
    </div >
  );
}
