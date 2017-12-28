import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params){
    return new Ember.RSVP.Promise(function (resolve, reject) {
          Ember.$.ajax({
                  type: 'GET',
                  url: 'https://api.github.com/users/'+params.username,
                  success: function (data) {
                            console.log(data);
                            resolve(data);
                          },
                  error: function (request, textStatus, error) {
                            console.log(error);
                            reject(error);
                          }
                });
        });

  }
});
