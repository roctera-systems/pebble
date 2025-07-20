// google-auth.js
export function google_login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  // calls firebase.auth() to prompt google login popup (returns promise)
  return firebase.auth().signInWithPopup(provider)
    // because signInWithPopup returns a promise (since its an async func this is completing the promise)
    .then(result => {
      const user = result.user;
      const greeting = document.createElement('div');
      greeting.textContent = `Hello ${user.displayName}`;
      document.body.appendChild(greeting);
      console.log(user);
      return user; // return user data for potential use elsewhere
    })
    .catch(error => {
      console.log(error);
      throw error; // re-throw so calling code can handle if needed
    });
}