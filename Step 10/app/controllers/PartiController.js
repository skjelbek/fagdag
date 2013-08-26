App.PartiController = Ember.ObjectController.extend({

    needs: "partier",

    stem: function() {
        this.get("model").stem();
    },
    
    stemmeAndel: function () {
        var andelDesimal = (this.get("stemmer") / this.get("controllers.partier").get("totaleStemmer"));
        return andelDesimal * 100;
    }.property("stemmer", "controllers.partier.totaleStemmer"),
    
    histogramHeight: function () {
        return "height: " + this.get("stemmeAndel") + "%";
    }.property("stemmeAndel"),
    
    showHistogram: function () {
        return this.get("controllers.partier").get("totaleStemmer") > 0;
    }.property("controllers.partier.totaleStemmer"),
    
    save: function() {
        this.get("store").commit();
    }
    
});