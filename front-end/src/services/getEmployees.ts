const url = import.meta.env.VITE_API_URL || 'http://0.0.0.0:3000';

export const getEmployees = () => fetch(`${url}/employees`)
  .then((response) => response.json())
  .then((data) => data);
