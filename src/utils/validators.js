export const required = value => value ? undefined : 'Введите имя';
export const requiredSecondName = value => value ? undefined : 'Введите Фамилию';
export const requiredEmail = value => value ? undefined : 'Введите email';

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Не корректный email' : undefined

export const requiredLogin = value => value ? undefined : 'Введите логин';
export const requiredPassword = value => value ? undefined : 'Введите пароль';

  
export const matchInput = (field, allInputs) =>
{
  debugger
    if(field === allInputs.password) return undefined;

    return 'Пароли не совпадают';
}
  


export const passLength = (len) => (value) => {
  return value?.length < len
    ? `Пароль не должен быть короче ${len} символов`
    : null;
};