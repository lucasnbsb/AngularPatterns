import { WithLoadingPipePipe } from './with-loading-pipe.pipe';

describe('WithLoadingPipePipe', () => {
  it('create an instance', () => {
    const pipe = new WithLoadingPipePipe();
    expect(pipe).toBeTruthy();
  });
});
