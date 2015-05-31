// Collections: Customers, Images

Customers = new Mongo.Collection("customers");

// Customers.helpers({
//   profilePic: function(){
//   	var img = Images.findOne({_id: this.profilePic});
//   	if(!this.profilePic || !img){
//   		return;
//   	}
//   	else {
//   		return img.url();
//   	}
//   }
// });


// this needs to run on the client

// Template.customerTable.helpers({
//   customer: function () {
//     return Customers.find({});
//   }
// });


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
	// impressions: {
	// 	type: Number,
	// 	label: "Views",
	// 	optional: true,
	// 	defaultValue: 0
	// },
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
	// profilePic: {
	// 	type: String,
	// 	label: "Background Image",
	// 	optional: true,
	// 	autoform: {
	// 		afFieldInput: {
 //        type: "fileUpload",
 //        collection: "Images"
 //      }
	// 	}
	// }
}))