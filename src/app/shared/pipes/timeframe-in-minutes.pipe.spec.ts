import { TimeframeInMinutesPipe } from './timeframe-in-minutes.pipe';

describe('TimeframeInMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeframeInMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
