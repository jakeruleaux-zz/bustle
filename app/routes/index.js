import Ember from 'ember';

var stories = [{
  id: 1,
  headline: "News",
  author: "Bob Marley",
  story: "Stuff and stuff",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiciSwRC-sWCd5IzkUO_DppA5zKf0rTdwXErmlWeHs_q1demwCfw"
}, {
  id: 2,
  headline: "Shocking Celebrity dating list! You'll never guess # 5!",
  author: "Jow Schmow",
  story: "eoifjEfpejfpWIOFjepojwepojewpwfojewpofj",
  image: "http://www.slate.com/content/dam/slate/archive/2003/09/1_123125_122958_2076257_2088326_030925_joe_schmo.jpg.CROP.promo-mediumlarge.jpg"
}];

export default Ember.Route.extend({
  model() {
    return stories;
  }
});
