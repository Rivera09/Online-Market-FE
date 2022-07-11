const ROUTES = {
  HOME: {
    ROOT: '',
  },
  LOGIN: {
    ROOT: 'login',
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
