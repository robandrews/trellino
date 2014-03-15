window.Trellino.Collections.Lists = Backbone.Collection.extend({  
  url: "/boards/" + this.escape("board_id") + "/lists"
})

window.Trellino.Collections.lists = new Trellino.Collections.Lists();