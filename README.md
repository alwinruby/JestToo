# Jest Tests

Our high-level specification for this project is to create a unique ID, although we should break that down into smaller units that we will test.

For our small project we will use the following specifications:

Create a random number

    The number is an integer.
    The number created is within a specified range.
    The number is unique.


1. Jest is a testing suite and has a built-in assertion library.

2. A test is just a function whose arguments define the test.

3. Specifications define what our code should do and are ultimately what we test.


###Project setup

    Create an NPM project: npm init.
    Create id.js and add it to the project’s root.
    Install Jest: npm install jest --D
    Update the package.json test script
