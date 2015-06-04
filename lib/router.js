Router.route("/", {
	path: "/",
	template: "main",
	waitOn: function(){
		return [
			Meteor.subscribe("allCustomers"),
			Meteor.subscribe("allArchives")
	]}
})

Router.route("formio", {
	path: "/formio",
	template: "formio",

})