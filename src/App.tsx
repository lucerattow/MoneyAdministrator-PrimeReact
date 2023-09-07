import { PrimeReactProvider } from 'primereact/api';
import { AppContextProvider } from '@/context';
import { Layout } from "@/Layout"

const App = () => {
  return (
    <PrimeReactProvider>
      <AppContextProvider>
        <Layout>
          <div>Children</div>
        </Layout>
      </AppContextProvider>
    </PrimeReactProvider>
  )
}

export default App;
