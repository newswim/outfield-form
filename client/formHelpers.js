/***** Form Helpers ****/

Template.customerTable.helpers({
  customer: function () {
    return Customers.find({});
  }
});


/*** E*V*E*N*T*S ***/


Template.customerTable.events({
	"click [data-action='remove']" : function(doc){
		console.log("Destroyed record for " + this.first + " " + this.last + ", id: " + this._id);
		// remove from collection by id
		// var doc = {
		// 	name: this.first + " " + this.last,
		// 	company: this.company,
		// 	type: this.type
		// }
		// return Archives.insert(doc);
    return Customers.remove({_id: this._id});
  }
});