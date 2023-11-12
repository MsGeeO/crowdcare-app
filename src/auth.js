import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    const uid = user.uid;
    console.log("User is signed in with UID:", uid);
  } else {
    // User is signed out.
    console.log("User is signed out");
  }
});

```
This code listens for changes in the user's authentication state and performs actions accordingly, such as checking if the user is signed in or out.
```;
