/*
   ! Функціональні вимоги:

   1. Вхідні дані:
      - Функція приймає один параметр id — ідентифікатор ресурсу, який потрібно видалити.

   2. Запит на видалення:
      - Виконати асинхронний HTTP DELETE запит до API за адресою https://jsonplaceholder.typicode.com/posts/${id}, де ${id} замінюється на конкретний ідентифікатор ресурсу для видалення.

   3. Обробка відповіді:
      - Якщо запит успішний (HTTP статус відповіді 200-299), логувати успішне повідомлення і повертати true.
      - У випадку отримання відповіді зі статусом, що вказує на помилку (все, що поза діапазоном 200-299), логувати помилку зі статусом і повертати сам статус помилки.
      - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати повідомлення про помилку і повертати текст помилки.

   4. Логування:
      - Успішне видалення: Логувати повідомлення у консоль у форматі: "Post with id [id] has been successfully deleted.", де [id] — це ідентифікатор видаленого ресурсу.
      - Неуспішне видалення: Логувати повідомлення у консоль у форматі: "Failed to delete post with id [id]. Status: [status]", де [id] — ідентифікатор ресурсу, а [status] — HTTP статус відповіді.
      - Помилка виконання запиту: Логувати повідомлення у консоль у форматі: "Error during deletion: [error message]", де [error message] — текст помилки.

   Технічні вимоги:

   - Використання асинхронних функцій (async/await) для обробки HTTP запитів.
   - Забезпечити належну обробку помилок та відповідей від API.
   - Функція повинна бути експортована для подальшого використання або тестування.
*/

async function deleteData(id) {
   try {
      const url = 'https://jsonplaceholder.typicode.com/posts/';
      const response = await fetch(`${url}${id}`, { method: 'DELETE' });

      if( response.status >= 200 && response.status < 300 ) {
         console.log(`Post with id ${id} has been successfully deleted.`);
         return true;
      }

      if( response.status > 300) {
         console.log(`Failed to delete post with id ${id}. Status: ${response.status}`);
         return response.status;
      }

   } catch(error) {
      console.log(`Error during deletion: ${error}`);
      return error.message;
   }
}

deleteData('103').then(data => console.log(data)).catch(error => console.log(error));

export { deleteData }
