import Contador from "./components/simples/Contador";
import ToDoApp from "./components/complexos/ToDoApp";
import styles from "./page.module.css";
import BuscaComLoader from "./components/carregamento/BuscaComLoader";
import ExemploUsoModal from "./components/modal/ExemploUsoModal";
import ExemploUsoAlerta from "./components/alerta/ExemploUsoAlerta";
import ExemploUsoListaComRemocao from "./components/lista/ExemploUsoListaComRemocao";
import ExemploUsoInputEmail from "./components/input/ExemploUsoInputEmail";
import ExemploUsoCard from "./components/card/ExemploUsoCard";
import ExemploUsoSelect from "./components/select/ExemploUsoSelect";
import ExemploUsoTabs from "./components/tabs/ExemploUsoTabs";
import ExemploUsoPaginacao from "./components/paginacao/ExemploUsoPaginacao";
import ExemploUsoBadge from "./components/badge/ExemploUsoBadge";
import ExemploUsoStepper from "./components/stepper/ExemploUsoStepper";
import ExemploUsoTooltip from "./components/tooltip/ExemploUsoTooltip";

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
        <div style={{ backgroundColor: '#c4c0bf', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Input Email</h3>
          <br />
          <ExemploUsoInputEmail />
        </div>
        <div style={{ backgroundColor: '#f08c00', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Card</h3>
          <br />
          <ExemploUsoCard />
        </div>
        <div style={{ backgroundColor: '#0ca678', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Select</h3>
          <br />
          <ExemploUsoSelect />
        </div>
        <div style={{ backgroundColor: '#7950f2', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Tabs</h3>
          <br />
          <ExemploUsoTabs />
        </div>
        <div style={{ backgroundColor: '#e64980', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Paginação</h3>
          <br />
          <ExemploUsoPaginacao />
        </div>
        <div style={{ backgroundColor: '#fd7e14', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Badge</h3>
          <br />
          <ExemploUsoBadge />
        </div>
        <div style={{ backgroundColor: '#20c997', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Stepper</h3>
          <br />
          <ExemploUsoStepper />
        </div>
        <div style={{ backgroundColor: '#339af0', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <h3>Componente - Tooltip</h3>
          <br />
          <ExemploUsoTooltip />
        </div>
      </main >
    </div >
  );
}
