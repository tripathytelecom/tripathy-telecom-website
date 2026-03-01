$json = Get-Content "mock-questions.json" -Raw | ConvertFrom-Json
Write-Host "Reasoning -> Chapter-wise Mock is type: $($json.Reasoning.'Chapter-wise Mock'.GetType().Name)"
Write-Host "Length: $($json.Reasoning.'Chapter-wise Mock'.Count)"
