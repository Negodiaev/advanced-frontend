import { classNames } from './classNames';

describe('classNames', () => {
  test('with the only first param', () => {
    expect(classNames('some-class')).toBe('some-class');
  });

  test('with additional classes', () => {
    const expected = 'some-class class-1 class-2';
    expect(classNames('some-class', {}, ['class-1', 'class-2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'some-class class-1 class-2 hovered scrollable';
    expect(classNames('some-class', { hovered: true, scrollable: true }, ['class-1', 'class-2'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'some-class class-1 class-2 hovered';
    expect(classNames('some-class', { hovered: true, scrollable: false }, ['class-1', 'class-2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'some-class class-1 class-2 hovered';
    expect(classNames('some-class', { hovered: true, scrollable: undefined }, ['class-1', 'class-2'])).toBe(expected);
  });
});
