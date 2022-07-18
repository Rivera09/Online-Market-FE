export const getSubDir = (url: string, baseRoute: string) =>
  url.match(new RegExp(`^\/${baseRoute}\/(\\w+)`))?.[1] || '';
