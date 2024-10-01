export default function createReportObject(employeesList) {
  this.allEmployees = function() {
    return employeesList;
  };

  this.getNumberOfDepartments = (arg) => {
    const keyArray = Object.keys(arg);
    const count = keyArray.length;
    return count;
  }
}
