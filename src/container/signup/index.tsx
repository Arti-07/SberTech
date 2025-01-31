import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../api';
import gifKiss from '../../assets/gifs/gif_kiss.gif';
import Lottie from 'react-lottie';
import { defaultOptions } from './components/SignupPageStyles';
import {
    GifContainer,
    SuccessMessage,
    ErrorMessage,
    SignupContainer,
    SignupTitle,
    FormGroup,
    FormInput,
    Tooltip,
    ButtonGroup,
    Button,
} from './components/SignupPageStyles';

const SignupPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState('');
    const [showGif, setShowGif] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        login: yup
            .string()
            .matches(/^[A-Za-z0-9@$_-]{3,}$/, 'Login must be at least 3 characters and can include letters, numbers, @, $, -, and _.')
            .required('Login is required'),
        password: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must be at least 6 characters and include at least one letter and one number.')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match')
            .required('Password confirmation is required'),
        birthDate: yup
            .date()
            .required('Date of birth is required')
            .max(new Date(), 'Birth date cannot be in the future'),
    });

    const handleSignup = async () => {
        try {
            setErrors({});
            setSuccess('');

            await validationSchema.validate(
                { login, password, confirmPassword, birthDate },
                { abortEarly: false }
            );

            setLoading(true);
            const regResponse = await api.register(login, password, birthDate);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Registration is successful! Please come in.');
                setShowGif(true);
                setTimeout(async () => {
                    setShowGif(false);
                    await api.login(login, password);
                    sessionStorage.setItem('login', login);
                    window.dispatchEvent(new Event('loginChanged'));
                    navigate('/smartini_crypto/userspage');
                }, 2000);

            } else {
                setErrors({ general: 'Unknown registration error. Try again later.' });
            }
        } catch (validationError) {
            if (validationError instanceof yup.ValidationError) {
                const validationErrors: Record<string, string> = {};
                validationError.inner.forEach((err) => {
                    if (err.path) validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                setErrors({ general: 'Registration error. Try again later.' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <SignupContainer>
            {showGif && (
                <GifContainer>
                    <img src={gifKiss} alt="Successful registration" />
                </GifContainer>
            )}

            <SignupTitle>Registration</SignupTitle>
            <div className="signup-form">
                <FormGroup>
                    <label>
                        Login:
                        <FormInput
                            type="text"
                            placeholder="Enter your login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <label>
                        Password:
                        <FormInput
                            type="password"
                            placeholder="Enter the password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <label>
                        Confirm password:
                        <FormInput
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <label>
                        Date of birth:
                        <FormInput
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </label>
                    {errors.birthDate && <ErrorMessage>{errors.birthDate}</ErrorMessage>}
                </FormGroup>

                {loading && (
                    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                        <Lottie options={defaultOptions} height={50} width={50} />
                    </div>
                )}
                {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}

                <ButtonGroup>
                    <Button className="button-secondary" onClick={() => navigate('/smartini_crypto/signin')}>
                        ←
                    </Button>
                    <Button className="button-primary" onClick={handleSignup}>
                        Registration
                    </Button>
                </ButtonGroup>
            </div>
        </SignupContainer>
    );
};

export default SignupPage;

