App = {
	prettifyDate: function(timestamp){
	  if(!timestamp){
	    return "";
	  }
	  return moment(timestamp).calendar();
	}
};

UI.registerHelper("prettifyDate", function(timestamp) {
  return App.prettifyDate(timestamp);
});