import "./styles/themes/theme.scss"               //estilos tematicos
import "primereact/resources/primereact.min.css"; //estilos core
import 'primeicons/primeicons.css';               //estilos de iconos
import PrimeReact from 'primereact/api';
import { PrimeReactProvider } from 'primereact/api';
import ReactDOM from 'react-dom/client'
import App from './App'

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

PrimeReact.ripple = true

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
)