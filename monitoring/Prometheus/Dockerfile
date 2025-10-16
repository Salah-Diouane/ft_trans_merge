FROM prom/prometheus:latest

COPY prometheus.yml /etc/prometheus/prometheus.yml
COPY alert_rules.yml /etc/prometheus/alert_rules.yml

EXPOSE 9090

CMD ["--config.file=/etc/prometheus/prometheus.yml", "--web.enable-lifecycle"]
