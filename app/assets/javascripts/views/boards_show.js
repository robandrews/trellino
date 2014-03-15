window.Trellino.Views.BoardsShow = Backbone.View.extend({
  template: JST["boards/show"],
  
  initialize: function(attribute){
    this.subViews = [];
  },
  
  render: function(){
    var renderedContent = this.template({ board: this.model, lists: this.model.lists() });
    this.$el.html(renderedContent);
    var topView = this;
    
    this.collection.each(function(list){
      var view = new Trellino.Views.ListShow({model: list});
      topView.push(view);
      topView.$el.append(view.render().$el)
    });
    return this;
  }
   
})