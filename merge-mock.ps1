$jsonPath = "mock-questions.json"
$tempPath = "full-mock-questions-temp.json"

try {
    # Read and parse JSON files
    $mainJson = Get-Content $jsonPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $newQuestions = Get-Content $tempPath -Raw -Encoding UTF8 | ConvertFrom-Json

    # Create new chapter structure
    $newChapter = @{
        chapterName = "Full Mock Test - NTPC UG (Bengali)"
        timeLimit = 3600
        questions = $newQuestions
    }

    # Add "Full Mock Test" category if it doesn't exist
    if (-not $mainJson.'Full Mock Test') {
        $mainJson | Add-Member -MemberType NoteProperty -Name "Full Mock Test" -Value @()
    }

    # Append the new chapter to the category
    $mainJson.'Full Mock Test' += $newChapter

    # Write back to file with sufficient depth
    $mainJson | ConvertTo-Json -Depth 100 | Set-Content $jsonPath -Encoding UTF8
    
    Write-Host "Successfully merged Full Mock Test."
} catch {
    Write-Error "An error occurred: $_"
    exit 1
}
