App.Router.map(function() {
    this.resource("partier");
    this.resource("politikere");
});

App.PartierRoute = Ember.Route.extend({
    model: function () {
        return App.Parti.find();
    }
});

App.PolitikereRoute = Ember.Route.extend({
    model: function () {
        return App.Politiker.find();
    }
});

