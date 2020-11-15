import * as types from '../src/redux/location/location.types';
import location, * as reducers from '../src/redux/location/location.reducer';
import {expect} from 'chai'

describe('location reducers', ()=>{
    //location
    it('should return initial state', ()=>{
        expect(reducers.location(null, {})).equal(null)
    })

    it('Set initial location', ()=>{
        expect(JSON.stringify(reducers.location(false, {type: types.SET_INITIAL_LOCATION,
            payload: {initLocation: {'latitude': 1, 'longitude': 2}}}))).equal(JSON.stringify({'latitude': 1, 'longitude': 2}))
    })

    // destinationPath
    it('should return initial state', ()=>{
      expect(reducers.destinationPath(null, {})).equal(null)
    })

    it('Set initial destinationPath', ()=>{
        expect(JSON.stringify(reducers.destinationPath(null, {type: types.SET_DESTINATION_PATH_COMPLETED,
            payload: {path: {path: {'A': 1, 'B': 2}, distance: 3, destination: 'B'}}}))).equal(JSON.stringify({path: {'A': 1, 'B': 2}, distance: 3, destination: 'B'}))
    })

    it('Set destination path when failed or started', ()=>{
      expect(reducers.destinationPath(null, {type: types.SET_DESTINATION_PATH_STARTED,
          payload: null})).equal(null)
    })

    it('Set destination path when failed or started', ()=>{
      expect(reducers.destinationPath(null, {type: types.SET_DESTINATION_PATH_FAILED,
          payload: null})).equal(null)
    })
})