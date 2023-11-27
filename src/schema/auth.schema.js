import * as Yup from 'yup';

export const initialLoginValues = {
  usernameOrEmail: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required('Username or Email is required')
    .test(
      'is-username-or-email',
      'Enter a valid username or email',
      (value) => {
        return (
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[^\s@]+$/.test(value)
        );
      }
    ),
  password: Yup.string().required('Password is required'),
});

export const initialSignupValues = {
  usernameOrEmail: '',
  password: '',
  confirm_password: '',
};

export const signupSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required('Username or Email is required')
    .test(
      'is-username-or-email',
      'Enter a valid username or email',
      (value) => {
        return (
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[^\s@]+$/.test(value)
        );
      }
    ),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirm_password: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
