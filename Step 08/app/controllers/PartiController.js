App.PartiController = Ember.ObjectController.extend({

    stem: function () {
        this.get("model").stem();
        this.get("store").commit();
    },

});