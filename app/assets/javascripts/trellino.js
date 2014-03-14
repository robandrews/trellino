window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trellino.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(Trellino.initialize);
