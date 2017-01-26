// function handleClick() {
//   var newText = $("#greetingText").val();
//   $(this).text($(this).next().val());
// }

function handleClick() {
  var text = $("#greetingText").val();
  $(this).text(text);
}

$('#greeting').on( 'click', handleClick );

function onBtnEnter() {
    $(this).css({ 'background-color': 'red' });
}

function onBtnExit() {
    $(this).css({ 'background-color': 'blue' });
}

$('#greeting').on('mouseover', onBtnEnter );
$('#greeting').on('mouseleave', onBtnExit );


var todos = [
  { id: Math.floor(Math.random()*100), title: "Get Blackbelt", date: '11/11/17'  },
  { id: Math.floor(Math.random()*100), title: "Takeover World", date: '11/11/18'  },
  { id: Math.floor(Math.random()*100), title: "Takeup Nitting", date: '11/11/19'  },
  { id: Math.floor(Math.random()*100), title: "Retire", date: '11/11/20'  }
];

var completedTodos = [];


function renderToDosToPage(arr) {
  for (var i = 0; i < arr.length; i++) {
    $("#todo-list").append('<tr> <td>'+
                            arr[i].title + '</td> <td>' + arr[i].date + '</td> <td> <button id="' +
                            arr[i].id +'" class="completeTodoBtn"> complete </button> </td> </tr>');
  }
}

renderToDosToPage(todos);

function markComplete() {
  //$this = complete btn todo
  $(this).closest('tr').remove();

  //gets the id of the specifc todo we are looking for
  var id = $(this).attr('id');

  //grabs the todo out of the todos list with the matching id
  var toDone = todos.filter(function(item) {
    return item.id == id
  });

  //render complete todo to page.
  addToCompleteList(toDone[0]);

}

function addToCompleteList(todo) {
  //take todo and append it to complete todos list
  $('#completes-list').append('<tr id="' + todo.id  +'"> <td>' +
    todo.title + '</td> <td> ' + todo.date + '</td> <td><button class="undoComplete"> undo </button></td> </tr>')
}

$(".completeTodoBtn").on('click', markComplete);



function createNewTodo(e) {

  // GET VALUES FOR TODO TITLE AND TODO Date
  // MAKE AN OBJECT WITH THESE VALUES
  // NEED TO APPEND THIS OBJECT TO TODO LIST

  e.preventDefault();

  var title = $("#todoTitle").val();
  var date = $("#todoDate").val();
  var id = Math.floor(Math.random()*100)

  $("#todo-list").append('<tr> <td>'+
                          title + '</td> <td>' + date + '</td> <td> <button id="' +
                          id +'" class="completeTodoBtn"> complete </button> </td> </tr>');

  $(".completeTodoBtn").on('click', markComplete);
}

$(".submitTodo").on('click', createNewTodo);
