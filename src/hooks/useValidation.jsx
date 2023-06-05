import { useState } from 'react';

const useValidation = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');

  const validateInput = (type, value) => {
    setMessageEmail('');
    setMessagePassword('');
    if (type === 'email') {
      const regex = /^[^\s@]+@[^\s@]+$/;
      regex.test(value) ? setEmail(value) : setMessageEmail('이메일 형식이 맞지 않습니다.');
    } else if (type === 'password') {
      const regex = /(?=.{8,})/;
      regex.test(value) ? setPassword(value) : setMessagePassword('패스워드는 8자 이상이어야 합니다.');
    }
  };
  
  return {
    email,
    password,
    messageEmail,
    messagePassword,
    validateInput,
  }
};

export default useValidation;
