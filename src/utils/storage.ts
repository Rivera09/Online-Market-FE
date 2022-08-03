export const setData = (
  name: string,
  data: Record<string, unknown> | string
) => {
  const convertedData = typeof data === 'string' ? data : JSON.stringify(data);
  localStorage.setItem(name, convertedData);
};
