const fs = require('fs');

const mainFile = 'mock-questions.json';
const tempFile = 'full-mock-questions-temp.json';

try {
    const mainData = JSON.parse(fs.readFileSync(mainFile, 'utf8'));
    const newQuestions = JSON.parse(fs.readFileSync(tempFile, 'utf8'));

    // Create new chapter object
    const newChapter = {
        chapterName: "Full Mock Test - NTPC UG (Bengali)",
        timeLimit: 3600, // 60 mins
        questions: newQuestions
    };

    // Ensure Full Mock category exists
    if (!mainData["Full Mock Test"]) {
        mainData["Full Mock Test"] = [];
    }

    // Append new chapter
    mainData["Full Mock Test"].push(newChapter);

    // Write back
    fs.writeFileSync(mainFile, JSON.stringify(mainData, null, 4), 'utf8');
    console.log("Successfully added Full Mock Test chapter.");

} catch (e) {
    console.error("Error merging files:", e);
}
