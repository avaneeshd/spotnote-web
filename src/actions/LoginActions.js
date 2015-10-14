import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

let LoginActions = {

  login: function(username, password){
    console.log('Log In');
    let credentials = {'username': username, 'password': password};
    AppDispatcher.handleViewAction({
      actionType:ActionTypes.LOGIN,
      data: credentials
    });
  },

  logout: function(){
    console.log('log Out');
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.LOGOUT
    })
  }
};


export default LoginActions;
