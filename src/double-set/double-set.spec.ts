import { DoubleSet } from "./double-set";

describe("DoubleSet", () => {
  it("Constructs Correctly", () => {
    const map = {
      1: 1,
      2: 1,
      3: 2,
    };
    const set = new DoubleSet(map);
    expect(set.getData()).toEqual(map);
  });

  describe("AllKeys", () => {
    it("Happy Path", () => {
      const map1 = {};
      map1[-4] = 2;
      map1[2] = 1;
      map1[1] = 1;
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[-3] = 2;
      map2[-10] = 1;
      map2[10] = 1;
      const s2 = new DoubleSet(map2);
      const expected = [-10, -4, -3, 1, 2, 10].sort();
      const actual = DoubleSet.getAllKeys([s1, s2]).sort();
      expect(actual).toEqual(expected);
    });

    it("Duplicates", () => {
      const map1 = {};
      map1[1] = 2;
      map1[2] = 1;
      map1[3] = 1;
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[1] = 2;
      map2[2] = 1;
      map2[3] = 1;
      const s2 = new DoubleSet(map2);
      const expected = [1, 2, 3].sort();
      const actual = DoubleSet.getAllKeys([s1, s2]).sort();
      expect(actual).toEqual(expected);
    });

    it("Empty Set", () => {
      const map1 = {};
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[1] = 2;
      map2[2] = 1;
      map2[3] = 1;
      const s2 = new DoubleSet(map2);
      const expected = [1, 2, 3].sort();
      const actual = DoubleSet.getAllKeys([s1, s2]).sort();
      expect(actual).toEqual(expected);
    });
  });

  describe("Subtract", () => {
    it("Happy Path", () => {
      const map1 = {};
      map1[-10] = 2;
      map1[0] = 1;
      map1[10] = 1;
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[-10] = 1;
      map2[0] = 1;
      const s2 = new DoubleSet(map2);
      const expected = {};
      expected[-10] = 1;
      expected[10] = 1;
      s1.subtract(s2);
      expect(s1.getData()).toEqual(expected);
    });

    it("Nothing in Common", () => {
      const map1 = {};
      map1[-1] = 1;
      map1[-2] = 2;
      map1[-3] = 2;
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[1] = 1;
      map2[2] = 1;
      map2[3] = 1;
      const s2 = new DoubleSet(map2);
      s1.subtract(s2);
      expect(s1.getData()).toEqual(map1);
    });

    it("Going into Negatives", () => {
      const map1 = {
        1: 1,
        2: 2,
        3: 1,
      };
      const s1 = new DoubleSet(map1);
      const map2 = {
        1: 1,
        2: 2,
      };
      const s2 = new DoubleSet(map2);
      s1.subtract(s2);
      expect(s1.getData()).toEqual({ 3: 1 });
    });
  });

  describe("Add", () => {
    it("Happy Path", () => {
      const map1 = {};
      map1[10] = 1;
      map1[-10] = 1;
      const s1 = new DoubleSet(map1);
      const map2 = {};
      map2[10] = 1;
      map2[0] = 1;
      const s2 = new DoubleSet(map2);
      s1.sum(s2);
      const expected = {};
      expected[10] = 2;
      expected[0] = 1;
      expected[-10] = 1;
      expect(s1.getData()).toEqual(expected);
    });

    it("Nothing in Common", () => {
      const map1 = {
        1: 1,
        2: 2,
        3: 2,
      };
      const s1 = new DoubleSet(map1);
      const map2 = {
        4: 1,
        5: 1,
        6: 2,
      };
      const s2 = new DoubleSet(map2);
      s1.sum(s2);
      expect(s1.getData()).toEqual({
        ...map1,
        ...map2,
      });
    });

    it("Going over Two", () => {
      const map1 = {
        1: 2,
        2: 2,
        3: 1,
      };
      const s1 = new DoubleSet(map1);
      const map2 = {
        1: 2,
        2: 1,
        3: 1,
      };
      const s2 = new DoubleSet(map2);
      s1.sum(s2);
      expect(s1.getData()).toEqual({
        1: 2,
        2: 2,
        3: 2,
      });
    });
  });
});
