var config = {
   apiKey: FIREBASE_API_KEY,
   authDomain: "jquery-todo-662f8.firebaseapp.com",
   databaseURL: "https://jquery-todo-662f8.firebaseio.com",
   storageBucket: "jquery-todo-662f8.appspot.com",
   messagingSenderId: "573512969580"
 };
 firebase.initializeApp(config);

 var database = firebase.database();


 function writeTodoData() {
   firebase.database().ref('todos/').set({
     title: "Your First ToDo",
     date: "02/02/17",
     id: 234234234
   });
 }

 writeTodoData();
