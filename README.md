# docker_homework
## Предварительное требование 
Перед сборкой образов открыть файл frontend/src/config.json и изменить переменную SERVER_URL: там должен быть указан актуальный HTTP URL для подключения к backend. По умолчанию там указано http://localhost
## Запуск
Для запуска через docker-compose с готовыми образами нужно выполнить команду из корня проекта:
`docker-compose up -d`
Для запуска через docker-compose со сборкой нужно выполнить команду из корня проекта:
`docker-compose -f docker-compose-build.yml build # Сборка`
`docker-compose -f docker-compose-build.yml up -d # Запуск`
