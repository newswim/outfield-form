Router.route("/", {
	path: "/",
	template: "main",
	waitOn: function(){
		return Meteor.subscribe("allCustomers");
	}
})