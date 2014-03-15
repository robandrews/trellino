window.Trellino.Collections.Boards = Backbone.Collection.extend({  
  
  url:"boards",
  model: Trellino.Models.Board,
  
  getOrFetch: function(id){
    
    var boards = this;
    var board = boards.get(id);
    
    if(board){
      board.fetch(); //updates the board
      return board;
    }else{
      board.set("id", id);
      board.fetch({
        success: function(){
          boards.add(board);
        }
      });
     return board;
    } 
  }
  
})

window.Trellino.Collections.boards = new Trellino.Collections.Boards();