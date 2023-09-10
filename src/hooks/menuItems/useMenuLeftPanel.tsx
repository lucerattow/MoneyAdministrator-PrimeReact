import React from "react"
import { useNavigate } from 'react-router-dom';
import { routeHome, routeTransactions, routeCreditCards } from "@/routes"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const useMenuLeftPanel = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Dashboard',
      icon: () => <DashboardIcon className="p-menuitem-icon" />,
      command: () => navigate(routeHome)
    },
    {
      label: 'Transacciones',
      icon: () => <CurrencyExchangeIcon className="p-menuitem-icon" />,
      command: () => navigate(routeTransactions)
    },
    // {
    //   separator: true
    // },
    {
      label: 'Tarjetas de credito',
      icon: () => <CreditCardIcon className="p-menuitem-icon" />,
      command: () => navigate(routeCreditCards)
    }
  ];

  return items;
}