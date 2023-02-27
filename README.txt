gulp i --save-dev - устанавливаются все плагины
npm run dev - запускаемся в режиме разраба (лайв сервер + вотчер)
npm run build - продакшн (добавляет картинки webp, оптимизирует изображения)
npm run zip - если уже есть архив .zip, то нужно его удалить 
               (перед запустить в режиме продакшн)

если вылазит ошибка - Error: Cannot find module 'webp-converter/cwebp'
   пропиши npm i webp-converter@2.2.3 --save-exact