#!/bin/bash

case "$1" in
    "start")
        docker-compose up -d
        echo "TSC Web application started"
        ;;
    "stop")
        docker-compose down
        echo "TSC Web application stopped"
        ;;
    "restart")
        docker-compose restart
        echo "TSC Web application restarted"
        ;;
    "logs")
        docker-compose logs -f
        ;;
    "status")
        docker-compose ps
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|logs|status}"
        exit 1
        ;;
esac 