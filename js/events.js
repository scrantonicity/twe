angular.module('eventsApp', [])
    .controller('EventsController', function() {
        var eventsList = this;
        eventsList.events = [
    		{date: 'July 12, 2018', title: "Dylan's Birthday", time: "6:00pm-8:00pm", location: "New York City"},
      		{date: 'August 28, 2018', title: "School Starts", time: "6:00pm-8:00pm", location: "CUC"},
      		{date: 'September 9, 2018', title: "First Rehearsal", time: "6:00pm-8:00pm", location: "Studio Theatre"}];

      	eventsList.addEvent = function() {
      		eventsList.events.push({date: eventsList.eventDate, 
      			title:eventsList.eventTitle, time:eventsList.eventTime, location:eventsList.eventLocation});
      		eventsList.eventDate='';
      		eventsList.eventTitle='';
      		eventsList.eventTime='';
      		eventsList.eventLocation='';
		};
	});

angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });