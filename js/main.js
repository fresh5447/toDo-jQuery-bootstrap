var completes = [];

$(document).ready(function(){

  function loadTodos(){
    var todos = [];

    function getAllTodos() {
      return db.ref('/todos/').once('value').then(function(snapshot) {

        if(!snapshot.val()) {
          return
        }

        for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
          todos.push({id: Object.keys(snapshot.val())[i], title: snapshot.val()[Object.keys(snapshot.val())[i]].title, date: snapshot.val()[Object.keys(snapshot.val())[i]].date, complete: false})
        }

        var table = $("#todo-list");

        var incompleteTodos = todos.filter(function(item){
          return !item.complete
        })

        for (var i = 0; i < incompleteTodos.length; i++) {
          table.append('<tr id="' + incompleteTodos[i].id  +'"> <td>' +  incompleteTodos[i].title + '</td> <td> ' + incompleteTodos[i].date + '</td> <td><button class="markComplete"> complete </button></td> </tr>')
        }

      });
    }

    getAllTodos();

  };

  function addComplete(t){
    var table = $("#completes-list");
    table.append('<tr id="' + t.id  +'"> <td>' +  t.title + '</td> <td> ' + t.date + '</td> <td><button class="undoComplete"> undo </button></td> </tr>')
  };

  loadTodos();

  function createTodo(e) {
    e.preventDefault();

    var title = $("#todoTitle").val();
    var date = $("#todoDate").val();

    postToDoToDatabase(title, date);

  }

  function completeTodo(){

    var id = $(this).closest('tr').attr('id');

    console.log(id)

    // function getToDoById(id) {
    //   return db.ref('/todos/' + id).once('value').then(function(snapshot) {
    //     console.log(" Snap shot of ToDo",snapshot.val())
    //   });
    // }
    //
    // getToDoById()

    var removedTodo = todos.filter(function( item ) {
      return item.id == id;
    });

    addComplete(removedTodo[0]);
  }

  $(".markComplete").on('click', completeTodo);
  $(".submitTodo").on('click', createTodo);

});
