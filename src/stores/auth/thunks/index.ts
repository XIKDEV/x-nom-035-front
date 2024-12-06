// ! Uso de helper [login] para pruebas

import { useMutation } from '@tanstack/react-query';
import { IFormFieldLogin } from '../../../interfaces';

export const loginMutation = () => {
  return useMutation({
    mutationFn: async ({ email, password }: IFormFieldLogin) => {
      const resp = await fetch('http://localhost:3005/api/v3/auth', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await resp.json();
      localStorage.setItem('token', data.data.token);

      return data.data;
    },
  });
};
