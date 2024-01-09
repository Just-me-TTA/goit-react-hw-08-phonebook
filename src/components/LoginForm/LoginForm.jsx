import { Formik } from 'formik';
import * as yup from 'yup';
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
} from 'components/Form.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useAutoClearAuthError } from 'hooks/useAutoClearAuthError';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required('An email is required'),
  password: yup.string().required('A password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useAutoClearAuthError();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(login(userData));
    resetForm();
  };

  return (
    <Wrapper>
      <FormTitle>Please Log In</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
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
            Log in
          </Button>

          <ErrorMessageStyled name="email" component="div" />
          <ErrorMessageStyled name="password" component="div" />
        </FormStyled>
      </Formik>

      {error && (
        <AuthError>
          Login faled :( Please check your data or try again later
        </AuthError>
      )}
    </Wrapper>
  );
};
