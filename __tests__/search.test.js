import * as types from '../src/redux/search/search.types';
import * as actions from '../src/redux/search/search.actions';

describe('search Action', () => {
  it('should start searching places', () => {
    const expectedAction = {
      type: types.SEARCH_PLACES_STARTED,
      payload: {
        query: "Parqueo"
      }
    }
    expect(actions.startSearchingPlaces("Parqueo")).toEqual(expectedAction)
  });

  it('should complete searching places', () => {
    const expectedAction = {
      type: types.SEARCH_PLACES_COMPLETED,
      payload: { 
        entities: {
          1: "place 1",
          2: "place 2",
        },
        order: [1,2] 
      }
    }
    expect(actions.completeSearchingPlaces({
      1: "place 1",
      2: "place 2",
    }, [1,2])).toEqual(expectedAction)
  });

  it('should fail searching places', () => {
    const expectedAction = {
      type: types.SEARCH_PLACES_FAILED,
      payload: { error:"Couldn't reach server"},
    }
    expect(actions.failSearchingPlaces("Couldn't reach server")).toEqual(expectedAction)
  });
})