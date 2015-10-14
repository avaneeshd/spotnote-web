
import AppDispatcher from '../core/AppDispatcher';
import EventEmitter from 'events';
import ActionConstants from '../constants/ActionTypes';
import assign from 'object-assign';
import Parse from 'parse/node';

var CHANGE_EVENT = "change";

var spotnotes = [];
var SpotNoteStore = assign({}, EventEmitter.prototype, {
  currentSpotNote:null,

  initialize(data){
    console.log("Initialize store");
    let SpotNote = Parse.Object.extend("SpotNote");
    let query = new Parse.Query(SpotNote);
    query.equalTo('type', data.type);
    query.include('createdBy');
    query.find({
      success: function(sn){
        spotnotes = sn;
        spotnotes = spotnotes.map(function(parseObj, index){
          return{
            img: parseObj.get('Image')? parseObj.get('Image').url() : '',
            title: parseObj.get('title'),
            note: parseObj.get('note'),
            location: parseObj.get('locationName'),
            tags: parseObj.get('tags'),
            createdBy: parseObj.get("createdBy").get('name'),
            createdByImage: parseObj.get("createdBy").get('profilePic')?  parseObj.get("createdBy").get('profilePic').url(): '',
            key: parseObj.get("id")
          }
        });
        SpotNoteStore.emitChange();
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  },

  getAll: function(){
    return spotnotes;
  },

  getCurrentSpotNote:function(){
    return this.currentSpotNote;
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

  dispatcherIndex: AppDispatcher.register(function(payload){
    let action = payload.action;

    switch (action.actionType) {
      case ActionConstants.SPOTNOTE_CREATE:
            SpotNoteStore.emitChange();
            break;
      case ActionConstants.SPOTNOTE_UPDATE:
            SpotNoteStore.emitChange();
            break;
      case ActionConstants.FETCH_SPOTNOTE:
            SpotNoteStore.initialize(payload.action.data);
            break;
      case ActionConstants.SHOW_DETAILS:
            SpotNoteStore.currentSpotNote = action.data;
            SpotNoteStore.emitChange();
            break;
    }
    return true;
  })
});

export default SpotNoteStore;
