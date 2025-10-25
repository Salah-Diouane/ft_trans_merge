# FROM prom/alertmanager:v0.27.0

# COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

# EXPOSE 9093

# CMD ["--web.external-url=http://localhost:9093", "--config.file=/etc/alertmanager/alertmanager.yml"]


FROM debian:12-slim

# Install required tools: wget, tar, envsubst (gettext), ca-certificates
RUN apt-get update && \
    apt-get install -y wget tar gettext ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Set Alertmanager version
ENV ALERT_VERSION=0.27.0

# Download and install Alertmanager
RUN wget https://github.com/prometheus/alertmanager/releases/download/v${ALERT_VERSION}/alertmanager-${ALERT_VERSION}.linux-amd64.tar.gz && \
    tar xvf alertmanager-${ALERT_VERSION}.linux-amd64.tar.gz && \
    mv alertmanager-${ALERT_VERSION}.linux-amd64/alertmanager /bin/alertmanager && \
    mv alertmanager-${ALERT_VERSION}.linux-amd64/amtool /bin/amtool && \
    rm -rf alertmanager-${ALERT_VERSION}.linux-amd64*

# Copy config and entrypoint
COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

COPY entrypoint.sh /entrypoint.sh

# Make entrypoint executable
RUN chmod +x /entrypoint.sh

# Set working directory
WORKDIR /etc/alertmanager

# Entrypoint
ENTRYPOINT ["/entrypoint.sh"]
