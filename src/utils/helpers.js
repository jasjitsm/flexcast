export const isLocalStorageDataExpired = (key) => {
  const item = JSON.parse(localStorage.getItem(key));
  if (item === null || new Date(item.expires).getTime() < new Date().getTime()) {
    return true;
  }
  return false;
}

export const getDateDaysFromNow = (days) => {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime()+(days*24*60*60*1000));
  return expiryDate;
}