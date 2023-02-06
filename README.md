# Music Catalog

Этот репозиторий содержит React-приложение, которое предназначено для хранения и просмотра данных об исполнителях, альбомах и песнях.

Приложение разработано с использованием **React** и дополнительных библиотек: 
- @reduxjs/toolkit, 
- react-router-dom, 
- react-redux, 
- antDesign(antd), 
- react-audio-player.

<br>
Вы сможете добавлять новые песни в любой альбом, выбранный из списка. Важно отметить, что одна и та же песня может быть включена в несколько альбомов с разными порядковыми номерами.

Бэкенд не используется в проекте, поэтому все данные хранятся в памяти браузера.

Следуйте инструкциям в документации, чтобы установить и запустить приложение на вашем локальном ПК.

## Установка
### Требования: 
- Docker
### Шаги:
1. Склонируйте репозиторий:

`$ git clone https://github.com/Fatality6/music-catalog.git`

2. Перейдите в папку с проектом:

`$ cd music-catalog`

3. Соберите образ:

`$ docker build -t music-catalog .`

4. Запустите контейнер:

`$ docker run -p 3000:3000 music-catalog`

5. Откройте в браузере страницу `http://localhost:3000/`.


## Деплой рабочего приложения [ТУТ](https://test-catalog-for-qortex.netlify.app/)


### Автор [Долгов Олег](https://github.com/Fatality6)
