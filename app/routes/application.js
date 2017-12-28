import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findRecord('user', 'carlogilmar');
  },
  actions:{
    findAdminByUser:function(){
      var username = this.get('controller').get('username');
      console.log(username);
      this.get('controller').set('username', "");
      this.transitionTo('find', username);
    }
  }
});
