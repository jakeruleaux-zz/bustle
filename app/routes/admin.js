import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    },
    delete(story) {
        if (confirm('Are you sure you want to delete this story?')) {
          story.destroyRecord();
          this.transitionTo('admin');
          }
    }
  }
});
