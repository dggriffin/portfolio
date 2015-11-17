if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
        var repos = Meteor.http.get("https://api.github.com/users/dggriffin/repos", {
            headers: {
                "User-Agent": "dggriffin"
            }
        }).data;

        if(repos.length){
        	Repos.remove({});
        }

        for (repo of repos) {
            let repoDoc = _.pick(repo, "name", "html_url", "description", "url", "events_url", "pushed_at", "updated_at", "created_at");
            repoDoc.events = Meteor.http.get(repoDoc.events_url, {
                headers: {
                    "User-Agent": "dggriffin"
                }
            }).data;

            Repos.insert(repoDoc);
            
        }

    });
}