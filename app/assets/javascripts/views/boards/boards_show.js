Backbone.CompositeView = Backbone.View.extend({
  addSubView: function (selector, subview) {
    var selectorSubViews = this.subviews()[selector] || (this.subviews()[selector] = []);
    selectorSubViews.push(subview);
    var $selectorEl = this.$(selector);
    $selectorEl.append(subview.$el);
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (selectorSubViews, selector) {
      _(selectorSubViews).each(function (subview) {
        subview.remove();
      });
    });
  },

  removeSubView: function (selector, subview) {
    var selectorSubViews = this.subviews()[selector] || (this.subviews()[selector] = []);
    var subviewIndex = selectorSubViews.indexOf(subview);
    selectorSubViews.splice(subviewIndex, 1);
    subview.remove();
  },

  renderSubViews: function () {
    var view = this;
    _(this.subviews()).each(function (selectorSubViews, selector) {
      var $selectorEl = view.$(selector);
      $selectorEl.empty();
      _(selectorSubViews).each(function (subview) {
        $selectorEl.append(subview.render().$el);
        subview.delegateEvents();
      });
    });
  },

  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }
    return this._subviews;
  }
});

window.Trellino.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],
  
  initialize: function(attribute){
    this.subViews = [];
  },
  
  events: {
    "submit": "addMember",
  },
  
  addMember: function(event){
    event.preventDefault();
    debugger
    $("#add-user")
  },
  
  render: function(){
    var renderedContent = this.template({ 
      lists: this.model.lists(),
      board: this.model,
      members: _([])
    });
    this.$el.html(renderedContent);
    this.renderLists();
    return this;
 },
 
 renderLists: function(){  
   
   this.model.lists().each(function(list){
     var currentList = new Trellino.Views.ListShow({
       model: list
     })
     this.addSubView('#all-lists', currentList.render())
   }, this);
 }
 
})