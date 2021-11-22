export const localStorageCart = () => {
  const localStorageCartItems = JSON.parse(localStorage.getItem('SOS_PRODUTOR_CART'));
  if (localStorageCartItems) {
    return localStorageCartItems;
  }
  return [];
};

export const localStorageCartQuantity = () => {
  const localStorageCartItems = JSON.parse(localStorage.getItem('SOS_PRODUTOR_CART'));
  if (localStorageCartItems) {
    return localStorageCartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
  return 0;
};

export const localStorageCartPrice = () => {
  const localStorageCartItems = JSON.parse(localStorage.getItem('SOS_PRODUTOR_CART'));
  if (localStorageCartItems) {
    return localStorageCartItems
      .reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  }
  return Number(0);
};
