window.Trellino.Views.BoardsNew = Backbone.View.extend({
  template: JST["boards/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },
  
  submit: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["board"];
    var newBoard = new Trellino.Models.Board(params);
    
    newBoard.save({}, {
      success: function (board) {
        Trellino.Collections.boards.add(newBoard);
        Backbone.history.navigate("/boards/" + board.id, { trigger: true });
      }
    });
    
  }
});
