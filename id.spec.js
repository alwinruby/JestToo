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

// function getRandomId() {
//    return Math.floor(Math.random()); // convert to integer
// }

function getRandomId(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

describe('Requirements', () => {

  test('returns a random number', () => {
     jest.spyOn(Math, 'floor');
     const mockMath = Object.create(global.Math);
     const originalMath = Object.create(global.Math);
     mockMath.random = () => 0.75;
     global.Math = mockMath;
     const id = getNewId(10, 100);
     expect(id).toBe(0.75);
     global.Math = originalMath;
  });

  // test('returns a random number', () => {
  //  const originalMath = Object.create(global.Math);
  //  const mockMath = Object.create(global.Math);
  //  mockMath.random = () => 0.75;
  //  global.Math = mockMath;
  //  const id = getNewId();
  //  expect(id).toBe(0.75);
  //  global.Math = originalMath;
  // });

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

  // test('generates a number within a specified range', () => {
  //  const id = getRandomId(10, 100);
  //  expect(id).toBeLessThanOrEqual(100);
  //  expect(id).toBeGreaterThanOrEqual(10);
  // });

  // test('generates a number within a defined range', () => {
  //  for (let i = 0; i < 100; i ++) {
  //     const id = getRandomId(10, 100);
  //
  //     expect(id).toBeLessThanOrEqual(100);
  //     expect(id).toBeGreaterThanOrEqual(10);
  //     expect(id).not.toBeLessThan(10);
  //     expect(id).not.toBeGreaterThan(100);
  //  }
  // });
  test('generates a number within a defined range', () => {
   const min = 10;
   const max = 100;
   const range = [];
   for (let i = min; i < max+1; i ++) {
     range.push(i);
   }
   for (let i = 0; i < 100; i ++) {
      const id = getRandomId(min, max);
      expect(range).toContain(id);
   }
  });

  test('generates a unique number', () => {
   const id = getRandomId();
   const index = currentIds.indexOf(id);
   expect(index).toBe(-1);
  });

});
