import React from 'react';
import { AppContext } from '@/context/AppContext';

export const useAppContext = () => {
  const context = React.useContext(AppContext)

  if (!context)
    throw new Error("useAppContext must be used within an AppContextProvider");

  return context;
};