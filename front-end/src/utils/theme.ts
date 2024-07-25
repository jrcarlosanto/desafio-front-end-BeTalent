export const getTheme = () => {
  const store = localStorage.getItem('theme');
  if (!store) {
    localStorage.setItem('theme', 'light');
    return 'light';
  }
  return store;
};

export const setTheme = (value: string) => {
  localStorage.setItem('theme', value);
};
