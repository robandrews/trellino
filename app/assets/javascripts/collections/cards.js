window.Trellino.Collections.Cards = Backbone.Collection.extend({
  url: "cards",
  model: Trellino.Models.Card,
  initialize: function(data, options){
    this.list = options.list;
  }
})