const fs = require('fs');

const mainFile = 'mock-questions.json';
const tempFile = 'reasoning-questions-temp.json';

try {
    const mainData = JSON.parse(fs.readFileSync(mainFile, 'utf8'));
    const newQuestions = JSON.parse(fs.readFileSync(tempFile, 'utf8'));

    // Create new chapter object
    const newChapter = {
        chapterName: "Reasoning (Bengali Set 1)",
        timeLimit: 3000, // 50 questions * 60s (liberal limit) or just 45 mins. 50 mins = 3000s
        questions: newQuestions
    };

    // Ensure Reasoning category exists
    if (!mainData["Reasoning"]) {
        mainData["Reasoning"] = [];
    }

    // Append new chapter
    mainData["Reasoning"].push(newChapter);

    // Write back
    fs.writeFileSync(mainFile, JSON.stringify(mainData, null, 4), 'utf8');
    console.log("Successfully added Reasoning chapter.");

} catch (e) {
    console.error("Error merging files:", e);
}
