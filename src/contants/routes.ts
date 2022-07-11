const ROUTES = {
  HOME: {
    ROOT: '',
  },
  LOGIN: {
    ROOT: 'login',
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
} as const;

export default ROUTES;
