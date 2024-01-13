var textsArabic = {
	gra: "نــتائج علامـــــات الطلبــة",
	func: 'إضغـــط هـــنا'
};

var textsEnglish = {
	gra: "Student Grades Results",
	func: 'Enter Here'
};

var currentLanguage = "ar"; // يمكن تغيير القيمة إلى 'en' للإنجليزية

function switchLanguage(lang) {
	if (lang === "ar") {
		currentLanguage = "ar";
		displayTexts(textsArabic);
	} else {
		currentLanguage = "en";
		displayTexts(textsEnglish);
	}
}

function displayTexts(texts) {
	document.getElementById("gra").innerHTML = texts.gra;
	document.getElementById('func').innerHTML = texts.func;
}

switchLanguage(currentLanguage);

/////////////////////////
function myFunction() {
	let mynumber = prompt("Enter Your Number");

	if (isNaN(mynumber) || +mynumber <= 0) {
		alert(
			"Invalid input for the number of entries. Please enter a valid positive number."
		);
		return;
	}

	let students = [];

	for (let i = 0; i < +mynumber; i++) {
		var name = prompt("Enter your name");
		var exam = prompt("Enter your Exam");
		var mark = Number(prompt("Enter the number"));

		if (isNaN(mark)) {
			alert("Invalid input for marks. Please enter a valid number.");
			return;
		}

		let studentInfo = {
			name: name,
			exam: exam,
			mark: mark,
		};

		students.push(studentInfo);
	}

	let totalMarks = 0;
	let minMark = Infinity;
	let maxMark = -Infinity;

	for (let i = 0; i < students.length; i++) {
		let mark = students[i].mark;

		totalMarks += mark;

		if (mark < minMark) {
			minMark = mark;
		}

		if (mark > maxMark) {
			maxMark = mark;
		}
	}

	let avgMark = totalMarks / +mynumber;

	let grade;
	if (avgMark >= 95) {
		grade = "A+";
	} else if (avgMark >= 90) {
		grade = "A";
	} else if (avgMark >= 80) {
		grade = "B+";
	} else if (avgMark >= 70) {
		grade = "C";
	} else if (avgMark >= 60) {
		grade = "D";
	} else {
		grade = "F";
	}

	let result =
		"My Number is: " +
		mynumber +
		" Average Grade: " +
		grade +
		" Average Mark: " +
		avgMark +
		" Min Mark: " +
		minMark +
		" Max Mark: " +
		maxMark +
		"<br>";

	for (let i = 0; i < students.length; i++) {
		result +=
			"Student " +
			(i + 1) +
			": Name - " +
			students[i].name +
			", Exam - " +
			students[i].exam +
			", Mark - " +
			students[i].mark +
			"<br>";
	}

	document.getElementById("demo4").innerHTML = result;
}
