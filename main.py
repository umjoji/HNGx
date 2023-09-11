#!/usr/bin/env python3
"""HNG Stage one task."""

from fastapi import FastAPI, Query
from datetime import datetime, timedelta

app = FastAPI()


@app.get("/api")
async def get_api_data(
    slack_name: str = Query("Nemoji", description="Your Slack name"),
    track: str = Query("backend", description="Your track"),
):
    current_day = datetime.utcnow().strftime("%A")
    current_utc_time = (datetime.utcnow() + timedelta(minutes=2)).isoformat()

    github_file_url = "https://github.com/umjoji/HNGx/blob/main/main.py"
    github_repo_url = "https://github.com/umjoji/HNGx"
    status_code = 200

    response_data = {
        "slack_name": slack_name,
        "current_day": current_day,
        "utc_time": current_utc_time,
        "track": track,
        "github_file_url": github_file_url,
        "github_repo_url": github_repo_url,
        "status_code": status_code,
    }

    return response_data
