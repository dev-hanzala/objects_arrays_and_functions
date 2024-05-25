// 1:
;
// 2:
var students = [
    {
        name: "Imran",
        senior: true,
        hasCompletedAssignment: true,
    },
    {
        name: "Mohammad",
        senior: true,
        hasCompletedAssignment: true,
    },
    {
        name: "Ali",
        senior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Hanzala",
        senior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Saad",
        senior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Sara",
        senior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Maryam",
        senior: false,
        hasCompletedAssignment: true,
    },
];
// 3:
function getSeniorsWithAssignment(students) {
    return students.filter(function (student) { return student.senior && student.hasCompletedAssignment; });
}
;
console.log(getSeniorsWithAssignment(students));
// 4:
function removeSeniorsWithoutAssignment(students) {
    return students.filter(function (student) { return !student.senior || student.hasCompletedAssignment; });
}
console.log(removeSeniorsWithoutAssignment(students));
