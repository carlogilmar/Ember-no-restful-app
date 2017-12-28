import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return Ember.$.ajax({
      method: 'GET',
      url: 'http://emailerv2.modulusuno.com/show',
    }).then((info)=>{
      console.log("se hzo!");
    });
  }
});
