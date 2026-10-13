import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true when href matches currentPath exactly', () => {
    expect(isActivePath('/login/', '/login/')).toBe(true);
  });
  it('returns true for the home page paths', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
  it('returns true when currentPath includes href', () => {
    expect(isActivePath('/venue/', '/venue/123')).toBe(true);
  });
  it('returns false when href does not match currentPath', () => {
    expect(isActivePath('/login/', '/register/')).toBe(false);
  });
});
