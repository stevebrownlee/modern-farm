# Modern Farm Management

In this project, you will be practicing the following skills.

1. Declaring variables with `let` and `const`.
1. Writing functions.
1. Function parameters and arguments.
1. Iteration with `for` loops and/or `forEach` array methods.
1. Modular development to enforce the Single Responsibiity Principle to your code.
1. Using `import` and `export` keywords between modules.
1. Conditional logic using `if` and `else`.

## Creating a Planting Plan

There is an existing `plan.js` module in this application that is reponsible for defining four rows of crops to be planted. In each row, there are 10 plots of land. Each one is randomly assigned one of the following types of food to grow.

1. Corn
1. Asparagus
1. Potato
1. Wheat
1. Sunflower
1. Soybean

Examine the `plan.js` module. Then, in the `main.js` module, execute the proper function to generate the plan. Store the output of that function into a variable named `yearlyPlan`.

Remember that to assign what a function returns as a value of a variable, the syntax is...

```js
const appropriatelyNamedVariable = theFunctionThatReturnsAValue()
```

Then use `console.log()` to output the value of `yearlyPlan` to the developer console in Chrome.

## Seed Producing Modules

1. Create a `scripts/seeds` directory. The `scripts` directory already exists, so create the `seeds` sub-directory in it.
1. Create a module for each type of possible plant in the `seeds` directory. For example, one of the types of food you grow is corn. Create a `scripts/seeds/corn.js` module. Make sure that each file uses all lowercase letters for the file name.
1. In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named `createAsparagus`. Same thing for all the others. Use arrow functions. Do not use the `function` keyword.
1. Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.
    1. `type`
    1. `height`
    1. `output`
1. The one exception is corn. The `createCorn` function should return an array with two identical objects in it. Each with the proper keys and values.

### Plant Properties Table

| Plant | Height | Output |
|--|--|--|
| Soybean | 20 | 4 |
| Corn | 180 | 7 |
| Sunflower | 380 | 3 |
| Asparagus | 24 | 8 |
| Wheat | 230 | 6 |
| Potato | 32 | 2 |

## Planting Seeds With Your Tractor

1. Create a `tractor.js` module.
1. In this module