import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
 actions: {
   storyFormShow() {
     this.set('addNewStory', true);
   },

   saveStory() {
     var params = {
       headline: this.get('headline') ? this.get('headline') : "",
       author: this.get('author') ? this.get('author') : "",
       content: this.get('content') ? this.get('content') : "",
       image: this.get('image') ? this.get('image') : "",
     };
     this.set('addNewStory', false);
     this.sendAction('saveStory', params);
   }
 }
});
