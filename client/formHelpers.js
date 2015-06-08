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
		// var self = this;
		// var doc = {
		// 	name: self.first + " " + self.last,
		// 	company: self.company,
		// 	type: self.type
		// }
		// return Archives.insert(doc);
    return Customers.remove({_id: this._id});
  },
	"click [data-action='edit']" : function(doc){
		console.log("Editing " + this._id);
		Session.set("editingCustomer", true);
  }

});