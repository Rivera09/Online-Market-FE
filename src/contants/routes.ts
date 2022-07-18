const ROUTES = {
  HOME: {
    ROOT: '',
  },
  LOGIN: {
    ROOT: 'login',
  },
  RECOVER_PASSWORD: {
    ROOT: 'recover_password/:mode',
  },
  PLANSELECTION: {
    ROOT: 'plan-selection',
  },
  REGISTER: {
    ROOT: 'register',
  },
  ADMIN: {
    ROOT: 'admin',
    USERS: 'users',
    CREATE_USER: 'create-user',
    PLANS: 'plans',
    TEMPLATE: 'template',
  },
  CUSTOMER: {
    ROOT: 'customer',
    SHOPPING: 'shopping-cart',
    HISTORY: 'shopping-history',
  },
} as const;

export default ROUTES;
