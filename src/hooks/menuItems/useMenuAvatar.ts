import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/hooks';
import { routeAccount } from "@/routes"

export function useMenuAvatar() {
  const navigate = useNavigate();
  const { setUser } = useAppContext()

  const handleSignOut = () => {
    setUser(false)
  };

  const items = [
    {
      label: 'Mi Cuenta',
      icon: 'pi pi-fw pi-home',
      command: () => navigate(routeAccount),
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-fw pi-power-off',
      command: handleSignOut,
    },
  ];

  return items;
}