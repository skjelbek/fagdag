App.Parti = DS.Model.extend({
    navn: DS.attr("string"),
    stemmer: DS.attr("number"),
    logo: DS.attr("string"),
    leder: DS.belongsTo("App.Politiker"),
    
    stem: function () {
        if (!this.get("isSaving")) {
            this.incrementProperty("stemmer");
        }
    },
    
});


App.Parti.FIXTURES =
    [
        {
            id: 1,
            navn: "Arbeiderpartiet",
            leder: 1,
            logo: "content/images/ap.gif",
            stemmer: 0
        },
        {
            id: 2,
            navn: "Høyre",
            leder: 2,
            logo: "content/images/hoyre.jpg",
            stemmer: 0
        },
        {
            id: 3,
            navn: "Fremskrittspartiet",
            leder: 3,
            logo: "content/images/frp.jpg",
            stemmer: 0
        },
        {
            id: 4,
            navn: "Kristelig Folkeparti",
            leder: 4,
            logo: "content/images/krf.jpg",
            stemmer: 0
        },
        {
            id: 5,
            navn: "Senterpartiet",
            leder: 5,
            logo: "content/images/sp.jpg",
            stemmer: 0
        },
        {
            id: 6,
            navn: "Sosialistisk Venstreparti",
            leder: 6,
            logo: "content/images/sv.jpg",
            stemmer: 0
        },
        {
            id: 7,
            navn: "Venstre",
            leder: 7,
            logo: "content/images/venstre.jpg",
            stemmer: 0
        }
    ]