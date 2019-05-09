// id.spec.js
// test('Jest is working', () => {
//    expect(1).toBe(1);
// });

describe('Jest Basics', () => {
   test('Jest is working', () => {
      expect(1).toBe(1);
   });
});

function getNewId() {
   return Math.random()
}

describe('Requirements', () => {

  // test('returns a random number', () => {
  //   const mockMath = Object.create(global.Math);
  //   mockMath.random = jest.fn(() => 0.75);
  //   global.Math = mockMath;
  //   const id = getNewId();
  //   expect(id).toBe(0.75);
  // });

  test('returns a random number', () => {
   const originalMath = Object.create(global.Math);
   const mockMath = Object.create(global.Math);
   mockMath.random = () => 0.75;
   global.Math = mockMath;
   const id = getNewId();
   expect(id).toBe(0.75);
   global.Math = originalMath;
  });

  // test('returns an integer', () => {
  //  const id = getRandomId();
  //  expect(Number.isInteger(id)).toBe(true);
  // });
  test('returns an integer', () => {
   const id = getRandomId();
   expect(id).toBe(Math.floor(id));
  });

});
