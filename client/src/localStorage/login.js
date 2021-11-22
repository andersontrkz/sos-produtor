const localStorageLogin = () => {
  const login = JSON.parse(localStorage.getItem('SOS_PRODUTOR_LOGIN'));
  if (login) {
    return login;
  }
  return {};
};

export default localStorageLogin;
