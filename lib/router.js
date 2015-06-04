Router.route("/", {
	path: "/",
	template: "main",
	waitOn: function(){
		return Meteor.subscribe("allCustomers");
	}
})

Router.route("formio", {
	path: "/formio",
	template: "formio",

})