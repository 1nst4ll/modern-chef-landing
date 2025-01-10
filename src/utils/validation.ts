export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10;
};

export const validateForm = (data: {
  name: string;
  email: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!validateName(data.name)) errors.push('Name is too short');
  if (!validateEmail(data.email)) errors.push('Invalid email address');
  if (!validateMessage(data.message)) errors.push('Message is too short');

  return {
    isValid: errors.length === 0,
    errors,
  };
};