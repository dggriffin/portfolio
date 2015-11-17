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