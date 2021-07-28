#!/bin/sh

start_development() {
    echo "Starting development environment..."
    exec docker-compose --env-file dev.env -f app.yml -f app.dev.yml up -d --force-recreate --build nodejs ui
    clean_up
}

start_production() {
    echo "Starting production environment..."
    docker-compose --env-file prod.env -f app.yml -f app.prod.yml up -d --force-recreate --build nodejs
    clean_up
}
start_local2production() {
    echo "Starting local production environment..."
    docker-compose --env-file local2prod.env -f app.yml -f app.local2prod.yml up -d --force-recreate --build nodejs ui
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
