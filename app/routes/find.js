import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params){
    console.log(params);
    return Ember.$.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/'+params.username,
    }).then((info)=>{
      console.log("se hzo!");
    });
  }
});
