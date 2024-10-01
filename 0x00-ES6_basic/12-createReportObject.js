export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length; // Count the number of departments
    },
  };
}
