import "primereact/resources/primereact.min.css"; //estilos core
import 'primeicons/primeicons.css';               //estilos de iconos
import "./styles/themes/theme.scss"                      //estilos tematicos
import ReactDOM from 'react-dom/client'
import App from './App'

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
.render(<App />)