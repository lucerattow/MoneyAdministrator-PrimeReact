import PrimeReact from 'primereact/api';
import { PrimeReactProvider } from 'primereact/api';
import { AppContextProvider } from '@/context';
import { AppRoutes } from '@/routes';

const App = () => {
  PrimeReact.ripple = true

  return (
    <PrimeReactProvider>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </PrimeReactProvider>
  )
}

export default App;
