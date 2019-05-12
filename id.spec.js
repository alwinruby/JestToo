// id.spec.js

function getNewId() {
   return Math.random();
}

describe('Check Jest', () => {
  test('Jest is working', () => {
     expect(1).toBe(1);
  });
});

describe('Test Requirements', () => {

  test('returns a random number', () => {
   const mockMath = Object.create(global.Math);
   mockMath.random = jest.fn(() => 0.75);
   global.Math = mockMath;
   const id = getNewId();
   expect(id).toBe(0.75);
  });

  test('returns an integer', () => {
   const id = getRandomId();
   expect(Number.isInteger(id)).toBe(true);
  });

});
