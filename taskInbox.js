var tasks = (function() {

	$.ajax({
		url: 'data/tasks.json',
		dataType: 'Json',
		type: 'GET'

	}).success(function(data) {

		$("#taskTemplate").tmpl({
			tasks: data.tasks,
			in_progress: data.in_progress,
			in_review: data.in_review,
			approved: data.approved
		}).appendTo(".task-body");

	}).error(function() {

	});



})();