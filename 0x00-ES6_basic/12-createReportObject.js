#!/usr/bin/node

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [department, employees] of Object.entries(employeesList)) {
    allEmployees[department] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
}
