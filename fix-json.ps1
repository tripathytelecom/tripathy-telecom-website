$ErrorActionPreference = "Stop"
$jsonPath = "mock-questions.json"

try {
    $content = Get-Content $jsonPath -Raw -Encoding UTF8
    
    # PowerShell RegEx to strip the wrapper
    $pattern = '(?s)"questions"\s*:\s*\{\s*"value"\s*:\s*(\[.*?\])\s*,\s*"Count"\s*:\s*\d+\s*\}'
    $replacement = '"questions": $1'

    $newContent = [regex]::Replace($content, $pattern, $replacement)

    $utf8NoBom = New-Object System.Text.UTF8Encoding($False)
    [System.IO.File]::WriteAllText((Get-Item $jsonPath).FullName, $newContent, $utf8NoBom)
    
    Write-Host "Fixed JSON format successfully!"
}
catch {
    Write-Error "An error occurred: $_"
    exit 1
}
