window.Trellino.Models.List = Backbone.Model.extend({
  urlRoot: "/boards/" + this.escape("board_id") + "/lists"
})