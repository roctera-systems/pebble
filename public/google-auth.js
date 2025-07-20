// google-auth.js
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { auth } from './firebase-config.js';

export async function google_login() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    const greeting = document.createElement('div');
    greeting.textContent = `Hello ${user.displayName}`;
    document.body.appendChild(greeting);
    
    console.log('User logged in:', user);
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}