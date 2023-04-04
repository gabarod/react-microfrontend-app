import { bemClassNames } from './bemClassNames';

describe("bemClassNames", () => {
    test("returns object with correct class names", () => {
      const result = bemClassNames("myBlock", ["element1", "element2"]);
  
      expect(result).toEqual({
        element1: ".myBlock__element1",
        element2: ".myBlock__element2",
      });
    });
  });
