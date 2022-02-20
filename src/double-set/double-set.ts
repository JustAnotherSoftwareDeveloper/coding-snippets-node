/**
 * Note: If I were designing this class myself I would make everything immutable. That is, add and subtract operations return a new doubleset
 * However, there is language in the problem that seems to indicate that we want to modify the objects themselves instead of create new ones.
 */
export class DoubleSet {
  private internalMap: { [key: number]: number } = {};

  constructor(data: { [key: number]: number }) {
    //Copies data in
    this.internalMap = JSON.parse(JSON.stringify(data));
  }

  public sum(toSum: DoubleSet) {
    const newMap = {};
    const allKeys = DoubleSet.getAllKeys([this, toSum]);
    for (const key of allKeys) {
      const newVal = (this.get(key) ?? 0) + (toSum.get(key) ?? 0);
      newMap[key] = Math.min(2, newVal);
    }
    this.internalMap = newMap;
  }

  public get(n: number) {
    return this.internalMap[n];
  }

  public getData() {
    return JSON.parse(JSON.stringify(this.internalMap));
  }

  public subtract(toSubtract: DoubleSet) {
    const newMap = {};
    const allKeys = DoubleSet.getAllKeys([this, toSubtract]);
    for (const key of allKeys) {
      const newVal = (this.get(key) ?? 0) - (toSubtract.get(key) ?? 0);
      if (newVal > 0) {
        console.log(`Key:${key},Val:${newVal}`);
        newMap[key] = newVal;
      }
    }
    this.internalMap = newMap;
  }

  public static getAllKeys(sets: DoubleSet[]): number[] {
    const keySet = new Set<string>();
    sets.forEach((s) => Object.keys(s.getData()).forEach((k) => keySet.add(k)));
    return [...keySet].map((k) => parseInt(k));
  }
}
