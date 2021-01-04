import React, {useEffect, useState} from 'react';
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export const Signup = () => {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const history = useHistory();
   const auth = firebase.auth();

   useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => { // detaching the listener
         if (user) {
            history.push(`/todo-list/${user.uid}`)
         } else {
         }
      });
      return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
   }, []);

   const createUser = () => {
      auth.createUserWithEmailAndPassword(email,password).then((user) => {
         console.log(user)
      }).catch(e=> console.log(e))
   }

   const signIn =()=> {
      auth.signInWithEmailAndPassword(email,password).then((user)=>
      {
         history.push(`/todo-list/${user.user.uid}`)
      }).catch(e=>console.log(e))
   }

   console.log({email,password});

   return(
   <div>
      <h1>Sign Up</h1>
      <input type="text" value={email} onChange={(e)=> {
         setEmail(e.target.value)
      }} />
      <input type="password" value={password} onChange={(e)=> {
         setPassword(e.target.value)
      }} />
      <button onClick={createUser}>Neu anmelden</button>

      <button onClick={signIn}>Anmelden</button>
   </div>
   )
}
