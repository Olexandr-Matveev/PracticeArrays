## Tips:

1. `document.getElementById(id)` - Повертає елемент з унікальним ідентифікатором `id`.

2. `document.createElement(tagName)` - Створює новий елемент з тегом `tagName`.

3. `parentElement.appendChild(newChild)` - Додає `newChild` як останній дочірній елемент `parentElement`.

4. `element.addEventListener(event, function)` - Додає обробник подій 'function' для вказаної події 'event' на елементі 'element'.

5. `element.innerHTML` - Отримує або встановлює HTML вміст елемента.
6. `element.textContent` - Отримує або встановлює текстовий вміст елемента, виключаючи HTML-теги.

Різниця:

`textContent` повертає **тільки текстовий вміст без тегів**, використовується для роботи з **текстом**.

```
const element = document.getElementById('example');
console.log(element.textContent); // Отримує текстовий вміст елемента
element.textContent = 'Новий текст'; // Встановлює новий текстовий вміст
```

`innerHTML` повертає **весь HTML-код всередині елемента** використовується для роботи з **HTML-кодом**.

```
const element = document.getElementById('example');
console.log(element.innerHTML); // Отримує HTML вміст елемента
element.innerHTML = '<p>Новий <strong>HTML</strong> вміст</p>'; // Встановлює новий HTML вміст
```