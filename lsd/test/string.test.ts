import { it, expect } from 'vitest';
import FMock from '../src/index';
import { STRING_MAX_LEN, STRING_MIN_LEN } from '../src/utils/const';
const Mock = FMock.mock;

// function type
it('string type', () => {
  expect(Mock('@string')).toBeTypeOf('string');
});

// test params
it('string params', () => {
  const str1 = Mock('@string');
  expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
  expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);

  const str2 = Mock('@string|min=5');
  expect(str2.length).toBeGreaterThanOrEqual(5);

  const str3 = Mock('@string|min=10&max=40');
  expect(str3.length).toBeGreaterThanOrEqual(10);
  expect(str3.length).toBeLessThanOrEqual(40);

  const res4 = Mock('@string|min=10&max=40&len=33');
  expect(res4.length).toBe(33);
});

// test wrong params
it('string wrong params', () => {
  const str1 = Mock('@string|min=asdfa&max=esifen');
  expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
  expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
});
