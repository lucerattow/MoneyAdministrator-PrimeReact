import "./styles/index.scss"                      //estilos tematicos
import "primereact/resources/primereact.min.css"; //estilos core
import 'primeicons/primeicons.css';               //estilos de iconos
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
.render(<App />)