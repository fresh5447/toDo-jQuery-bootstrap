var config = {
   apiKey: FIREBASE_API_KEY,
   authDomain: "jquery-todo-662f8.firebaseapp.com",
   databaseURL: "https://jquery-todo-662f8.firebaseio.com",
   storageBucket: "jquery-todo-662f8.appspot.com",
   messagingSenderId: "573512969580"
 };
 firebase.initializeApp(config);

 var db = firebase.database();


 function postToDoToDatabase(title, date) {
   db.ref('todos/').push({
     title: title,
     date: date
   });
 }

 function getToDoById(id) {
   return db.ref('/todos/' + id).once('value').then(function(snapshot) {
     console.log(snapshot.val())
   });
 }
