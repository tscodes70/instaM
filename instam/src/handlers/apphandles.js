import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../database/firebaseconfig";
import { setDoc, getDocs, doc, collection, query, where } from "firebase/firestore"
import UserProfile from "../Closures/UserProfile";


export async function handleRegister(e, username, email, password, cfmpassword, navigate) {
    e.preventDefault();
    //const passCheck = password == cfmpassword ? true : false;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setDoc(doc(db, "accounts", username), { accEmail: email })
            // Login
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
}

export async function handleLogin(e, email, password, navigate) {
    e.preventDefault();
    const ref = collection(db, "accounts");
    const queryRef = query(ref, where("accEmail", "==", email));
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const querySnapshot = await getDocs(queryRef);
  
      querySnapshot.docs.forEach(doc => {
        UserProfile.setName(doc.id);
        UserProfile.setEmail(doc.get("accEmail"));
      });
  
      // Wait for UserProfile values to be set
      await Promise.all([UserProfile.getName(), UserProfile.getEmail()]);
      navigate("/");

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  

export async function handleLogout(e, navigate) {
    await signOut(auth)
        .then(() => {
            UserProfile.clearProfile();
            navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
}

export async function retrieveFriendList(username) {
    const ref = collection(db, "accounts", username, "friendlist");
    const queryRef = query(ref);
    const friendList = [];
    await getDocs(queryRef)
        .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            friendList.push(doc.get("username"));
        })
    })
    return friendList;
}



export default function apphandles() { };
