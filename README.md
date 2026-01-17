
# 📘 CA Monk Blog – Frontend Assignment

A responsive blog reading interface inspired by the **CA Monk Blog**, built as part of a frontend interview assignment.
The application displays a list of articles on the left and a detailed blog view on the right, closely matching the provided UI design.

---

## 🚀 Features

* 📄 **Two-panel blog layout**

  * Left: Latest articles list
  * Right: Selected blog details
* ⏱️ **Read time calculation**
* 🏷️ **Category tags**
* 🖼️ **Cover image support**
* 📤 **Share Article button**
* 📱 **Fully responsive layout**
* ⚡ **Fast data fetching with React Query**
* 🎨 **Styled using Tailwind CSS + shadcn/ui**

---

## 🧱 Tech Stack

| Technology                | Usage                   |
| ------------------------- | ----------------------- |
| **React + TypeScript**    | UI development          |
| **Vite**                  | Fast build tool         |
| **Tailwind CSS**          | Styling                 |
| **shadcn/ui**             | Reusable UI components  |
| **@tanstack/react-query** | Data fetching & caching |
| **json-server**           | Mock backend API        |

---

## 📂 Project Structure

```
src/
├── api/
│   └── blogs.ts
├── components/
│   ├── BlogCard.tsx
│   ├── BlogList.tsx
│   └── BlogDetail.tsx
├── lib/
│   └── timeAgo.ts
├── pages/
│   └── Home.tsx
├── types/
│   └── blog.ts
├── App.tsx
└── main.tsx

db.json
```

---

## 🔌 API (Mock Backend)

* Powered by **json-server**
* Data stored in `db.json`
* Base URL:

```
http://localhost:3001
```

Endpoints:

```
GET /blogs
GET /blogs/:id
```

---

## ▶️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the mock API server

```bash
npm run server
```

> Runs at `http://localhost:3001`

### 3️⃣ Start the frontend

```bash
npm run dev
```

> App runs at `http://localhost:5173`

---

## 🧪 Assumptions

* Author details are not included in the API, so they are not displayed
* Likes are UI-only (no backend support)
* Focus is on **UI accuracy and code quality**

---

## 📸 Screenshots

> Matches the provided assignment design (header, hero section, article layout, footer).

---

## 🧑‍💻 Author

**Ganesh Pandey**
B.Tech (AI & ML)
Frontend Developer
5⭐ HackerRank (Java)
250+ LeetCode Problems

---

## 📄 License

This project was created **only for interview/assessment purposes**.
---

