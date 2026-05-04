console.log("╔══════════════════════════════════════╗");
console.log("║        GRADE CALCULATOR              ║");
console.log("╚══════════════════════════════════════╝\n");

// ===== Grade Calculator Function =====

function calculateGrade(score) {
    let grade;
    let message;
    
    // Using if/else if/else for grade determination
    if (score >= 90) {
        grade = "A";
        message = "Excellent! Outstanding performance!";
    } else if (score >= 80) {
        grade = "B";
        message = "Good job! Keep up the great work!";
    } else if (score >= 70) {
        grade = "C";
        message = "Not bad! Room for improvement.";
    } else if (score >= 60) {
        grade = "D";
        message = "You passed, but consider studying more.";
    } else {
        grade = "F";
        message = "Failed. Please try again!";
    }
    
    return { grade, message };
}

// ===== Test Cases =====

let testScores = [95, 85, 75, 65, 55, 90, 80, 70, 60, 50];

console.log(">>> Grade Calculator Test Results:\n");
console.log("Score | Grade | Message");
console.log("------|-------|--------");

for (let i = 0; i < testScores.length; i++) {
    let score = testScores[i];
    let result = calculateGrade(score);
    console.log(score + "   | " + result.grade + "     | " + result.message);
}

// ===== Detailed Grade Breakdown =====

console.log("\n========== Grade Breakdown ==========\n");

function printGradeScale() {
    console.log("┌─────────┬─────────┬─────────────────────────┐");
    console.log("│  Score  │  Grade  │        Meaning          │");
    console.log("├─────────┼─────────┼─────────────────────────┤");
    console.log("│  90-100 │    A    │ Excellent               │");
    console.log("│  80-89  │    B    │ Good                    │");
    console.log("│  70-79  │    C    │ Satisfactory            │");
    console.log("│  60-69  │    D    │ Needs Improvement       │");
    console.log("│   0-59  │    F    │ Failed                  │");
    console.log("└─────────┴─────────┴─────────────────────────┘");
}

printGradeScale();

// ===== With User Input (Browser) =====
// Uncomment to use in browser console

/*
let input = prompt("Enter your score (0-100):");
let score = Number(input);

// Validate input
if (isNaN(score)) {
    alert("Invalid input! Please enter a number.");
} else if (score < 0 || score > 100) {
    alert("Score must be between 0 and 100!");
} else {
    let result = calculateGrade(score);
    alert(
        "Score: " + score + "\n" +
        "Grade: " + result.grade + "\n" +
        result.message
    );
}
*/

// ===== Comparison Operators Demo =====

console.log("\n========== Comparison & Logical Operators ==========\n");

let score1 = 85;
let score2 = 90;

// Comparison operators
console.log("score1 = " + score1 + ", score2 = " + score2);
console.log("score1 > score2: " + (score1 > score2));       // false
console.log("score1 < score2: " + (score1 < score2));       // true
console.log("score1 >= 80: " + (score1 >= 80));             // true
console.log("score2 <= 89: " + (score2 <= 89));             // false
console.log("score1 === 85: " + (score1 === 85));           // true

// Logical operators
console.log("\n>>> Logical Operators:");
console.log("score1 >= 80 && score2 >= 80: " + (score1 >= 80 && score2 >= 80)); // true && true = true
console.log("score1 >= 90 || score2 >= 90: " + (score1 >= 90 || score2 >= 90)); // false || true = true
console.log("!(score1 >= 90): " + !(score1 >= 90));         // !false = true

// ===== Real-world Example: Pass/Fail Checker =====

console.log("\n========== Pass/Fail Checker ==========\n");

function checkPassFail(scores) {
    let results = [];
    
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        let passed = score >= 60;  // Boolean result
        
        results.push({
            score: score,
            passed: passed,
            status: passed ? "✓ PASSED" : "✗ FAILED"
        });
    }
    
    return results;
}

let studentScores = [92, 78, 55, 60, 88, 45, 100];
let results = checkPassFail(studentScores);

console.log("Score | Status");
console.log("------|--------");
for (let i = 0; i < results.length; i++) {
    console.log(results[i].score + "   | " + results[i].status);
}

// Count passed and failed
let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < results.length; i++) {
    if (results[i].passed) {
        passedCount++;
    } else {
        failedCount++;
    }
}

console.log("\nSummary: " + passedCount + " passed, " + failedCount + " failed");

// ===== Nested if Example =====

console.log("\n========== Nested if Example ==========\n");

function getDetailedGrade(score, attendance) {
    let grade = calculateGrade(score).grade;
    let bonus = "";
    
    // Bonus for good attendance
    if (attendance >= 90) {
        bonus = " + Attendance Bonus!";
        if (grade !== "A" && grade !== "F") {
            // Upgrade by one level (except A and F)
            let grades = ["F", "D", "C", "B", "A"];
            let currentIndex = grades.indexOf(grade);
            if (currentIndex < grades.length - 1) {
                grade = grades[currentIndex + 1];
            }
        }
    }
    
    return { grade, bonus };
}

let testCases = [
    { score: 75, attendance: 95 },  // C with bonus -> B
    { score: 85, attendance: 80 },  // B no bonus
    { score: 65, attendance: 92 },  // D with bonus -> C
    { score: 92, attendance: 100 }  // A (already max)
];

console.log("Score | Attendance | Final Grade");
console.log("------|------------|-------------");
for (let i = 0; i < testCases.length; i++) {
    let tc = testCases[i];
    let result = getDetailedGrade(tc.score, tc.attendance);
    console.log(tc.score + "   | " + tc.attendance + "%       | " + result.grade + result.bonus);
}

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║        GRADE CALCULATOR              ║
// ╚══════════════════════════════════════╝
//
// >>> Grade Calculator Test Results:
//
// Score | Grade | Message
// ------|-------|--------
// 95   | A     | Excellent! Outstanding performance!
// 85   | B     | Good job! Keep up the great work!
// 75   | C     | Not bad! Room for improvement.
// 65   | D     | You passed, but consider studying more.
// 55   | F     | Failed. Please try again!
// ... (more results)
//
// ========== Grade Breakdown ==========
// ┌─────────┬─────────┬─────────────────────────┐
// │  Score  │  Grade  │        Meaning          │
// ├─────────┼─────────┼─────────────────────────┤
// │  90-100 │    A    │ Excellent               │
// │  80-89  │    B    │ Good                    │
// │  70-79  │    C    │ Satisfactory            │
// │  60-69  │    D    │ Needs Improvement       │
// │   0-59  │    F    │ Failed                  │
// └─────────┴─────────┴─────────────────────────┘
