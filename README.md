# SocialNetworkingSite

以 Vue 3 建構的社交網路網站前端專案，仿照 Instagram 風格設計，提供貼文瀏覽、互動、個人主頁等功能。

## 技術棧

| 分類     | 技術                         |
| -------- | ---------------------------- |
| 框架     | Vue 3 (`<script setup>` SFC) |
| 建構工具 | Vite                         |
| 路由管理 | Vue Router 4                 |
| 狀態管理 | Vuex 4                       |

## 功能特色

- **首頁動態牆** — 瀏覽所有使用者的貼文（圖片 + 文字）
- **貼文互動** — 按讚、收藏、新增留言
- **貼文詳情** — 點擊貼文展開 Modal 查看完整內容與留言
- **上傳貼文** — 透過導覽列發佈新貼文
- **個人主頁** — 查看自己的 Posts / Like / Favorite 分頁
- **搜尋功能** — 搜尋使用者或貼文
- **登入 / 註冊** — 表單切換，含隱私協議勾選

## 頁面路由

| 路徑             | 頁面                | 說明         |
| ---------------- | ------------------- | ------------ |
| `/`              | HomePage            | 首頁動態牆   |
| `/search_result` | SearchPage          | 搜尋結果頁   |
| `/profile`       | ProfilePage         | 個人主頁     |
| `/profile/edit`  | ProfileEdittingPage | 編輯個人資料 |
| `/login`         | LoginPage           | 登入 / 註冊  |

## 專案結構

```
src/
├── assets/          # 靜態資源（圖片、SVG 圖示、樣式）
├── components/      # 共用元件
│   ├── NavBar.vue       # 導覽列（搜尋、發布、頭像）
│   ├── PostList.vue     # 貼文列表容器
│   ├── PostItem.vue     # 單則貼文
│   ├── PostDetails.vue  # 貼文詳情 Modal
│   ├── PostUpload.vue   # 上傳貼文 Modal
│   ├── PostActions.vue  # 貼文互動按鈕（按讚、收藏）
│   ├── TheAvatar.vue    # 使用者頭像
│   ├── TheButton.vue    # 通用按鈕
│   ├── TheIcon.vue      # SVG 圖示元件
│   ├── TheLayout.vue    # 頁面版面配置
│   └── TheModal.vue     # 通用 Modal 框架
├── pages/           # 頁面元件
├── store/           # Vuex 狀態管理
│   ├── index.js         # 根 Store（Modal 顯示狀態、按讚/收藏邏輯、新增留言）
│   └── comment/         # comment 子模組（使用者資料與貼文資料）
├── routes.js        # Vue Router 路由設定
├── App.vue          # 根元件
└── main.js          # 應用程式入口
```

## 快速開始

### 安裝依賴

```bash
yarn install
```

### 啟動開發伺服器

```bash
yarn dev
```

### 建置正式版本

```bash
yarn build
```

### 預覽正式版本

```bash
yarn preview
```

## 推薦開發環境

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（請停用 Vetur）

---

Copyright &copy; 2023 SamYen. All Rights Reserved.
