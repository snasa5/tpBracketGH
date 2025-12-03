
import { describe, it, expect } from '@jest/globals';
import { generateSixDigitId } from '../api/auth/auth.service';

describe('Auth', () => {
  it('generates 6-digit ids', () => {
    const id = (generateSixDigitId as any)();
    expect(id).toMatch(/^\d{6}$/);
  });
});
