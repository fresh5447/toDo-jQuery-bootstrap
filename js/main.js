var todos = [

  { id: 0, title: "master js", date: '01/01/01' },
  { id: 1, title: "master css", date: '01/01/01' },
  { id: 2, title: "master html", date: '01/01/01' },
  { id: 3, title: "master node", date: '01/01/01' },
  { id: 4, title: "master react", date: '01/01/01' },
  { id: 5, title: "master poetry", date: '01/01/01' }
]

var completes = [];

$(document).ready(function(){

  function loadTodos(arr){
    var table = $("#todo-list");

    for (var i = 0; i < arr.length; i++) {
      table.append('<tr id="' + arr[i].id  +'"> <td>' +  arr[i].title + '</td> <td> ' + arr[i].date + '</td> <td><button class="markComplete"> complete </button></td> </tr>')
    }

  };

  function loadCompletes(arr){
    var table = $("#completes-list");

    for (var i = 0; i < arr.length; i++) {
      table.append('<tr id="' + arr[i].id  +'"> <td>' +  arr[i].title + '</td> <td> ' + arr[i].date + '</td> <td><button class="markComplete"> complete </button></td> </tr>')
    }

  };

  loadTodos(todos);

  function completeTodo(){

    $(this).closest('tr').remove();

    var id = $(this).closest('tr').attr('id');


    var removedTodo = todos.filter(function( item ) {
      return item.id == id;
    });

    completes.push(removedTodo[0]);

    loadCompletes(completes);
  }

  $(".markComplete").on('click', completeTodo);

});
