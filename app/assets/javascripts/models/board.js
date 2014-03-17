window.Trellino.Models.Board = Backbone.Model.extend({
  urlRoot:"/boards",
  
  
  //return the private array _lists, or instantiate if not present
  
  lists: function(){
    if(!this._lists){
      this._lists = new Trellino.Collections.BoardLists([], {
        board: this
      });
    }
    return this._lists;
  },
  
  parse: function (jsonResp) {
    

    if (jsonResp.lists) {
      this.lists().set(jsonResp.lists);
      delete jsonResp.lists;
    }
    return jsonResp;
  }
  
})
