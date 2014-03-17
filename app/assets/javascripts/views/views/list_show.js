window.Trellino.Views.ListShow = Backbone.View.extend({
  
  template: JST["lists/show"],
  className: "list",
  render: function(){
    var renderedContent = this.template({
      list: this.model
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }  
  
})