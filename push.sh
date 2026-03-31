#!/bin/bash

# Default commit message if none provided
MESSAGE=${1:-"Update: 자동 배포 스크립트 실행"}

# Add all changes
git add .

# Commit with the message
git commit -m "$MESSAGE"

# Push to origin main
git push origin main
