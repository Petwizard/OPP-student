class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getInfo() {
        return `Name: ${this.name}<br>Age: ${this.age}<br>Grade: ${this.grade}`;
    }
}

const students = [
    new Student("John Doe", 18, "12th"),
    new Student("Jane Smith", 17, "11th"),
    new Student("Alex Johnson", 16, "10th"),
    
];

const studentContainer = document.getElementById("studentContainer");

students.forEach(student => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";
    studentCard.innerHTML = `
        <h2>${student.name}</h2>
        <p>${student.getInfo()}</p>
    `;
    studentContainer.appendChild(studentCard);
});