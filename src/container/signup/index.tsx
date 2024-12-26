import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import gifKiss from '../../assets/gifs/gif_kiss.gif';
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

    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const loginRegex = /^[A-Za-z0-9@$_-]{3,}$/;

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            setSuccess('');
            return;
        }

        if (!login && !password && !confirmPassword && !birthDate) {
            setError('Fill fields');
            setSuccess('');
            return;
        }

        if (!loginRegex.test(login)) {
            setError(
                'The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore characters'
            );
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('The password must contain at least 6 characters, including a letter and a number');
            setSuccess('');
            return;
        }

        try {
            const regResponse = await api.register(login, password, birthDate);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Registration is successful! Please sign in.');
                setError('');
                setShowGif(true);
                setTimeout(() => setShowGif(false), 5000);
            } else {
                setError('Unknown registration error. Try again later.');
                setSuccess('');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('A user with this username already exists');
            } else {
                setError('Registration error. Try again later');
            }
            setSuccess('');
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
                        Username:
                        <FormInput
                            type="text"
                            placeholder="Enter your username"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    <Tooltip
                        title="The login must be at least 3 characters long and can contain only letters, numbers, @, $, hyphen and underscore characters"
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
                    <Tooltip title="The password must contain at least 6 characters, including a letter and a number">
                        ❓
                    </Tooltip>
                </FormGroup>

                <FormGroup>
                    <label>
                        Confirm the password:
                        <FormInput
                            type="password"
                            placeholder="Confirm the password"
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
