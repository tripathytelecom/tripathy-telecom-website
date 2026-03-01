$ErrorActionPreference = "Stop"
$jsonPath = "mock-questions.json"
$tempPath = "ratio-proportion-questions.json"

try {
    # 1. Parse main JSON
    $mainText = Get-Content $jsonPath -Raw -Encoding UTF8
    $mainJson = $mainText | ConvertFrom-Json
    
    # 2. Parse ratio JSON
    $newQuestions = Get-Content $tempPath -Raw -Encoding UTF8 | ConvertFrom-Json
    
    $newChapter = @{
        chapterName = "Ratio and Proportion (Bengali)"
        timeLimit   = 1000
        questions   = $newQuestions
    }

    # 3. Ensure Math node exists
    if (-not $mainJson.Math) {
        throw "Math section not found!"
    }

    # 4. Convert Chapter-wise Mock to array if it is an object
    $existing = $mainJson.Math.'Chapter-wise Mock'
    $arr = @()
    if ($existing -is [system.array]) {
        $arr = $existing
    }
    elseif ($existing -ne $null) {
        $arr += $existing
    }
    
    # Append the new chapter to the array
    $arr += $newChapter
    
    # Reassign back to the property
    $mainJson.Math.'Chapter-wise Mock' = $arr

    # Validate we don't cause JSON corruption with array unrolling
    $outJsonStr = $mainJson | ConvertTo-Json -Depth 10 -Compress
    # Depth 10 should be enough if not too deep. Wait, Depth 100!
    $outJsonStr = $mainJson | ConvertTo-Json -Depth 100
    
    $unescapedJsonStr = [System.Text.RegularExpressions.Regex]::Replace(
        $outJsonStr,
        "\\u([0-9a-fA-F]{4})",
        {
            param($match)
            [char][int]::Parse($match.Groups[1].Value, [System.Globalization.NumberStyles]::HexNumber)
        }
    )

    $utf8NoBom = New-Object System.Text.UTF8Encoding($False)
    [System.IO.File]::WriteAllText((Get-Item $jsonPath).FullName, $unescapedJsonStr, $utf8NoBom)
    
    Write-Host "Successfully merged Math!"
}
catch {
    Write-Error "An error occurred: $_"
    exit 1
}
