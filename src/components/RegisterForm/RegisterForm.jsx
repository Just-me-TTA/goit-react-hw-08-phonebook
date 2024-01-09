import * as yup from 'yup';
import YupPassword from 'yup-password';
import { Formik } from 'formik';
import {
  AuthError,
  Border,
  Button,
  ErrorMessageStyled,
  FormStyled,
  FormTitle,
  Input,
  InputBox,
  Label,
  Wrapper,
} from '../Form.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useAutoClearAuthError } from 'hooks/useAutoClearAuthError';

YupPassword(yup);

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('A name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('An email is required'),
  password: yup
    .string()
    .password('Please enter valid password')
    .min(
      8,
      'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
    )
    .minLowercase(1, 'Password must contain at least 1 lower case letter')
    .minUppercase(1, 'Password must contain at least 1 upper case letter')
    .minNumbers(1, 'Password must contain at least 1 number')
    .minSymbols(1, 'Password must contain at least 1 special character')
    .required('A password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useAutoClearAuthError();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(register(userData));
    resetForm();
  };

  return (
    <Wrapper>
      <FormTitle>Sign up now</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <InputBox>
            <Input type="text" name="name" required />
            <Label htmlFor="name">Name</Label>
            <Border></Border>
          </InputBox>

          <InputBox>
            <Input type="email" name="email" required />
            <Label htmlFor="email">Email</Label>
            <Border></Border>
          </InputBox>

          <InputBox>
            <Input type="password" name="password" required />
            <Label htmlFor="password">Password</Label>
            <Border></Border>
          </InputBox>

          <Button type="submit" aria-label="register">
            Register
          </Button>

          <ErrorMessageStyled name="name" component="div" />
          <ErrorMessageStyled name="email" component="div" />
          <ErrorMessageStyled name="password" component="div" />
        </FormStyled>
      </Formik>
      {error && (
        <AuthError>
          Registration faled :( Please check your data or try again later
        </AuthError>
      )}
    </Wrapper>
  );
};
