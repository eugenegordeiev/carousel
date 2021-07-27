echo "Starting application..."
echo "${API_SERVER}"
envsubst < "/usr/share/nginx/html/assets/json/runtime.json" > "/usr/share/nginx/html/assets/json/runtime.json"
nginx -g 'daemon off;'
