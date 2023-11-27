import * as Yup from 'yup';

export const initialLoginValues = {
  email: '',
  username: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .max(25, 'username/email must be at most 25 characters')
    .required('username/email is required'),
});

export const initialSignupValues = {
  email: '',
  username: '',
  password: '',
  confirm_password: '',
};

export const signupSchema = Yup.object().shape({
  username: Yup.string()
    .max(25, 'username/email must be at most 25 characters')
    .required('username/email is required'),
});
