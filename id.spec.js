// id.spec.js

test('Jest is working', () => {
   expect(1).toBe(1);
});

describe('Test Requirements', () => {

  test('returns a random number', () => {
   const mockMath = Object.create(global.Math);
   mockMath.random = jest.fn(() => 0.75);
   global.Math = mockMath;
   const id = getNewId();
   expect(id).toBe(0.75);
  });

});
