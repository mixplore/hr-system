export const formatDateString = (dateString: string) => {
  if (!dateString) return null;
  const [day, month, year] = dateString.split('/');
  if (!day || !month || !year) return dateString;
  const date = `${year}-${month}-${day}`;
  return date;
};
