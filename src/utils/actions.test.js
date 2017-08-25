import { makeActionCreator } from './actions';

describe('makeActionCreator', () => {
  const action = 'DO_THING';

  test('it outputs an action with the specified type', () => {
    expect(makeActionCreator(action)(action).type).toBe(action);
  });

  describe('parameters', () => {
    test('it maps a single parameter to a property in the payload', () => {
      expect(makeActionCreator(action, 'count')(2).payload).toEqual({
        count: 2,
      });
    });

    test('it maps multiple parameters to properties in the payload', () => {
      expect(makeActionCreator(action, 'count', 'name', 'age')(2, 'andy', 21).payload)
        .toEqual({
          count: 2,
          name: 'andy',
          age: 21,
        });
    });
  });
});
