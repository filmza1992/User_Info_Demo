// http://192.168.4.104:4000/users
// http://192.168.4.104:4000/installuser
// http://192.168.4.104:4000/userByname/:name  ex ส
// http://192.168.4.104:4000/userById/:id


document.getElementById('insertForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    console.log('Form submitted'); // Debugging statement

    // Retrieve form values
    var id = document.getElementById('id').value;
    var prefername = document.getElementById('prefername').value;
    var name = document.getElementById('name').value;
    var nickname = document.getElementById('nickname').value;
    var dob = document.getElementById('dob').value;

    console.log('ID:', id); // Debugging statement
    console.log('Prefix:', prefername); // Debugging statement
    console.log('Name:', name); // Debugging statement
    console.log('Nickname:', nickname); // Debugging statement
    console.log('Date of Birth:', dob); // Debugging statement

    // Create student object

    var student = {
        id: id,
        prefix: prefername,
        name: name,
        nickname: nickname,
        dob: dob
    };

    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    console.log(student);
    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));

    // ล้างฟอร์มหลังจากการเพิ่ม
    document.getElementById('insertForm').reset();

    // แจ้งเตือนเมื่อเพิ่มนักเรียนสำเร็จ
    alert('Student added successfully!');
    

    // Redirect to index.html
    window.location.href = 'index.html';
});