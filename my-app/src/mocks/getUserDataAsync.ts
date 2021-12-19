export type UserData = {
  login: string;
};

/**
 * Функция для получения данных пользователя
 * @returns {Promise<UserData>} Promise, результатом которого будет UserData со следующими полями: login
 */
export const getUserDataAsync = () => {
  return new Promise<UserData>((res) => {
    setTimeout(() => {
      alert('запрос данных выполнен!');
      res({ login: 'testUser@test.dev' });
    }, 3000);
  });
};
