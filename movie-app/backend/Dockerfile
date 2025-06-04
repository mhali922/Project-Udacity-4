FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Optional: exposed port 
EXPOSE 3001

# Run the app Gunicorn with on port 3001
CMD ["gunicorn", "-b", "0.0.0.0:3001", "app:app"]
