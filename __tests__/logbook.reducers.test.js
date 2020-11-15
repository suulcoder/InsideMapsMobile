import * as types from '../src/redux/logbook/logbook.types';
import logbook, * as reducers from '../src/redux/logbook/logbook.reducer';
import {expect} from 'chai'

describe('logbook reducers', ()=>{
    //byId
    it('should return initial state', ()=>{
        expect(reducers.byId(JSON.stringify({}), {})).equal(JSON.stringify({}))
    })

    //order
    it('Set initial byId', ()=>{
        expect(JSON.stringify(reducers.order({}, {type: types.LOGBOOK_FETCHING_COMPLETED,
            payload: {entities: {1: 'myentity', 2: 'entity2'}, order: [1,2]}}))).equal(JSON.stringify([1,2]))
    })

    //isFetching
    it('should return initial state', ()=>{
      expect(reducers.IsFetching(false, {})).equal(false)
    })
    it('should mock fetching started', ()=>{
      expect(reducers.IsFetching(false, { type: types.LOGBOOK_FETCHING_STARTED, payload: null})).equal(true)})

    it('should mock fetching completed', ()=>{
      expect(reducers.IsFetching(false, { type: types.LOGBOOK_FETCHING_COMPLETED})).equal(false)
    })
    it('should mock fetching failed', ()=>{
      expect(reducers.IsFetching(false, { type: types.LOGBOOK_FETCHING_FAILED})).equal(false)
    })

    //error
    it('should start fetching logboook', ()=>{
      expect(reducers.error(null, {type: types.LOGBOOK_FETCHING_STARTED,
          payload: null })).equal(null)
    })
    it('should complete fetching logbook', ()=>{
    expect(reducers.error(null, {type: types.LOGBOOK_FETCHING_COMPLETED,
        payload: null })).equal(null)
    })
    it('should handle logbook fetch failed', ()=>{
        expect(reducers.error(null, {type: types.LOGBOOK_FETCHING_FAILED,
            payload: { error:'server error'}})).equal('server error')
    })
})