import * as types from '../src/redux/logbook/logbook.types';
import * as actions from '../src/redux/logbook/logbook.actions';

describe('logbook Action', () => {
  it('should start fetching logbook', () => {
    const expectedAction = {
      type: types.LOGBOOK_FETCHING_STARTED,
    }
    expect(actions.startFetchingLogbook()).toEqual(expectedAction)
  });

  it('should complete fetching logbook', () => {
    const expectedAction = {
      type: types.LOGBOOK_FETCHING_COMPLETED,
      payload: { 
        entities: {
          1: "record 1",
          2: "record 2",
        },
        order: [1,2] 
      }
    }
    expect(actions.completeFetchingLogbook( {
      1: "record 1",
      2: "record 2",
    }, [1,2])).toEqual(expectedAction)
  });

  it('should fail fetching logbook', () => {
    const expectedAction = {
      type: types.LOGBOOK_FETCHING_FAILED,
      payload: { error:"Couldn't reach server"},
    }
    expect(actions.failFetchingLogbook("Couldn't reach server")).toEqual(expectedAction)
  });
})