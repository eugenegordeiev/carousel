#!/bin/sh

load_config() {
    echo "Loading $1 config..."
    source "./$1.env"

    export APP_PATH="${app_path}"
    export UI_PATH="${ui_path}"
    export HOST=${host_ip}
    export API_PROTOCOL=${api_protocol}
    export API_PORT=${api_port}
    export API_HOST=${api_host}
    export DATA_PATH=${data_path}
}

start_development() {
    load_config "dev"

    echo "Starting development environment..."
    exec docker-compose -f app.yml -f app.dev.yml up -d --force-recreate --build nodejs
    clean_up
}

start_production() {
    load_config "prod"

    echo "Starting production environment..."
    docker-compose -f app.yml -f app.prod.yml up -d --force-recreate --build nodejs
    clean_up
}
start_local2production() {
    load_config "local2prod"

    echo "Starting local production environment..."
    docker-compose -f app.yml -f app.local2prod.yml up -d --force-recreate --build nodejs ui
    clean_up
}

clean_up() {
    echo "cleanup..."
    output=$(docker ps -q -f "status=exited")
    if [ "$output" ]; then
        docker rm $(docker ps -q -f "status=exited")
    fi
}

arg=$1
: ${arg:=dev}

case "$arg" in
    dev)
        start_development
        ;;
    local2prod)
        start_local2production
        ;;
    prod)
        start_production
        ;;
    *)
        echo $"Usage: $0 environment {development|qa|staging|production}"
        exit 2
esac
