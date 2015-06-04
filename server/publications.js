Meteor.publish("allCustomers", function() {
  return Customers.find({});
});

Meteor.publish("allArchives", function() {
  return Archives.find({});
});

// Meteor.publish("allImages", function() {
//   return Images.find({});
// });