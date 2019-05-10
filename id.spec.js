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

function getRandomId() {
   return Math.floor(Math.random()); // convert to integer
}

describe('Requirements', () => {

  test('returns a random number', () => {
   const originalMath = Object.create(global.Math);
   const mockMath = Object.create(global.Math);
   mockMath.random = () => 0.75;
   global.Math = mockMath;
   const id = getNewId();
   expect(id).toBe(0.75);
   global.Math = originalMath;
  });

  // test('returns a random number2', () => {
  //  jest.spyOn(Math, 'floor'); // <--------------------changed
  //  const mockMath = Object.create(global.Math);
  //  const globalMath = Object.create(global.Math);
  //  mockMath.random = () => 0.75;
  //  global.Math = mockMath;
  //  const id = getNewId();
  //  getNewId(); //<------------------------------------changed
  //  expect(Math.floor).toHaveBeenCalledWith(0.75); //<-changed
  //  global.Math = globalMath;
  // });

  test('returns an integer', () => {
   const id = getRandomId();
   expect(id).toBe(Math.floor(id));
  });

  test('generates a number within a specified range', () => {
   const id = getRandomId(10, 100);
   expect(id).toBeLessThanOrEqual(100);
   expect(id).toBeGreaterThanOrEqual(10);
});

});
