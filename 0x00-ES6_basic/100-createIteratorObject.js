#!/usr/bin/node

export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employees.push(...allEmployees[department]);
    }
  }

  let index = 0;
  return {
    next() {
      if (index === employees.length) {
        return { done: true };
      }
      const value = employees[index];
      index += 1;
      return { value, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
