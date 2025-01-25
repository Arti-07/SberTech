import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showGif, setShowGif] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const loginRegex = /^[A-Za-z0-9@$_-]{3,}$/;

    const validationMessages = {
        passwordsDontMatch: 'Passwords don\'t match',
        fillFields: 'Fill in all fields',
        loginInvalid: 'The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore.',
        passwordInvalid: 'The password must contain at least 6 characters, including a letter and a number.',
    };

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError(validationMessages.passwordsDontMatch);
            setSuccess('');
            return;
        }

        if (!login || !password || !confirmPassword || !birthDate) {
            setError(validationMessages.fillFields);
            setSuccess('');
            return;
        }

        if (!loginRegex.test(login)) {
            setError(validationMessages.loginInvalid);
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError(validationMessages.passwordInvalid);
            setSuccess('');
            return;
        }

        try {
            setLoading(true);
            const regResponse = await api.register(login, password, birthDate);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Registration is successful! Please come in.');
                setError('');
                setShowGif(true);
                setTimeout(() => setShowGif(false), 5000);
            } else {
                setError('Unknown registration error. Try again later.');
                setSuccess('');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('The user with this username already exists');
            } else {
                setError('Registration error. Try again later');
            }
            setSuccess('');
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
                    <Tooltip
                        title="The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore."
                    >
                        ❓
                    </Tooltip>
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
                    <Tooltip title="The password must contain at least 6 characters, including a letter and a number.">
                        ❓
                    </Tooltip>
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
                </FormGroup>

                {loading && (
                    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                        <Lottie options={defaultOptions} height={50} width={50} />
                    </div>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {success && <SuccessMessage>{success}</SuccessMessage>}

                <ButtonGroup>
                    <Button className="button-secondary" onClick={() => navigate('/smartini_crypto/signin')}>
                        Sign In
                    </Button>
                    <Button className="button-primary" onClick={handleSignup}>
                        Sign Up
                    </Button>
                </ButtonGroup>
            </div>
        </SignupContainer>
    );
};

export default SignupPage;
