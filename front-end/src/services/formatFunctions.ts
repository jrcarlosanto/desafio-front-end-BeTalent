export const formatDate = (date: string) => {
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(0, 4);
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phone: string) => {
  const country = phone.substring(0, 2);
  const ddd = phone.substring(2, 4);
  const fiveDigits = phone.substring(4, 9);
  const fourDigits = phone.substring(9);
  return `+${country} (${ddd}) ${fiveDigits}-${fourDigits}`;
};
