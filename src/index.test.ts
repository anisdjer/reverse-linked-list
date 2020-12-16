import { reverseList } from "./";
describe("Test", () => {
  test("t", () => {
    expect(
      reverseList({
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4
            }
          }
        }
      })
    ).toEqual({
      value: 4,
      next: {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 1
          }
        }
      }
    });
  });
});
