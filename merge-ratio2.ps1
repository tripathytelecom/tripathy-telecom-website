$ErrorActionPreference = "Stop"
$jsonPath = "mock-questions.json"
$tempPath = "ratio-proportion-set2-questions.json"

try {
    $mainText = Get-Content $jsonPath -Raw -Encoding UTF8
    $mainJson = $mainText | ConvertFrom-Json
    
    $newQuestions = Get-Content $tempPath -Raw -Encoding UTF8 | ConvertFrom-Json
    
    $newChapter = @{
        chapterName = "Ratio and Proportion (Bengali) - Set 2"
        timeLimit   = 1000
        questions   = $newQuestions
    }

    if (-not $mainJson.Math) {
        throw "Math section not found!"
    }

    $existing = $mainJson.Math.'Chapter-wise Mock'
    $arr = @()
    if ($existing -is [system.array]) {
        $arr = $existing
    }
    elseif ($existing -ne $null) {
        $arr += $existing
    }
    
    $arr += $newChapter
    
    $mainJson.Math.'Chapter-wise Mock' = $arr

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
    
    Write-Host "Successfully merged Math Set 2!"
}
catch {
    Write-Error "An error occurred: $_"
    exit 1
}
