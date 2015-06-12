// Collections: Customers, Images

Customers = new Mongo.Collection("customers");


Customers.attachSchema(new SimpleSchema({
	first: {
		type: String,
		label: "First Name"
	},
	last: {
		type: String,
		label: "Last Name"
	},
	company: {
		type: String,
		label: "Company Name"
	},
	startDate: {
		type: Date,
		label: "Start Date"
	},
	endDate: {
		type: Date,
		label: "End Date"
	},
	type: {
		type: String,
		label: "Type",
		autoform: {
			options: function() {
				return [
					{
						label: "Local",
						value: "local"
					},
					{
						label: "Regional",
						value: "regional"
					},
					{
						label: "National",
						value: "national"
					}
				]
			}
		}
	}
}))