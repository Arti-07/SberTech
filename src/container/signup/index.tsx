import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import api from '../../api';
import gifKiss from '../../assets/gifs/gif_kiss.gif';
import Lottie from 'react-lottie';
import {defaultOptions} from './components/SignupPageStyles';
import {
    GifContainer,
    SuccessMessage,
    ErrorMessage,
    SignupContainer,
    SignupTitle,
    FormGroup,
    FormInput,
    ButtonGroup,
    Button,
    ModalContainer,
    ModalContent,
    QrImage
} from './components/SignupPageStyles';
import {useTheme} from '@mui/material/styles';

const SignupPage = (): React.ReactElement => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [chatId, setChatId] = useState(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState('');
    const [showGif, setShowGif] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [qrImage, setQrImage] = useState<string>('');
    const [platform, setPlatform] = useState<'mobile' | 'desktop' | null>(null);

    const theme = useTheme();
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

    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            setQrImage(require("../../assets/images/bot_tg_black.jpg"));
        } else {
            setQrImage(require("../../assets/images/bot_tg_white.jpg"));
        }
    }, [theme]);

    const handleSignup = async () => {
        try {
            setErrors({});
            setSuccess('');
            await validationSchema.validate(
                {login, password, confirmPassword, birthDate},
                {abortEarly: false}
            );

            setLoading(true);

            const regResponse = await api.register(login, password, birthDate, chatId);

            if (regResponse && regResponse.message === 'User registered successfully') {
                setSuccess('Registration is successful! Please come in.');
                setShowGif(true);
                setTimeout(async () => {
                    setShowGif(false);
                    await api.login(login, password);
                    sessionStorage.setItem('login', login);
                    window.dispatchEvent(new Event('loginChanged'));
                    navigate('/smartini_crypto/userspage');
                }, 3000);

            } else {
                setErrors({general: 'Unknown registration error. Try again later.'});
            }
        } catch (validationError) {
            if (validationError instanceof yup.ValidationError) {
                const validationErrors: Record<string, string> = {};
                validationError.inner.forEach((err) => {
                    if (err.path) validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                setErrors({general: 'Registration error. Try again later.'});
            }
        } finally {
            setLoading(false);
        }
    };

    const handleAddTelegram = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setPlatform(null);
    };

    const handleOptionSelect = (option: 'mobile' | 'desktop') => {
        setPlatform(option);
        if (option === 'desktop') {
            window.open('https://t.me/authjs_bot', '_blank');
        }
    };

    return (
        <SignupContainer>
            {showGif && (
                <GifContainer>
                    <img src={gifKiss} alt="Successful registration"/>
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

                <FormGroup>
                    <Button className="button-primary" onClick={handleAddTelegram}>
                        Add Telegram?
                    </Button>
                </FormGroup>

                {loading && (
                    <div style={{marginBottom: '1rem', textAlign: 'center'}}>
                        <Lottie options={defaultOptions} height={50} width={50}/>
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

            {showModal && (
                <ModalContainer>
                    <ModalContent>
                        <h2>Select your platform:</h2>
                        <Button onClick={() => handleOptionSelect('desktop')}>Desktop</Button>
                        <Button onClick={() => handleOptionSelect('mobile')}>Mobile</Button>
                        {platform === 'mobile' && <QrImage src={qrImage} alt="Telegram QR"/>}
                        <p>Enter the command '/start'</p>
                        <Button onClick={handleModalClose}>Close</Button>
                    </ModalContent>
                </ModalContainer>
            )}
        </SignupContainer>
    );
};

export default SignupPage;
