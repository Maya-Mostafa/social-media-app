import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    userId: '',
    isLoggedIn: false,
    login: (userData: {token: '', userId: ''}) => {},
    logout: () => {}
});

interface Props{
    children: React.ReactNode;
}

export const AuthContextProvider : React.FC <Props> = ({children}) => {
    
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const isUserLoggedIn = !!token;

    useEffect(()=>{
        const authToken = window.localStorage.getItem('socialAuthToken');
        if (authToken){
            setToken(authToken);
        }
    }, [])

    const loginHandler = (userData: {token: any, userId: string}) =>{
        setToken(userData.token);
        setUserId(userData.userId);
        window.localStorage.setItem('socialAuthToken', userData.token);
        window.localStorage.setItem('userId', userData.userId);
    };
    const logoutHandler = () =>{
        setToken('');
        setUserId('');
        window.localStorage.removeItem('socialAuthToken');
        window.localStorage.removeItem('userId');
    };

    const authCtxProviderValue = {
        token: token,
        userId: userId,
        isLoggedIn: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    
    return (
        <AuthContext.Provider value={authCtxProviderValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
