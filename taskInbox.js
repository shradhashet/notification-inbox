$(document).ready(function(){

var tasks = (function() {
	$.ajax({
		url: 'data/tasks.json',
		dataType: 'Json',
		type: 'GET'

	}).success(function(data) {
		var template = _.template($('#taskTemplate').html());
		$('.task-body').html(template({
			tasks: data.tasks,
			in_progress: data.in_progress,
			in_review: data.in_review,
			approved: data.approved
		}));

	}).error(function() {

	});




})();
});