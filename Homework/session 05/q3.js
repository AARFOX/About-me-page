console.log("╔══════════════════════════════════════╗");
console.log("║     DEVELOPER PROFILE SYSTEM         ║");
console.log("╚══════════════════════════════════════╝\n");

// ============ Personal Information ============
const fullName = "Mohamed Ashraf";
const jobTitle = "Full-Stack Developer";
let age = 22;
let city = "Cairo";
let country = "Egypt";
let isAvailable = true;

console.log(">>> Personal Information:");
console.log("    Name:", fullName);
console.log("    Title:", jobTitle);
console.log("    Age:", age);
console.log("    Location:", city + ", " + country);
console.log("    Available for work:", isAvailable);

// ============ Skills ============
let primarySkill = "JavaScript";
let secondarySkill = "React";
let yearsOfExperience = 2;
let knowsTypeScript = true;

console.log("\n>>> Skills:");
console.log("    Primary:", primarySkill);
console.log("    Secondary:", secondarySkill);
console.log("    Experience:", yearsOfExperience, "years");
console.log("    Knows TypeScript:", knowsTypeScript);

// ============ Contact Information ============
let email = "mohamed@example.com";
let phone = "+20-123-456-7890";
let hasWhatsApp = true;

console.log("\n>>> Contact:");
console.log("    Email:", email);
console.log("    Phone:", phone);
console.log("    Has WhatsApp:", hasWhatsApp);

// ============ Data Types Report ============
console.log("\n╔══════════════════════════════════════╗");
console.log("║          DATA TYPES REPORT           ║");
console.log("╚══════════════════════════════════════╝\n");

// Store variables and their types in a readable format
console.log("Variable           | Value              | Type");
console.log("-------------------|--------------------|---------");
console.log("fullName           | " + fullName + "        | " + typeof fullName);
console.log("jobTitle           | " + jobTitle + " | " + typeof jobTitle);
console.log("age                | " + age + "                 | " + typeof age);
console.log("city               | " + city + "            | " + typeof city);
console.log("country            | " + country + "           | " + typeof country);
console.log("isAvailable        | " + isAvailable + "             | " + typeof isAvailable);
console.log("primarySkill       | " + primarySkill + "    | " + typeof primarySkill);
console.log("yearsOfExperience  | " + yearsOfExperience + "                  | " + typeof yearsOfExperience);
console.log("knowsTypeScript    | " + knowsTypeScript + "              | " + typeof knowsTypeScript);
console.log("email              | " + email + "  | " + typeof email);
console.log("hasWhatsApp        | " + hasWhatsApp + "              | " + typeof hasWhatsApp);

// ============ Special Cases ============
console.log("\n>>> Special Data Types:");
let notAssigned;                    // undefined
let emptyProfile = null;           // null
let futureSkills;                  // undefined (not assigned yet)

console.log("    notAssigned:", notAssigned, "| Type:", typeof notAssigned);
console.log("    emptyProfile:", emptyProfile, "| Type:", typeof emptyProfile);
console.log("    futureSkills:", futureSkills, "| Type:", typeof futureSkills);

// ============ typeof null quirk explanation ============
console.log("\n>>> JavaScript Quirk Alert!");
console.log("    typeof null =", typeof null);
console.log("    This returns 'object' but null is NOT an object.");
console.log("    This is a known bug in JavaScript since 1995!");

// ============ Profile Summary ============
console.log("\n╔══════════════════════════════════════╗");
console.log("║          PROFILE SUMMARY             ║");
console.log("╚══════════════════════════════════════╝");
console.log("\n" + fullName + " is a " + jobTitle);
console.log("from " + city + ", " + country + ".");
console.log("With " + yearsOfExperience + "+ years of experience in " + primarySkill + ".");
console.log("Currently " + (isAvailable ? "available" : "not available") + " for new projects.");

// ============ Expected Output ============
// ╔══════════════════════════════════════╗
// ║     DEVELOPER PROFILE SYSTEM         ║
// ╚══════════════════════════════════════╝
//
// >>> Personal Information:
//     Name: Mohamed Ashraf
//     Title: Full-Stack Developer
//     Age: 22
//     Location: Cairo, Egypt
//     Available for work: true
//
// >>> Skills:
//     Primary: JavaScript
//     Secondary: React
//     Experience: 2 years
//     Knows TypeScript: true
//
// >>> Contact:
//     Email: mohamed@example.com
//     Phone: +20-123-456-7890
//     Has WhatsApp: true
//
// ╔══════════════════════════════════════╗
// ║          DATA TYPES REPORT           ║
// ╚══════════════════════════════════════╝
//
// Variable           | Value              | Type
// -------------------|--------------------|---------
// fullName           | Mohamed Ashraf        | string
// jobTitle           | Full-Stack Developer | string
// age                | 22                 | number
// city               | Cairo            | string
// country            | Egypt           | string
// isAvailable        | true             | boolean
// primarySkill       | JavaScript    | string
// yearsOfExperience  | 2                  | number
// knowsTypeScript    | true              | boolean
// email              | mohamed@example.com  | string
// hasWhatsApp        | true              | boolean
//
// >>> Special Data Types:
//     notAssigned: undefined | Type: undefined
//     emptyProfile: null | Type: object
//     futureSkills: undefined | Type: undefined
//
// >>> JavaScript Quirk Alert!
//     typeof null = object
//     This returns 'object' but null is NOT an object.
//     This is a known bug in JavaScript since 1995!
//
// ╔══════════════════════════════════════╗
// ║          PROFILE SUMMARY             ║
// ╚══════════════════════════════════════╝
//
// Mohamed Ashraf is a Full-Stack Developer
// from Cairo, Egypt.
// With 2+ years of experience in JavaScript.
// Currently available for new projects.
