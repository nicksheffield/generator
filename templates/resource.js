angular.module('app.resources')

.factory('<%= capitalizedName %>', function($resource) {
	var url = '/<%= lowerName %>/:id';

	var defaults = {
		'id': '@id'
	};

	var methods = {
		update: {
			method: 'PUT'
		}
	};

	return $resource(url, defaults, methods);
});