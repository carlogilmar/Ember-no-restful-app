import DS from 'ember-data';
import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';

export default DS.JSONSerializer.extend({
  keyForAttibute(key){
    return Ember.String.decamelize(key);
  }
});
