# Browser Task Alert
A Chrome extension that monitors task availability on a web platform and sends real-time Telegram alerts when new tasks become available.
This project demonstrates practical browser automation, DOM monitoring, and notification systems for time-sensitive workflows.
This project is designed to help check task availability on DataAnnotation.Tech.

---

## Features

- Monitors active task listings using DOM-based detection
- Ignores completed or historical tables to avoid false alerts
- Periodic automatic page refresh
- Real-time Telegram notifications
- Lightweight, client-side only
- Uses the authenticated browser session

---

## How It Works

1. A content script runs on the target page.
2. It checks the number of active task rows in the visible table.
3. If the task count meets a defined threshold, an alert is triggered.
4. A background service worker sends a Telegram notification.
5. The page refreshes periodically to keep data up to date.

All logic runs locally in the browser.

---

## Project Structure
browser-task-alert/<br>
├── manifest.json<br>
├── content.js<br>
├── background.js<br>
└── README.md


---

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the project folder

---

## Configuration

### Task Threshold & Intervals

Edit `content.js`:

```js
const CHECK_INTERVAL = 30 * 1000;        // 30 seconds
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
const TARGET_ROWS = 3;                  // Alert when >= 3 rows
```

---
Telegram Notification Setup

Create a Telegram bot using @BotFather, then configure the values below.

Tokens and chat IDs are not included in this repository.

---

## Security & Ethics
- Uses only the user’s logged-in browser session
- Does not bypass authentication
- Does not access backend APIs
- Does not scrape protected content
- Observes only visible DOM elements

---

## Use Case
Designed for platforms where tasks appear briefly and require immediate action.

## Author
Fariz Abdan Khairurrizal
Automation • QA & Automation Specialist
