window.Trellino.Routers.AppRouter = Backbone.Router.extend({
  
  routes: { 
    "":"boardsIndex",
    "boards/new":"boardsNew",
    "boards/:id":"boardsShow"
  },

  boardsIndex: function(){
    var that = this
    var boardIndex = new Trellino.Views.BoardsIndex({
      collection: Trellino.Collections.boards
    });
   
    Trellino.Collections.boards.fetch({
      success: function(){
        that._swapView(boardIndex);
      }
    });
    
  },
  
  boardsNew: function () {
    var newBoard = new Trellino.Views.BoardsNew();
    this._swapView(newBoard);
  },
  
  boardsShow: function(id){
    
    var board = Trellino.Collections.boards.getOrFetch(id);
    
    var showBoard = new Trellino.Views.BoardsShow({
      model: board,
      collection: board.lists()
    });
    this._swapView(showBoard);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    $("body").html(view.render().$el);
  } 
  
})