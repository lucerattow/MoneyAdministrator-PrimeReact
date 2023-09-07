import { PrimeReactProvider } from 'primereact/api';
import { Layout } from "@/Layout"

const App = () => {
  return (
    <PrimeReactProvider>
      <Layout>
        <div>Children</div>
      </Layout>
    </PrimeReactProvider>
  )
}

export default App;
