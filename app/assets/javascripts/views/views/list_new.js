window.Trellino.Views.NewList = Backbone.View.extend({
  
  template: JST["lists/new"],
  
  events: {
    "submit": "addList"
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  addList: function(event){
    event.preventDefault();
    var that = this;
    var params = $(event.target).serializeJSON()['list']
    var newList = new Trellino.Models.List(params);
    newList.set("board_id", this.model.id);
    newList.set("rank", this.model.lists().length + 1);
    newList.save(null, {
      success: function(list){
        that.model.lists().add(list);
        Backbone.history.navigate("/boards/" + that.model.id, { trigger: true });
      },
    });
  }
  
})