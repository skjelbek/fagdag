App.PartierController = Ember.ArrayController.extend({
    
    totaleStemmer: function () {
        return this.reduce(function (previousValue, parti) {
            return previousValue + parti.get("stemmer");
        }, 0);
    }.property("@each.stemmer")
    
});