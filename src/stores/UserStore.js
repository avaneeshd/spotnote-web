
import AppDispatcher from '../core/AppDispatcher';
import EventEmitter from 'events';
import ActionConstants from '../constants/ActionTypes';
import assign from 'object-assign';
import Parse from 'parse/node';
import localStorage from 'local-storage';

var CHANGE_EVENT = "change";

var UserStore = assign({}, EventEmitter.prototype, {
  user: {},

  login: function(credentials){
    Parse.User.logIn(credentials.username, credentials.password, {
      success: function(u) {
        this.user = u;
        localStorage.set('parse_user_session', this.user.getSessionToken());
        UserStore.emitChange();
      },
      error: function(user, error) {
        console.log("Failed to LogIn: "+ error);
      }
    });
  },

  logout: function(){
    Parse.User.logOut();
    this.user = Parse.User.current();
    localStorage.remove('parse_user_session');
    UserStore.emitChange();
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on( CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentUser: function(){
    return this.user;
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    let action = payload.action;

    switch (action.actionType) {
      case ActionConstants.LOGIN:
        UserStore.login(action.data);
        break;
      case ActionConstants.LOGOUT:
        UserStore.logout()
        break;
    }
    return true;
  })
});

export default UserStore;
