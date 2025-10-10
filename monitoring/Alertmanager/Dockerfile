FROM prom/alertmanager:v0.27.0

COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

EXPOSE 9093

CMD ["--web.external-url=http://localhost:9093", "--config.file=/etc/alertmanager/alertmanager.yml"]
