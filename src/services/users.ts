
import { usersDB } from '../store/constants';

export const storeUserSignUp = async (user: { firstName: string | undefined, lastName: string | undefined, email: string | undefined, password: string | undefined }) => {
    const response = await fetch(usersDB, {
        method: 'POST',
        body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        })
    });
    const result = await response.json();
    if (response.ok) {
        console.log('user data stored');
        return result;
    } else {
        throw new Error(result);
    }
};

export const getUserData = async (userId: string) => {
    const response = await fetch(usersDB);
    const result = await response.json();
    if (response.ok) {
        console.log('user data');
        return result;
    } else {
        throw new Error(result);
    }
};