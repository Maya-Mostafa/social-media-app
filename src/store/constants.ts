// Authentication
const APIKey = 'AIzaSyCQy1usvtK87Af4z2itKFyuU_26moFj4Ko';
export const signUpEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`;
export const signInEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`;

// Databases
const DB = 'https://social-media-app-b1e7a-default-rtdb.firebaseio.com';
export const usersDB = `${DB}/users.json`;
export const dingDingDB = `${DB}/dingDings.json`;