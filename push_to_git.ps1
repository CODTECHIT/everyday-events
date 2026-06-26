# Check if git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Git is not installed on this system. Please install Git and try again." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit
}

# Ensure we are in the correct directory
Set-Location -Path $PSScriptRoot

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing new Git repository..." -ForegroundColor Cyan
    git init
}

# Check if git remote origin already exists
$remoteExists = git remote | Select-String -Pattern "^origin$"
$remoteUrl = "https://github.com/CODTECHIT/everyday-events.git"

if ($remoteExists) {
    Write-Host "Updating remote 'origin' URL to: $remoteUrl" -ForegroundColor Cyan
    git remote set-url origin $remoteUrl
} else {
    Write-Host "Adding remote 'origin' URL: $remoteUrl" -ForegroundColor Cyan
    git remote add origin $remoteUrl
}

# Add all files to staging
Write-Host "Staging files..." -ForegroundColor Cyan
git add .

# Check git status for any .env files being staged (safety check)
$stagedEnvFiles = git status --porcelain | Select-String -Pattern "^\s*[A-Z\s]*\s*\.env"
if ($stagedEnvFiles) {
    Write-Host "Warning: .env file(s) detected in staged files. Aborting commit." -ForegroundColor Red
    Write-Host "Please ensure no sensitive .env files are committed." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit
}

# Check if there is anything to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Green
} else {
    Write-Host "Committing changes..." -ForegroundColor Cyan
    git commit -m "Initial commit of Premium Event Management Website"
}

# Set branch name to main
Write-Host "Setting main branch..." -ForegroundColor Cyan
git branch -M main

# Push to remote repository
Write-Host "Pushing to remote repository (main branch)..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Success! Code has been pushed to $remoteUrl" -ForegroundColor Green
} else {
    Write-Host "Push failed. Please check if you have write access to the repository and authentication is configured." -ForegroundColor Red
}

Read-Host "Press Enter to exit..."
