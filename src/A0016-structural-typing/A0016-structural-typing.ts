type User = { userName: string; password: string | number };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};
const bdUser = { userName: 'BRN21', password: '123456' };
const sentUser = { userName: 'BRN21', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
