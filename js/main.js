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
          todos.push({id: Object.keys(snapshot.val())[i], title: snapshot.val()[Object.keys(snapshot.val())[i]].title, date: snapshot.val()[Object.keys(snapshot.val())[i]].date})
        }

        var table = $("#todo-list");

        for (var i = 0; i < todos.length; i++) {
          table.append('<tr id="' + todos[i].id  +'"> <td>' +  todos[i].title + '</td> <td> ' + todos[i].date + '</td> <td><button class="markComplete"> complete </button></td> </tr>')
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

    $(this).closest('tr').remove();

    var id = $(this).closest('tr').attr('id');

    var removedTodo = todos.filter(function( item ) {
      return item.id == id;
    });

    addComplete(removedTodo[0]);
  }

  $(".markComplete").on('click', completeTodo);
  $(".submitTodo").on('click', createTodo);

});
