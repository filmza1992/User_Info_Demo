// Sample student data (replace with your actual data)
// let studentInfo = [
//     { id: 64011212110, prefix: "Mr.", name: "John Doe", nickname: "Johnny", dob: "2545-01-01" },
//     { id: 64011212111, prefix: "Ms.", name: "Jane Smith", nickname: "Janie", dob: "2548-05-15" },
//     { id: 64011212112, prefix: "Dr.", name: "Alice Johnson", nickname: "Ally", dob: "2544-01-30" }
// ];
// localStorage.setItem('students', JSON.stringify(studentInfo));
students = JSON.parse(localStorage.getItem('students')) || [];
console.log(students);
function calculateAgeThai(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();

    // Adjust Thai year to Christian year
    const thaiYear = dob.getFullYear() - 543; // ลบ 543 จากปีไทยเพื่อเปลี่ยนเป็นปีคริสต์ศักราช
    dob.setFullYear(thaiYear);

    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}


// Function to display students
function displayStudents() {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = ''; // Clear previous content

    if (Array.isArray(students)) {
        students.forEach(student => {
            const age = calculateAgeThai(student.dob);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.prefix}</td>
                <td>${student.name}</td>
                <td>${student.nickname}</td>
                <td>${age}</td>
            `;
            studentTableBody.appendChild(row);
        });
    } else {
        console.log('Students is not an array or is null/undefined');
    }
}

// Initial display of students
displayStudents();