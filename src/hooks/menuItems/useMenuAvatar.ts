import { useNavigate } from 'react-router-dom';
import { routeAccount } from "@/routes"

export function useMenuAvatar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("cerrar sesión");
    // TODO: implementar la lógica de cierre de sesión
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