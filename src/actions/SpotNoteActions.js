
import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

let SpotNoteActions = {

  fetch: function(){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.FETCH_SPOTNOTE,
      data: { type: 'public' }
    })
  },

  create: function(){

  },

  delete: function(){

  },

  update: function(){

  },

  showDetails: function(spotnote){
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.SHOW_DETAILS,
      data: spotnote
    })
  }

}

export default SpotNoteActions;
