import { ROUTES, USER_ROLES } from './';

const SIDEBAR_OPTIONS = [
  {
    id: 1,
    label: 'Usuarios',
    route: ROUTES.ADMIN.USERS,
    icon: 'group',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 2,
    label: 'Planes',
    route: ROUTES.ADMIN.PLANS,
    icon: 'list',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 4,
    label: 'Carrito de Compras',
    route: ROUTES.ADMIN.PLANS,
    icon: 'list',
    roles: [USER_ROLES.CUSTOMER],
  },
] as const;

export default SIDEBAR_OPTIONS;
