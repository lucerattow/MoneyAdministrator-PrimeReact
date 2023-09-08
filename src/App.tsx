import { PrimeReactProvider } from 'primereact/api';
import { AppContextProvider } from '@/context';
import { Layout } from "@/Layout"
import { AppRoutes } from '@/routes';

const App = () => {
  return (
    <PrimeReactProvider>
      <AppContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppContextProvider>
    </PrimeReactProvider>
  )
}

export default App;
