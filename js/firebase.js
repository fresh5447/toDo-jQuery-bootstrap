var config = {
   apiKey: FIREBASE_API_KEY,
   authDomain: "jquery-todo-662f8.firebaseapp.com",
   databaseURL: "https://jquery-todo-662f8.firebaseio.com",
   storageBucket: "jquery-todo-662f8.appspot.com",
   messagingSenderId: "573512969580"
 };
 firebase.initializeApp(config);

 var database = firebase.database();


 function postToDoToDatabase(title, date) {
   firebase.database().ref('todos/').push({
     title: title,
     date: date
   });
 }
