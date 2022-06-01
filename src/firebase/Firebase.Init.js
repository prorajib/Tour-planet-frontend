import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/Firebase.Config';
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
