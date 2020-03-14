import { PatentStatusPipe } from './patent-status.pipe';

describe('PatentStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new PatentStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
