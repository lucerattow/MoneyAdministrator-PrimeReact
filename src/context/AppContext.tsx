import React from 'react'

//Defino el contexto
interface AppContextType {
  //states
  notificationPanelShow: boolean
  //setters
  setNotificationPanelShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = React.createContext<AppContextType | null>(null)

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [notificationPanelShow, setNotificationPanelShow] = React.useState<boolean>(false)

  const data: AppContextType = {
    //states
    notificationPanelShow,
    //setters
    setNotificationPanelShow,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
