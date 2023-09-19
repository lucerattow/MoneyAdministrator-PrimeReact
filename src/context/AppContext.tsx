import React from 'react'
import { MenuItem } from 'primereact/menuitem'

//Defino el contexto
interface AppContextType {
  //states
  user: boolean
  notificationPanelShow: boolean
  breadcrumbs: MenuItem[]
  //setters
  setUser: React.Dispatch<React.SetStateAction<boolean>>
  setNotificationPanelShow: React.Dispatch<React.SetStateAction<boolean>>
  setBreadcrumbs: React.Dispatch<React.SetStateAction<MenuItem[]>>
}

export const AppContext = React.createContext<AppContextType | null>(null)

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [notificationPanelShow, setNotificationPanelShow] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<boolean>(true)
  const [breadcrumbs, setBreadcrumbs] = React.useState<MenuItem[]>([])

  const data: AppContextType = {
    //states
    user,
    notificationPanelShow,
    breadcrumbs,
    //setters
    setUser,
    setNotificationPanelShow,
    setBreadcrumbs,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
