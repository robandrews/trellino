window.Trellino.Collections.BoardLists = Backbone.Collection.extend({  
  url: "/boards/" + this.escape("board_id") + "/lists",
  
  model: Trellino.Models.List,
  
  initialize: function (models, options) {
    this.board = options.board;
  }
})

window.Trellino.Collections.boardlists = new Trellino.Collections.BoardLists();