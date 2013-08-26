App.Router.map(function () {
    this.resource("partier", function() {
        this.resource("parti", { path: "/:parti_id" });
    });
    this.resource("politikere", function () {
        this.resource("politiker", { path: "/:politiker_id" });
    });
    this.resource("resultat");
});

App.PartierRoute = Ember.Route.extend({
    model: function () {
        return App.Parti.find();
    }
});

App.PartiRoute = Ember.Route.extend({
    model: function (params) {
        return App.Parti.find(params.parti_id);
    }
});

App.PolitikereRoute = Ember.Route.extend({
    model: function() {
        return App.Politiker.find();
    }
});

App.PolitikerRoute = Ember.Route.extend({    
    model: function(params) {
        return App.Politiker.find(params.politiker_id);
    }
});

App.ResultatRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set("model", model);
        this.controllerFor("partier").set("model", model);
        controller.set("controllers.partier", this.controllerFor("partier"));
    },
    model: function() {
        return App.Parti.find();
    }
});