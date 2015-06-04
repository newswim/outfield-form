/***** Form Helpers ****/

Template.customerTable.helpers({
  customer: function () {
    return Customers.find({});
  }
});


/*** E*V*E*N*T*S ***/

Template.customerTable.events({
	"click [data-action='remove']" : function(){
		console.log("Destroyed record for " + this.first + " " + this.last + ", id: " + this._id);
    return Customers.remove({_id: this._id});
  }
});