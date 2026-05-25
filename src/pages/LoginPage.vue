<template>
    <!-- 登入註冊頁面 -->
    <div class="loginPage">
        <img src="../assets/phone.png" alt="" class="phoneImage">
        <!-- 登入註冊表單 -->
        <div class="loginForm">
            <img src="../assets/logo.svg" alt="Framio" class="logo">
            <form @submit.prevent>
                <input type="email" placeholder="電子信箱">
                <input v-if="!isLogin" type="text" placeholder="使用者名稱">
                <input type="password" placeholder="密碼">
                <button type="submit" class="loginButton">
                    {{ isLogin ? "登入" : "註冊" }}
                </button>
                <!-- OR 分隔線 -->
                <div class="divider">
                    <span class="divider-line"></span>
                    <span class="divider-text">OR</span>
                    <span class="divider-line"></span>
                </div>
                <p @click="isLogin = !isLogin" class="info">
                    {{ isLogin ? "還沒有帳號？點擊註冊" : "已有帳號？點擊登入" }}
                </p>
                <!-- 為註冊頁面時，顯示同意勾選框 -->
                <div v-if="!isLogin" class="agreement">
                    <input type="checkbox" /> 勾選表示同意隱私協議和使用規範
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const isLogin = ref(true);
</script>

<style scoped>
.loginPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: var(--ig-bg);
  padding: 0 10vw;
}

.phoneImage {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.loginForm {
  justify-self: start;
  border: 1px solid var(--ig-border);
  border-radius: 4px;
  background: var(--ig-white);
  padding: 40px 40px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
}

.logo {
  height: 51px;
  object-fit: contain;
}

.loginForm > form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

input {
  background: var(--ig-bg);
  border-radius: 3px;
  border: 1px solid var(--ig-border);
  font-size: 12px;
  padding: 10px 8px;
  width: 100%;
}

input::placeholder {
  color: var(--ig-secondary);
}

input:focus {
  border-color: #a8a8a8;
}

.loginButton {
  background: var(--ig-blue);
  padding: 8px 0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  margin-top: 4px;
  cursor: pointer;
}

.loginButton:hover {
  background: #1aa3ff;
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--ig-border);
}

.divider-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--ig-secondary);
  letter-spacing: 1px;
}

.info {
  color: var(--ig-blue);
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.agreement {
  color: var(--ig-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}
</style>
