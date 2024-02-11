/*
 ! Функціональні вимоги:

 1. Вхідні параметри:
    - `segment`: Рядок, що вказує на сегмент API для виконання POST запиту (наприклад, `/posts`).
    - `data`: Об'єкт, який містить дані для відправки в тілі запиту.

 2. Виконання запиту:
    - Виконати асинхронний HTTP POST запит до `https://jsonplaceholder.typicode.com`, додавши `segment` до URL. Використати `data` як тіло запиту.
    - Встановити необхідні заголовки для запиту, зокрема `Content-Type: application/json`.

 3. Обробка відповіді:
    - У разі успішного отримання відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
    - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути повідомлення про помилку.

 4. Логування:
    - Логувати у консоль результат або повідомлення про помилку.

 Технічні Вимоги:

 - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 - Належне управління помилками та відповідями від API.
*/

async function postData(segment, data) {
   try {
      const url = 'https://jsonplaceholder.typicode.com';
      const response = await fetch(`${url}${segment}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         }
      );

      if(!response.ok)  {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dataRes = await response.json();
      console.log(dataRes);
      return dataRes;

   } catch (error) {
      console.error('Error posting data: ' , error);
      return error.message;
   }
}

export { postData };