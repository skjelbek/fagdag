App.PartiController = Ember.ObjectController.extend({

    stem: function () {
        this.get("model").stem();
    },
    
    save: function () {
        this.get("store").commit();
    }

});