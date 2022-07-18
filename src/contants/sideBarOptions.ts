import { ROUTES, USER_ROLES, TSidebarOption } from './';

const SIDEBAR_OPTIONS: TSidebarOption[] = [
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
    id: 3,
    label: 'Crear y editar plantillas',
    route: ROUTES.ADMIN.TEMPLATE,
    icon: 'feed',
    roles: [USER_ROLES.ADMIN],
  },
  {
    id: 4,
    label: 'Carrito de Compras',
    route: ROUTES.CUSTOMER.SHOPPING,
    icon: 'shopping_cart',
    roles: [USER_ROLES.CUSTOMER],
  },
  {
    id: 5,
    label: 'Historial de compras',
    route: ROUTES.CUSTOMER.HISTORY,
    icon: 'history',
    roles: [USER_ROLES.CUSTOMER],
  },
];

export default SIDEBAR_OPTIONS;
