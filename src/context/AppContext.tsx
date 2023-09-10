import React from 'react'
import { MenuItem } from 'primereact/menuitem'

//Defino el contexto
interface AppContextType {
  user: boolean
  //states
  notificationPanelShow: boolean
  breadcrumbs: MenuItem[]
  //setters
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
  const [breadcrumbs, setBreadcrumbs] = React.useState<MenuItem[]>([])
  const user = true;

  const data: AppContextType = {
    user,
    //states
    notificationPanelShow,
    breadcrumbs,
    //setters
    setNotificationPanelShow,
    setBreadcrumbs,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
