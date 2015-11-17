Template.home.onRendered(() => {
    var splashContainer = $('.splash-container');
    splashContainer[0].appendChild(Trianglify({
        cell_size: 155,
        width: 3000,
        height: 1000,
        seed: 'null',
        x_colors: 'BuPu'
    }).canvas());
});

Template.home.helpers({
    repos: function() {
        var repoList = Repos.find({}, {sort: {pushed_at: -1}}).fetch();
        for(repo of repoList) {
            repo.events = repo.events.slice(0,5);
        }
        return repoList;
    },
    bg: function() {
        var validPalettes = ['YlGnBu', 'GnBu', 'PuBu', 'BuPu']
        return Trianglify({
            cell_size: 155,
            width: 400,
            height: 400,
            x_colors: _.sample(validPalettes),
            y_colors: _.sample(validPalettes),
        }).png();
    }
});

Template.home.events({
    'click a.home': function(e) {
        $(".header")[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    },
    'click a.about': function(e) {
        $("div.about")[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    },
    'click a.skills': function(e) {
        $("div.skills")[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    },
    'click a.resume': function(e) {
        $("div.resume")[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start" // or "end"
        });
    },
});