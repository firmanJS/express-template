docker-start:
	docker-compose up --build --remove-orphans --force-recreate
docker-stop:
	docker-compose stop
docker-test:
	docker-compose exec boillerplate yarn test
docker-coverage:
	docker-compose exec boillerplate yarn test:coverage
docker-down:
	docker-compose down