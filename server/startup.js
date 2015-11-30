if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
        SyncedCron.add({
            name: 'Get new github activity',
            schedule: function(parser) {
                // parser is a later.parse object
                return parser.text('every 10 mins');
            },
            job: function() {
                try {
                    var repos = Meteor.http.get("https://api.github.com/users/dggriffin/repos", {
                        headers: {
                            "User-Agent": "dggriffin"
                        }
                    });
                    Repos.remove({});
                    repos = repos.data;
                    for (repo of repos) {
                        let repoDoc = _.pick(repo, "name", "html_url", "description", "url", "events_url", "pushed_at", "updated_at", "created_at");
                        repoDoc.events = Meteor.http.get(repoDoc.events_url, {
                            headers: {
                                "User-Agent": "dggriffin"
                            }
                        }).data;

                        Repos.insert(repoDoc);
                    }

                } catch (ex) {
                    console.log(ex);
                }
            }
        });
    });
}