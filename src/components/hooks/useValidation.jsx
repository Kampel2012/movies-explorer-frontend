import { useEffect, useState } from 'react';

function useValidation(value, validations) {
  const [EmptyError, setEmptyError] = useState('');
  const [minLengthError, setMinLengthError] = useState('');
  const [maxLengthError, setMaxLengthError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value
            ? setEmptyError('')
            : setEmptyError('Поле не должно быть пустым');
          break;

        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(
                `В поле должно быть минимум ${validations[validation]} символов`
              )
            : setMinLengthError('');
          break;

        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(
                `В поле должно быть максимум ${validations[validation]} символов`
              )
            : setMaxLengthError('');
          break;

        case 'isEmail':
          const emailPattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          emailPattern.test(String(value).toLowerCase())
            ? setEmailError('')
            : setEmailError('Введите корректный эмеил вида abcde@bk.ru');
          break;

        case 'isName':
          const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
          namePattern.test(String(value).toLowerCase())
            ? setNameError('')
            : setNameError(
                'Имя может содержать только латиницу, кириллицу, пробел или дефис'
              );
          break;

        default:
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (
      EmptyError ||
      minLengthError ||
      maxLengthError ||
      emailError ||
      nameError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [EmptyError, minLengthError, maxLengthError, emailError, nameError]);

  return {
    EmptyError,
    minLengthError,
    maxLengthError,
    emailError,
    nameError,
    inputValid,
  };
}

export default useValidation;
