import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth,db } from "../database/firebaseconfig";
import { setDoc, doc, collection } from "firebase/firestore"
import firebase from "firebase"

export async function handleRegister(e, username, email, password, cfmpassword, navigate) {
    e.preventDefault();
    //const passCheck = password == cfmpassword ? true : false;
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setDoc(doc(db,"accounts",username),{accEmail:email})
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

export async function handleLogin(e,email,password,navigate){
    e.preventDefault();
    const ref = firebase.firestore().collection("accounts");
    const queryRef = ref.where("accEmail", "==",email);

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            queryRef.get().then((querySnapshot) => {
                querySnapshot.docs.forEach(doc => {
                    auth.currentUser.displayName = doc.id;
                })
            })
            navigate("/")
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
}

export async function handleLogout(e,navigate){
    await signOut(auth)
        .then(()=> {
            navigate("/start")
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
}




export default function apphandles(){};
