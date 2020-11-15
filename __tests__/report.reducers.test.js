import * as types from '../src/redux/report/report.types';
import report, * as reducers from '../src/redux/report/report.reducer';
import {expect} from 'chai'

describe('report reducers', ()=>{
    //isReporting
    it('should return initial state', ()=>{
        expect(reducers.isReporting(undefined, {})).equal(false)
    })

    it('should start report', ()=>{
        expect(reducers.isReporting(false, {type: types.REPORT_STARTED,
            payload: null})).equal(true)
    })
    it('should complete report', ()=>{
      expect(reducers.isReporting(false, {type: types.REPORT_COMPLETED,
          payload: null})).equal(false)
    })
    it('should fail report', ()=>{
        expect(reducers.isReporting(false, {type: types.REPORT_FAILED,
            payload: null})).equal(false)
    })

    //errorOnReport 
    it('should return initial state', ()=>{
      expect(reducers.errorOnReport(undefined, {})).equal(null)
    })

    it('should start report', ()=>{
        expect(reducers.errorOnReport(false, {type: types.REPORT_STARTED,
            payload: null})).equal(null)
    })
    it('should complete report', ()=>{
      expect(reducers.errorOnReport(false, {type: types.REPORT_COMPLETED,
          payload: null})).equal(null)
    })
    it('should fail report', ()=>{
        expect(reducers.errorOnReport(false, {type: types.REPORT_FAILED,
            payload: {error: 'error'}})).equal('error')
    })
})