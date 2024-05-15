import { OffsetByBusinessDaysPipe } from './offset-by-business-days.pipe';

describe('OffsetByBusinessDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new OffsetByBusinessDaysPipe();
    expect(pipe).toBeTruthy();
  });
});
