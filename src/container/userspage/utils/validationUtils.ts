export const luhnCheck = (cardNumber: string): boolean => {
    const digits = cardNumber.replace(/\s+/g, '').split('').map(Number);
    let sum = 0;
    let isSecond = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecond = !isSecond;
    }

    return sum % 10 === 0;
};


export const isExpiryDateValid = (expiryDate: string): boolean => {
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return false;

    const [month, year] = expiryDate.split('/').map(Number);
    if (month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    return !(year < currentYear || (year === currentYear && month < currentMonth));
};

export const isCvvValid = (cvv: string): boolean => /^\d{3}$/.test(cvv);

export const detectCardType = (cardNumber: string): string | null => {
    const cleanCardNumber = cardNumber.replace(/[^0-9]/g, '');

    if (cleanCardNumber.startsWith('4')) return 'Visa';
    if (cleanCardNumber.startsWith('5')) return 'MasterCard';
    if (cleanCardNumber.startsWith('3')) return 'American Express';

    return null;
};
