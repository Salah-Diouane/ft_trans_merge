#!/bin/sh
set -e

envsubst < /etc/alertmanager/alertmanager.yml > /tmp/alertmanager.yml

exec /bin/alertmanager \
  --web.external-url=http://localhost:9093 \
  --config.file=/tmp/alertmanager.yml \
  --storage.path=/alertmanager

