---
layout: ../../layouts/post.astro
title: Задание №2
description: Обзор готовых решений для реализации подписки на корм (auto-order) с учетом - стабильности, поддержки 3DS, интеграции с WooCommerce, регулярных обновлений, наличия нужного функционала.
---

### Поиск готового решения
Опишите, какие готовые плагины (или комбинации) вы бы рассмотрели для реализации этой задачи, и на что обращали бы внимание при выборе (например: стабильность, поддержка разработчика, интеграция с WooCommerce, регулярные обновления, наличие нужного функционала).

---

## Рекомендации (кратко)

**Главный вариант (при наличии бюджета и желании «проверенного» решения):**

* **WooCommerce Subscriptions (официальный платный плагин)** — управление подписками, все основные фичи (trial, sign-up fee, синхронизация платежей и пр.). ([WooCommerce][1])
* **Плагин PSP с поддержкой токенизации / recurring для РФ/СНГ** — например **CloudPayments** (официальный модуль, widget + токенизация, PCI-соответствие) или **Fondy** (поддержка recurring, webhook, WooCommerce плагин). Эти PSP организуют хранение токенов/референсов и 3DS — критично для автосписаний. ([WordPress.org][2])
* **RetailCRM — официальный модуль интеграции** (WooCommerce ↔ RetailCRM) для передачи заказов/контактов/кастом-полей подписки. ([help.retailcrm.pro][3])

**Бюджетный / быстрый MVP (меньше затрат, но с компромиссами):**

* **WebToffee / YITH / WP Desk (Flexible Subscriptions)** — альтернативы, которые реализуют подписки и дешевле/есть бесплатные версии; их комбинация с Fondy/CloudPayments позволит запустить MVP быстрее. ([WebToffee][4])

**Доп. расширения для удобства:**

* **All Products for WooCommerce Subscriptions** — если нужно дать опцию «сделать любой товар подпиской» (добавляет планы к существующим товарам). ([WooCommerce][5])
* **Retry / failed payment addons (Flexible Subscriptions retry, etc.)** — для автоматических повторных попыток и уменьшения churn. ([WP Desk][6])

---

## Рекомендуемые связки (конкретно)

1. **Enterprise / надёжный запуск**

   * WooCommerce Subscriptions (официальный) + CloudPayments (или Fondy/Tinkoff, если у вас договор с ними) + RetailCRM (официальный модуль).
   * Почему: официальная Subscriptions + поддерживаемый PSP даёт максимум фич, интеграцию с токенизацией/3DS и предсказуемую поддержку. ([WooCommerce][1])

2. **MVP / ограниченный бюджет**

   * WebToffee Subscriptions (или YITH) + Fondy/CloudPayments + RetailCRM plugin.
   * Почему: дешевле, быстрее развернуть, но нужно детально тестировать edge-cases (см. чек-лист).

3. **Если нужен «развернутый» Autoship-подход**

   * Autoship/Autoship Cloud / QPilot (для более сложного управления расписаниями и логистикой) — рассмотреть если планируется большая масса подписок и нужны advanced scheduling / inventory forecasting. (Проверить доступность для РФ/СНГ PSP). ([Autoship Cloud powered by QPilot][7])

---

## На что обращать внимание при выборе плагина / комбинации (чек-лист)

1. **Поддержка автоматических платежей (Tokenization / vault):** плагин PSP должен поддерживать хранение токена/recurring charges и 3DS при привязке карты. (не храните PAN/CVV локально). ([WordPress.org][2])
2. **Совместимость с WooCommerce Subscriptions** (если вы выбираете официальный Subscriptions — проверьте, что ваш PSP числится в списке поддерживаемых шлюзов для «Automatic payments»). ([WooCommerce][8])
3. **Интеграция с RetailCRM:** наличие официального/поддерживаемого модуля, возможность передавать кастом-поля (subscription_id, next_run_date, status), webhooks, идемпотентные запросы и логирование. ([help.retailcrm.pro][3])
4. **Обновления и поддержка:** частота обновлений плагина, совместимость с последним PHP/WooCommerce, SLA/поддержка разработчика (важно при гособслуживании РФ/СНГ — у вас мало времени на баги в пиковых продажах).
5. **Юридические/сюда-персональные требования:** хранение ПДн, согласие на автосписание, журнал согласий; соответствие требованиям PSP и локальному законодательству.
6. **Логирование, retry-механика и мониторинг ошибок:** просматривать логи failed payments, webhook failures; возможность настраивать правила повторных попыток.
7. **Поведение «смешанной корзины» (разовый + подписной товар):** плагин должен ясно показывать пользователю, что произойдёт при оплате и как будут обрабатываться разовые позиции.
8. **Тестовая среда / Sandbox:** наличие у PSP и RetailCRM тестового режима — обязательно для QA 3DS/decline flows. ([WordPress.org][2])

---

## Технические вопросы, которые стоит задать перед покупкой/внедрением

* Поддерживает ли PSP **recurring without customer re-auth** (token charge) и 3DS workflow при привязке карты? (важно для РФ).
* Есть ли готовая совместимость/сертификация с WooCommerce Subscriptions (официальный список поддерживаемых шлюзов)? ([WooCommerce][8])
* Может ли RetailCRM принимать кастомные сущности/поля для подписок и есть ли у них sandbox для тестов? ([help.retailcrm.pro][3])
* Какая стоимость лицензии плагина и дополнительных модулей (годовая)? (WooCommerce Subscriptions — платный). ([WooCommerce][9])

---

## Практические рекомендации по порядку работ

1. Выделить PSP (CloudPayments / Fondy / Tinkoff / Sber) и попросить их tech-docs по recurring/tokenization и тестовым ключам. ([WordPress.org][2])
2. На staging: установить WooCommerce Subscriptions (или выбранный альтернативный плагин) + PSP plugin + RetailCRM plugin.
3. Прогнать сценарии: привязка карты (3DS), успешный recurring, отклонённый recurring, retry, mixed cart, изменение/отмена подписки и синхронизация с RetailCRM.
4. После успешного QA — выкат в прод, мониторинг первых дней (логирование webhook/psp/retailcrm).

---



<div style="display: flex; justify-content: space-between; align-items: center; margin: 2rem 0;">
  <!-- Previous Task Button -->
  <a href="/superpet-tasks/task/task-1" class="prev-task-button">
    <div style="display: flex; align-items: center; justify-content: center; width: 1.25rem; height: 1.25rem; border: 1px solid #f3f4f6; border-radius: 9999px; margin-right: 0.5rem;">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </div>
    <p style="leading: none; margin: 0;">Задание №1</p>
  </a>

  <!-- Next Task Button -->
  <a href="/superpet-tasks/task/task-3" class="next-task-button">
    Задание №3
    <div style="display: flex; align-items: center; justify-content: center; width: 1.25rem; height: 1.25rem; border: 1px solid #f3f4f6; border-radius: 9999px; margin-left: 0.5rem;">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  </a>
</div>
