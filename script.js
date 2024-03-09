// Sample JSON object for students
let students = [
    { id: 1, name: "John Doe" ,age: 20},
    { id: 2, name: "Jane Smith" ,age: 21},
    { id: 3, name: "Alice Johnson" , age: 22}
];

// Function to display students
function displayStudents() {
    const studentListDiv = document.getElementById('studentList');
    studentListDiv.innerHTML = ''; // Clear previous content

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.textContent = `ID: ${student.id}, Name: ${student.name}`;
        studentListDiv.appendChild(studentDiv);
    });
}

// Function to add a new student
function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const newId = students.length + 1; // Generate new ID
    students.push({ id: newId, name: studentName });
    displayStudents();
}

// Function to delete a student by ID
function deleteStudent() {
    const deleteId = parseInt(document.getElementById('deleteId').value);
    students = students.filter(student => student.id !== deleteId);
    displayStudents();
}

// Function to update a student by ID
function updateStudent() {
    const updateId = parseInt(document.getElementById('updateId').value);
    const newName = document.getElementById('updateName').value;
    const studentToUpdate = students.find(student => student.id === updateId);
    if (studentToUpdate) {
        studentToUpdate.name = newName;
        displayStudents();
    } else {
        alert('Student not found!');
    }
}

// Initial display of students
displayStudents();