import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted', params.id);
    })
  },
  renderTemplate: function (controller) {
    this.render('todo/index', {
      controller: controller
    })
  }
});
