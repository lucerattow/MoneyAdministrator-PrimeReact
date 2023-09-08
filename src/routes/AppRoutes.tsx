import { BrowserRouter, Routes, Route } from 'react-router-dom'
// recursos locales
import { useAppContext } from '@/hooks'
import {
  routeHome,
  routeRegister,
  routeTransactions,
  routeCreditCards,
  routeCreditCardDetails,
} from "@/routes"
// componentes

export const AppRoutes = () => {
  const user = true

  return (
    <BrowserRouter>
      <Routes>
        {user
          ? (
            <>
              <Route path={routeHome} element={<h1>dashboard</h1>} />
              <Route path={routeCreditCards} element={<h1>credit cards</h1>} />
              <Route path={routeCreditCardDetails(":id")} element={<h1>credit card details</h1>} />
              <Route path={routeTransactions} element={<h1>transactions</h1>} />
            </>
          ) : (
            <>
              <Route path={routeHome} element={<h1>login</h1>} />
              <Route path={routeRegister} element={<h1>registrarse</h1>} />
            </>
          )
        }

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes