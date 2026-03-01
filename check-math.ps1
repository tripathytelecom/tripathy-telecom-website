$jsonPath = "mock-questions.json"
$regex = '"Math"\s*:\s*\{\s*"Chapter-wise Mock"\s*:\s*\['
$match = [regex]::Match((Get-Content $jsonPath -Raw), $regex)
Write-Host "Match for array: $($match.Success)"

$regex2 = '"Math"\s*:\s*\{\s*"Chapter-wise Mock"\s*:\s*\{'
$match2 = [regex]::Match((Get-Content $jsonPath -Raw), $regex2)
Write-Host "Match for object: $($match2.Success)"
