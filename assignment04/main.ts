// 1:

interface Student{
	name: string,
	senior: boolean,
	hasCompletedAssignment: boolean,
};

// 2:

let students: Student[] = [
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

function getSeniorsWithAssignment(students: Student[]){
	return students.filter(student => student.senior && student.hasCompletedAssignment);
};

console.log(getSeniorsWithAssignment(students));

// 4:

function removeSeniorsWithoutAssignment(students: Student[]){
	return students.filter(student =>!student.senior || student.hasCompletedAssignment);
}

console.log(removeSeniorsWithoutAssignment(students));