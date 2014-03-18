window.Trellino.Models.List = Backbone.Model.extend({
  urlRoot: function(){
    "/boards/" + this.escape("board_id") + "/lists"
  },
  
  cards: function(){
    if(!this._cards){
      this._cards = new Trellino.Collections.Cards([], {
        list: this
      });
    }
    return this._cards;
  },
  
  parse: function (jsonResp) {
    if (jsonResp.cards) {
      this.cards().set(jsonResp.cards, {parse: true});
      delete jsonResp.cards;
    }
    return jsonResp;
  }
})