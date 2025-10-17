all:
	docker-compose -f srcs/docker-compose.yml up --build

logs_backend:
	docker-compose -f srcs/docker-compose.yml logs backend

logs_frontend:
	docker-compose -f srcs/docker-compose.yml logs frontend

logs_nginx:
	docker-compose -f srcs/docker-compose.yml logs nginx

logs_grafana:
	docker-compose -f srcs/docker-compose.yml logs grafana

clean:
	docker-compose -f srcs/docker-compose.yml down -v

fclean: clean
	docker system prune -a --volumes

re: fclean all
