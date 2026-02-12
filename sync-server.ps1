# Tripathy Telecom - Local Sync Server
# This script listens for save requests from admin.html and updates your JSON files.

$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "--- Tripathy Telecom Sync Server ---" -ForegroundColor Cyan
Write-Host "Listening on http://localhost:$port/" -ForegroundColor Green
Write-Host "Keep this window open while using Admin Dashboard." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop."

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # CORS Headers
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
        $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        if ($request.HttpMethod -eq "POST" -and $request.Url.AbsolutePath -eq "/save") {
            $reader = New-Object System.IO.StreamReader($request.InputStream)
            $body = $reader.ReadToEnd()
            $json = $body | ConvertFrom-Json

            # Save Files
            $json.PSObject.Properties | ForEach-Object {
                $fileName = "$($_.Name).json"
                if ($_.Name -eq "mock") { $fileName = "mock-questions.json" }
                
                $filePath = Join-Path $PWD $fileName
                $content = $_.Value | ConvertTo-Json -Depth 100
                $content | Out-File -FilePath $filePath -Encoding utf8
                Write-Host "[SAVE] Updated $fileName" -ForegroundColor Gray
            }

            $buffer = [System.Text.Encoding]::UTF8.GetBytes("Success")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
        }
        
        $response.Close()
    } catch {
        Write-Host "[ERROR] $($_.Exception.Message)" -ForegroundColor Red
        if ($null -ne $response) { $response.Close() }
    }
}
