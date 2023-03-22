$(document).ready(function() {
	// Load the default page (portfolio)
	$("#content").load("index.html");

	// Load the content of the navbar items using Ajax
	$("#index").click(function() {
		$("#content").load("index.html");
	});

	$("#about_me").click(function() {
		$("#content").load("about_me.html");
	});

	$("#contact").click(function() {
		$("#content").load("contact.html");
	});

	$("#projects").click(function() {
		$("#content").load("projects.html");
	});
});
