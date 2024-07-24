const address = import.meta.env.VITE_API_ADDRESS || 'http://0.0.0.0';
const port = import.meta.env.VITE_API_PORT || '3000';
 
export const getEmployees = () => fetch(`${address}:${port}/employees`)
  .then((response) => response.json())
  .then((data) => data);