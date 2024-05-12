import { PaginateArrayPipe } from './paginate-array.pipe';

describe('PaginateArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new PaginateArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
