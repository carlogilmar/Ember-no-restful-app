import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(){
    return Ember.$.ajax({
      method: 'GET',
      url: 'http://emailerv2.modulusuno.com/show',
    }).then((info)=>{
      console.log("Respuesta");
      console.log(info);
    });
  }
});
