echo ${CI_REGISTRY_PASSWORD} | sudo docker login -u ${CI_REGISTRY_USER} --password-stdin ${CI_REGISTRY}
sudo docker-compose -f docker-compose_${CONTAINER_NAME}.yml pull ${SERVICE_NAME}
sudo docker-compose -f docker-compose_${CONTAINER_NAME}.yml stop ${SERVICE_NAME}
sudo docker-compose -f docker-compose_${CONTAINER_NAME}.yml up -d ${SERVICE_NAME}
