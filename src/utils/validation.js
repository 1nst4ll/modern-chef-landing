export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};