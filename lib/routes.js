Router.route('/', {
    template: 'home',
    name: 'home',
    subscriptions : function(){
    	return [Meteor.subscribe('repos')];
    }
});