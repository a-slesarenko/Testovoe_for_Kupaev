Тестовое задание.

Используются(самое основное):

- Webpack dev server,
- Hot module replacement,
- Source maps,
- Проверка типов вынесена в отдельный процесс, идет после сборки,
- Css модули,
- Плагин для работы с svg
- Настройки для работы с jpeg, jpg, png, gif
- Настройки для работы со шрифтами

Скрипты:

- "start" - запустить сборку в development режиме с webpack dev server;
- "build-dev": сделать development сборку, сервер не запускать;
- "build-prod": сделать production сборку, сервер не запускать;
- "analyzer": сделать production сборку + запустить аналайзер production сборки;

Запустить json server - npx json-server --watch db.json --port 8000
