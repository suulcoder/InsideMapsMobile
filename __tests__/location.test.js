import * as types from '../src/redux/location/location.types';
import * as actions from '../src/redux/location/location.actions';

describe('location Action', () => {
  it('should set initial location', () => {
    const expectedAction = {
      type: types.SET_INITIAL_LOCATION,
      payload: {
        initLocation: {
          latitude: "-25.36456456",
          longitude: "-25.36456456"
        }
      }
    }
    expect(actions.setInitialLocation(
      {
        latitude: "-25.36456456",
        longitude: "-25.36456456"
      })).toEqual(expectedAction)
  });

  it('should start setting destination path', () => {
    const expectedAction = {
      type: types.SET_DESTINATION_PATH_STARTED,
      payload: {
        endNode: 10,
        name: "Mac"
      }
    }
    expect(actions.startSettingDestinationPath(10, "Mac")).toEqual(expectedAction)
  });

  it('should complete setting destination path', () => {
    const expectedAction = {
      type: types.SET_DESTINATION_PATH_COMPLETED,
      payload: {
        path: {
          1: "node 1",
          2: "node 2",
        }
      }
    }
    expect(actions.completeSettingDestinationPath({ 
      1: "node 1",
      2: "node 2",
    })).toEqual(expectedAction)
  });

  it('should fail setting destination path', () => {
    const expectedAction = {
      type: types.SET_DESTINATION_PATH_FAILED,
      payload: { error:"Couldn't set destination"},
    }
    expect(actions.failSettingDestinationPath("Couldn't set destination")).toEqual(expectedAction)
  });

  it('should delete current Node', () => {
    const expectedAction = {
      type: types.CURRENT_NODE_DELETED,
    }
    expect(actions.deleteCurrentNode()).toEqual(expectedAction)
  });
})