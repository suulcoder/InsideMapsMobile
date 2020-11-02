import * as types from '../src/redux/report/report.types';
import * as actions from '../src/redux/report/report.actions';

describe('report Action', () => {
  it('should start generating report', () => {
    const expectedAction = {
      type: types.REPORT_STARTED,
      payload: {
        description: "Mala atención"
      }
    }
    expect(actions.startReport("Mala atención")).toEqual(expectedAction)
  });

  it('should complete generating report', () => {
    const expectedAction = {
      type: types.REPORT_COMPLETED,
    }
    expect(actions.completeReport()).toEqual(expectedAction)
  });

  it('should fail generating report', () => {
    const expectedAction = {
      type: types.REPORT_FAILED,
      payload: { error:"Couldn't reach server"},
    }
    expect(actions.failReport("Couldn't reach server")).toEqual(expectedAction)
  });
})