if (Meteor.isServer) {
	    Meteor.publish("repos", function() {
        return Repos.find();
    });
}