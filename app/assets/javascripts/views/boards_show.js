window.Trellino.Views.BoardsShow = Backbone.View.extend({
  template: JST["boards/show"],
  
  render: function(){
    var renderedContent = this.template({ board: this.model, lists: this.model.lists() });
    this.$el.html(renderedContent);
    return this;
  }
   
})