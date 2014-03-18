window.Trellino.Views.ListShow = Backbone.View.extend({
  
  template: JST["lists/show"],
  className: "list",
  render: function(){
    var renderedContent = this.template({
      list: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  events: {
    "click .delete-list":"deleteList"  
  },
  
  deleteList: function(event){
    event.preventDefault();
    var id = event.target.id;
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