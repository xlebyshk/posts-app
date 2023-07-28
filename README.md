# Picasso test task post

Реализовать приложение на React. Приложение должно отображать список
постов. Также необходимо отображать селект с пользователями, при выборе пользователя отображать только его посты (фильтрацию реализовать на стороне сервера).
При клике на пост открывается страница с информацией о посте,
информацией о пользователе, который его написал и комментариями к этому
посту.

Для данных использовать API: https://jsonplaceholder.typicode.com:
- для постов: https://jsonplaceholder.typicode.com/posts
- для пользователей: https://jsonplaceholder.typicode.com/users
- для комментариев: https://jsonplaceholder.typicode.com/comments

Дополнительно:
Реализовать возможность добавления комментария с отправкой
на сервер (запрос post на https://jsonplaceholder.typicode.com/comments).
Реализовать вывод уведомлений при различных действиях
(например, при отправке комментариев / при переходе между роутами)
Использование ui библиотек приветствуется. Использовать React Router для перехода по страницам.

## Technologies
    - TypeScript
    - React
    - Hooks
    - Axios
    - Sass

## Setup
1. `npm install`
2. `npm start`
3. open `http://localhost:3000` in the browser
