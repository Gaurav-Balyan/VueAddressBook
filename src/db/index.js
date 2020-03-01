import Vue from 'vue';
import Firebase from 'firebase';
import { rtdbPlugin } from 'vuefire';

Vue.use(rtdbPlugin);

const firebaseConfig = {
  apiKey: 'AIzaSyD0Lf2L45NpbBy-e_-UcWqPSr6SlyRTR88',
  authDomain: 'vueaddressbookdemo.firebaseapp.com',
  databaseURL: 'https://vueaddressbookdemo.firebaseio.com',
  projectId: 'vueaddressbookdemo',
  appId: '1:173494088196:web:8f7e973dee0c9d33a5bb51',
  measurementId: 'G-P79RYRR4JM'
};

const FireBaseApp = Firebase.initializeApp(firebaseConfig);
const FireDB = FireBaseApp.database();
const firebase = function() {
  return {
    contacts: FireDB.ref('contacts')
  };
};
const isConnected = FireDB.ref('.info/connected');

// const db = [
//   {
//     key: 'f0a9ccaee18a',
//     name: 'Tobias Cefalu',
//     email: 'tobias@gmail.com',
//     phone: '9278908738',
//     address: '239, North Lane, Street 11, New York',
//     fbHandle: 'tobias.cef',
//     twitterHandle: 'tobias.cef',
//     instaHandle: '',
//     linkedinHandle: 'tobias.cef'
//   },
//   {
//     key: '1047fb1e4cac',
//     name: 'Josh Julien',
//     email: 'josh@ecorp.com',
//     phone: '9217394928',
//     address: 'Apartment 20, Folk Street, Riverdale',
//     fbHandle: 'joshjulien88',
//     twitterHandle: '',
//     instaHandle: 'joshjulien88',
//     linkedinHandle: ''
//   },
//   {
//     key: '204af9a2309e',
//     name: 'Hugo Haverland',
//     email: 'hugo@yahoo.ca',
//     phone: '9618291928',
//     address: '90, Homermill, Off Street 97, Toronto',
//     fbHandle: '',
//     twitterHandle: 'hugo_hl',
//     instaHandle: 'hugo_hl',
//     linkedinHandle: ''
//   }
// ];

export { firebase, isConnected };
