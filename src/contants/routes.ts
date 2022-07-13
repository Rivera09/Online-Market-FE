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
  tamplate: {
    ROOT: 'template',
  },
} as const;

export default ROUTES;
