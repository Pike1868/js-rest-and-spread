describe("Problem #1 - filterOutOdds function", function () {
  it("should take out any even numbers passed in as arguments", function () {
    expect(filterOutOdds(1, 2, 3, 4, 5, 6)).toEqual([2, 4, 6]);
  });
});

describe("Problem #2 - findMin function", function () {
  it(" should accept a variable number or arguments and return the smallest number", function () {
    expect(findMin(1, 4, 12, -3)).toEqual(-3);

    expect(findMin(1, -1)).toEqual(-1);
  });
});

describe("Problem #3 - mergeObjects function", function () {
  it("should accept two objects and return a new object which contains all the keys and values of the first object and second object", function () {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
  });

  it(" mergeObects should return an object", function () {
    let result = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

    expect(typeof result).toEqual("object");
  });
});

describe("Problem #4 - doubleAndReturnArgs function", function () {
  it("accepts an array and a variable number of arguments, should return a new array", function () {
    expect(doubleAndReturnArgs([1, 2, 3], 4, 4)).toEqual([1, 2, 3, 8, 8]);
  });

  it("returns an object that is an array", function () {
    let result = doubleAndReturnArgs([2], 10, 4);

    expect(Array.isArray(result)).toEqual(true);
  });
});

describe("Problem #5 - Slice and Dice functions", function () {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("removeRandom should return a new array without modifying the original array", function () {
    expect(removeRandom(items)).not.toBe(items);
  });

  it("extend should return a new array with every item in array1 and array2", function () {
    array1 = [1, 2, 3];
    array2 = [9, 7, 8];
    expect(extend(array1, array2)).toEqual([1, 2, 3, 9, 7, 8]);
  });

  it("addKey should return a new object with all the keys and values from obj and a new key/value pair", function () {
    let example = { name: "Luis", age: 29 };

    expect(addKeyVal(example, "gender", "male")).toEqual({
      name: "Luis",
      age: 29,
      gender: "male",
    });
  });

  it("removeKey should return a new object with a key removed", function () {
    let exObj = { name: "Luis", age: 29, title: "engineer" };

    expect(removeKey(exObj, "age")).not.toBe(exObj);

    expect(removeKey(exObj, "age")).toEqual({
      name: "Luis",
      title: "engineer",
    });
  });

  it("combine should combine two objects and return a new object", function () {
    let obj1 = { firstname: "Luis" };
    let obj2 = { lastname: "Mendoza" };

    expect(combine(obj1, obj2)).toEqual({
      firstname: "Luis",
      lastname: "Mendoza",
    });
  });

  it("update should return a new object with a modified key and value", function () {
    let exObj = { name: "Luis", age: 29, title: "engineer" };

    expect(update(exObj, "title", "Software Engineer")).toEqual({
      name: "Luis",
      age: 29,
      title: "Software Engineer",
    });
  });
});
