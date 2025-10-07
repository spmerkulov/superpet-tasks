# Astro Aria - Портфолио Сергея Меркулова

Современный веб-сайт портфолио, созданный с использованием Astro и Tailwind CSS. Сайт демонстрирует работу над тестовыми заданиями для позиции "Технический менеджер проекта".

## 🚀 Технологии

- **Astro** - Современный фреймворк для создания быстрых веб-сайтов
- **Tailwind CSS** - Utility-first CSS фреймворк
- **TypeScript** - Типизированный JavaScript
- **GitHub Pages** - Хостинг статических сайтов

## 📦 Установка и запуск

### Локальная разработка

```bash
# Клонирование репозитория
git clone https://github.com/USERNAME/astro-aria.git
cd astro-aria

# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev
```

Сайт будет доступен по адресу `http://localhost:4321`

### Сборка для продакшена

```bash
# Сборка проекта
npm run build

# Предварительный просмотр сборки
npm run preview
```

## 🌐 Деплой на GitHub Pages

### Автоматический деплой (рекомендуется)

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions:

1. **Создайте репозиторий на GitHub**
2. **Обновите конфигурацию в `astro.config.mjs`:**
   ```javascript
   site: 'https://YOUR_USERNAME.github.io',
   base: '/astro-aria', // или название вашего репозитория
   ```

3. **Загрузите код в репозиторий:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/astro-aria.git
   git push -u origin main
   ```

4. **Настройте GitHub Pages:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Workflow автоматически запустится при пуше в main ветку

5. **Сайт будет доступен по адресу:**
   `https://YOUR_USERNAME.github.io/astro-aria`

### Ручной деплой

Если вы предпочитаете ручной деплой:

```bash
# Сборка проекта
npm run build

# Деплой содержимого папки dist на GitHub Pages
# Используйте gh-pages или загрузите файлы вручную
```

## 📁 Структура проекта

```
/
├── public/              # Статические файлы
│   ├── assets/         # Изображения и медиа
│   └── favicon.ico     # Иконка сайта
├── src/
│   ├── components/     # Компоненты Astro
│   ├── layouts/        # Шаблоны страниц
│   ├── pages/          # Страницы сайта
│   ├── styles/         # Глобальные стили
│   └── content/        # Контент (задачи)
├── .github/
│   └── workflows/      # GitHub Actions
└── astro.config.mjs    # Конфигурация Astro
```

## 🛠️ Команды

| Команда                | Действие                                      |
| :--------------------- | :-------------------------------------------- |
| `npm install`          | Установка зависимостей                        |
| `npm run dev`          | Запуск dev сервера на `localhost:4321`       |
| `npm run build`        | Сборка проекта в папку `./dist/`             |
| `npm run preview`      | Предварительный просмотр сборки               |
| `npm run astro ...`    | Выполнение команд Astro CLI                   |
| `npm run check`        | Проверка кода с помощью Biome                 |

## 🔧 Настройка для вашего проекта

1. **Обновите информацию в `package.json`:**
   - Измените `name` на название вашего проекта
   - Обновите `version` при необходимости

2. **Настройте `astro.config.mjs`:**
   - Замените `USERNAME` на ваш GitHub username
   - Обновите `base` на название вашего репозитория

3. **Обновите контент:**
   - Измените информацию в `src/pages/index.astro`
   - Добавьте свои проекты и задачи в `src/content/`

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 👤 Автор

**Сергей Меркулов**
- Портфолио: [https://YOUR_USERNAME.github.io/astro-aria](https://YOUR_USERNAME.github.io/astro-aria)

---

*Создано с ❤️ используя Astro*

This is a personal blog, portfolio, or blog template created for [Astro](https://astro.build).

Astro port of [aria](https://github.com/static-templates/aria).

![Aria Template Cover Photo](https://github.com/ccbikai/astro-aria/blob/main/public/assets/images/cover.png?raw=true)

You can install this theme with the [Astro](https://astro.build) command like so:

```js
npm create astro@latest -- --template ccbikai/astro-aria
```
