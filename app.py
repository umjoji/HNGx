"""HNGx Stage One with Flask."""

from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)


@app.route('/api', methods=['GET'])
def get_api_data():
    """Retrieve slack_name and track."""
    slack_name = request.args.get('slack_name', 'example_name')
    track = request.args.get('track', 'backend')

    current_day = datetime.datetime.utcnow().strftime('%A')
    utc_time = datetime.datetime.utcnow().replace(
        microsecond=0).isoformat() + 'Z'

    github_repo_url = 'https://github.com/umjoji/HNGx'
    github_file_url = github_repo_url + '/blob/main/app.py'

    response_data = {
        "slack_name": slack_name,
        "current_day": current_day,
        "utc_time": utc_time,
        "track": track,
        "github_file_url": github_file_url,
        "github_repo_url": github_repo_url,
        "status_code": 200
    }

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)
