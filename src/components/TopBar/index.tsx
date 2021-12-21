import './TopBar.css';
import { getUserDataAsync } from '../../mocks/getUserDataAsync';
import { useEffect, useState } from 'react';

const defaultLogin = 'unknown';

const TopBar = () => {
  const [login, setLogin] = useState(defaultLogin);

  useEffect(function updateLogin() {
    const userDataPromise = getUserDataAsync();
    userDataPromise.then((userData) => {
      const newLogin = userData.login;
      setLogin(newLogin);
    });
  }, []);

  return (
    <div className="container">
      <div className="logo">Skbot</div>
      <div className="login">{login}</div>
    </div>
  );
};

export { TopBar };
