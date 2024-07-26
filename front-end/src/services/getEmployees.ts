const address = import.meta.env.VITE_API_ADDRESS || 'http://0.0.0.0';
const port = import.meta.env.VITE_API_PORT || '3000';
const url =  import.meta.env.VITE_API_MODE === "production" ? `${address}` : `${address}:${port}`;

export const getEmployees = () => fetch(`${url}/employees`)
  .then((response) => response.json())
  .then((data) => data);
