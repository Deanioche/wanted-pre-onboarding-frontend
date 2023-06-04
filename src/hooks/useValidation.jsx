import { useState } from 'react';

const useValidation = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');

  const validateInput = (type, value) => {
    setMessageEmail('');
    setMessagePassword('');
    if (type === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = regex.test(value);
      setIsValidEmail(isValid);
      if (!isValidEmail)
        setMessageEmail('이메일 형식이 맞지 않습니다.');
    } else if (type === 'password') {
      const regex = /(?=.{8,})/;
      const isValid = regex.test(value);
      setIsValidPassword(isValid);
      if (!isValidPassword)
        setMessagePassword('패스워드는 8자 이상이어야 합니다.');
    }

  };
  return {
    isValidEmail,
    isValidPassword,
    messageEmail,
    messagePassword,
    validateInput,
  }
};

export default useValidation;
