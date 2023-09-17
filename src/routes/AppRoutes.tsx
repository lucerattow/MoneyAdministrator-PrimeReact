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
import { Layout } from "@/components"
import {
  Dashboard,
  Transactions,
  CreditCards,
  CreditCardsDetails,
  Login,
  Register
} from "@/pages"
// componentes

export const AppRoutes = () => {
  const { user } = useAppContext()

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {user
            ? (
              <>
                <Route path={routeHome} element={<Dashboard />} />
                <Route path={routeCreditCards} element={<CreditCards />} />
                <Route path={routeCreditCardDetails(":id")} element={<CreditCardsDetails />} />
                <Route path={routeTransactions} element={<Transactions />} />
              </>
            ) : (
              <>
                <Route path={routeHome} element={<Login />} />
                <Route path={routeRegister} element={<Register />} />
              </>
            )
          }

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes