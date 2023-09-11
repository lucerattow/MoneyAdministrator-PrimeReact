import { AppContextProvider } from '@/context';
import { AppRoutes } from '@/routes';

const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  )
}

export default App;
