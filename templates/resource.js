angular.module('app.models')

.factory('<%= capitalizedName %>', function($resource, $config) {
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