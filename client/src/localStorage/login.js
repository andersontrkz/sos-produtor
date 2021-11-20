const sessionStorageLogin = () => {
  const login = JSON.parse(sessionStorage.getItem('SOS_PRODUTOR_LOGIN'));
  if (login) {
    return login;
  }
  return {};
};

export default sessionStorageLogin;
