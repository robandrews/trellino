window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trellino.Routers.AppRouter({
       $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

$(Trellino.initialize);
