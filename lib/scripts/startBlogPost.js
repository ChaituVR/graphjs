import apiCall from './api.js';

function startBlogPostCall(args, callback) {
	apiCall("startBlogPost", {
		"title": args[0],
		"content": args[1]
	},
	function(response) {
		callback(response.data);
	});
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	startBlogPostCall(args, callback);
};