import { signUpEndPoint, signInEndPoint } from '../store/constants'

export const signUpUser = async (data: { email: string | undefined, password: string | undefined }) => {
    const response = await fetch(signUpEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, returnSecureToken: true }),
    });
    const userData = await response.json();
    if (response.ok) {
        return userData;
    } else {
        throw new Error(userData);
    }
};

export const signInUser = async (data: { email: string | undefined, password: string | undefined }) => {
    try {
        const response = await fetch(signInEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, returnSecureToken: true }),
        });
        const userData = await response.json();
        if (response.ok) {
            return userData;
        } else {
            throw new Error(userData);
        }
    } catch (error: any) {
        alert(error.messgae);
    }
};