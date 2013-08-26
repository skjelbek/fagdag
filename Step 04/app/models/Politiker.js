App.Politiker = DS.Model.extend({
    navn: DS.attr("string"),
    bilde: DS.attr("string"),
    fodselsAr: DS.attr("number"),
    parti: DS.belongsTo("App.Parti"),
    
    alder: function () {
        return (new Date().getFullYear() - this.get("fodselsAr"));
    }.property("fodselsAr")
});

App.Politiker.FIXTURES =
    [
        {
            id: 1,
            navn: "Jens Stoltenberg",
            fodselsAr: 1959,
            bilde: "content/images/jens.jpg",
            parti: 1
        },
        {
            id: 2,
            navn: "Erna Solberg",
            fodselsAr: 1961,
            bilde: "content/images/erna.jpg",
            parti: 2
        },
        {
            id: 3,
            navn: "Siv Jensen",
            fodselsAr: 1969,
            bilde: "content/images/siv.jpg",
            parti: 3
        },
        {
            id: 4,
            navn: "Knut Arild Hareide",
            fodselsAr: 1972,
            bilde: "content/images/knutarild.jpg",
            parti: 4
        },
        {
            id: 5,
            navn: "Liv Signe Naversete",
            fodselsAr: 1958,
            bilde: "content/images/livsigne.jpg",
            parti: 5
        },
        {
            id: 6,
            navn: "Audun Lysbakken",
            fodselsAr: 1977,
            bilde: "content/images/audun.jpg",
            parti: 6
        },
        {
            id: 7,
            navn: "Trine Skei Grande",
            fodselsAr: 1969,
            bilde: "content/images/trine.jpg",
            parti: 7
        }
    ]