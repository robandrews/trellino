window.Trellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST["boards/index"],
  
  initialize: function(options){
    this.listenTo(this.collection, "remove", this.render)
  },
  
  events: {
    "click button.delete-board": "removeBoard"
  },
  
  render: function(){
    var renderedContent = this.template({ 
      board: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },
 
  removeBoard: function (event) {
    var id = event.target.id;
    var board = this.collection.getOrFetch(id);
    
    board.destroy({
      success:function(){
        board.lists().remove(board);
      }
    });
  }
})