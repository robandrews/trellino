window.Trellino.Routers.AppRouter = Backbone.Router.extend({
  
  routes: { 
    "":"boardsIndex",
    "boards/new":"boardsNew",
    "boards/:id":"boardsShow",
    "boards/:id/lists/new":"listsNew"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
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
  
  listsNew: function(id){
    var board = Trellino.Collections.boards.getOrFetch(id);
    
    var newList = new Trellino.Views.NewList({
      model: board
    });
    
    this._swapView(newList);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    this.$rootEl.html(view.render().$el);
  }
  
})