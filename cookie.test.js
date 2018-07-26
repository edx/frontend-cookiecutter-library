import cookie from './cookie';

describe('cookies', () => {
  it('gonna cookie', () => {
    expect(cookie()).toEqual(expect.stringMatching('cookie'));
  });
});
