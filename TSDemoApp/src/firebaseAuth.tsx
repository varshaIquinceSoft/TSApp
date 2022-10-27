import auth from '@react-native-firebase/auth';
import UserData from './screen/UserData';


export const firebaseRegistration=(email: String,password:String,callback)=>{
  auth().createUserWithEmailAndPassword(email,password)
  .then(auth => callback.sccess(auth))
  .catch((error)=>{
    callback.error(error.message)
}
  );
}
export const firebaseLogin=(email: String,password:String,callback)=>{
    var user :Promise;
    auth().signInWithEmailAndPassword( email,password)
    .then(auth => callback.sccess(auth))
    .catch((error)=>{
        callback.error(error.message)
}
    );
  }

