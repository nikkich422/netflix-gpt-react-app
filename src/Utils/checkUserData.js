export const checkUserData = (email, password) => {
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!emailCheck) {
    return "Emai Id is not valid";
  }
  if (!passCheck) {
    return "Password is not valid";
  }

  return null;
};
