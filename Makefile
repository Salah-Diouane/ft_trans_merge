.PHONY: all clean fclean

# Paths
COMPOSE_FILE=srcs/docker-compose.yml
FRONTEND_DIR=srcs/Frontend
BACKEND_DIR=srcs/backend
NODE_DIR=srcs/node_modules

all:
	docker compose -f $(COMPOSE_FILE) up --build 

logs_backend:
	docker-compose -f $(COMPOSE_FILE) logs backend

logs_frontend:
	docker-compose -f $(COMPOSE_FILE) logs frontend

logs_nginx:
	docker-compose -f $(COMPOSE_FILE) logs nginx

logs_grafana:
	docker-compose -f $(COMPOSE_FILE) logs grafana

clean:
	docker compose -f $(COMPOSE_FILE) down --remove-orphans

fclean: clean
	@echo "🧹 Removing volumes..."
	docker volume prune -f

	@echo "🗑️ Removing all images built by docker-compose..."
	docker compose -f $(COMPOSE_FILE) down --rmi all --volumes --remove-orphans

	@echo "🧼 Cleaning node_modules..."
	@if [ -d "$(NODE_DIR)" ]; then \
		echo "🗑️  Removing Frontend node_modules..."; \
		rm -rf $(NODE_DIR); \
	fi

re: fclean all
# docker stop srcs-nginx_exporter-1