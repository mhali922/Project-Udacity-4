FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Optional: Document the exposed port (for clarity)
EXPOSE 3001

# Run the app with Gunicorn on port 3001
CMD ["gunicorn", "-b", "0.0.0.0:3001", "app:app"]
