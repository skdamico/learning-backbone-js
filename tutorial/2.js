(function($) {


  var ListView = Backbone.View.extend({
    el: $('body'),

    events: {
      'click button#add': 'addItem'
    },
    initialize: function() {
      _.bindAll(this, 'render', 'addItem');

      this.counter = 0; // total number of items added so far
      this.render();
    },

    render: function() {
      $(this.el).append('<button id="add">Add list item</button');
      $(this.el).append('<ul></ul>');
    },

    addItem: function() {
      this.counter++;
      $('ul', this.el).append('<li>hello world'+ this.counter + '</li>');
    }

  });

  var listview = new ListView();
})(jQuery);
