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
    PLANS: 'plans',
  },
  CUSTOMER: {
    ROOT: 'customer',
    SHOPPING:'shopping-cart'
  }
} as const;

export default ROUTES;
