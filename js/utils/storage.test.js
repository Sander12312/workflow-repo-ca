import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getUsername, saveUser } from './storage.js';

const fakeStorage = {};

vi.stubGlobal('localStorage', {
  getItem: (key) => fakeStorage[key] ?? null,
  setItem: (key, value) => {
    fakeStorage[key] = value;
  },
});

describe('getUsername', () => {
  beforeEach(() => {
    for (const key of Object.keys(fakeStorage)) {
      delete fakeStorage[key];
    }
  });

  it('returns the name of a stored user', () => {
    const user = {
      data: {
        name: 'Sander',
      },
    };

    saveUser(user);

    expect(getUsername()).toBe('Sander');
  });

  it('returns null when no user is stored', () => {
    expect(getUsername()).toBe(null);
  });
});
