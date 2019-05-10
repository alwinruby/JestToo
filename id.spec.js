// id.spec.js

function getNewId() {
   return Math.random()
}

function getRandomId(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const currentIds = [1, 3, 2, 4];

describe('Jest Basics', () => {
   test('Jest is working', () => {
      expect(1).toBe(1);
   });
});

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


  test('returns an integer', () => {
   const id = getRandomId();
   expect(id).toBe(Math.floor(id));
  });

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
