<template>
    <!-- 談窗內容組件 -->
    <TheModal @close="store.commit('changeShowPostUpload', false)">
        <!-- 貼文詳情內容 -->
        <div class="postUpload">
            <div class="upload-header">
                <span>新增貼文</span>
                <button class="upload-close" @click="store.commit('changeShowPostUpload', false)">
                    <TheIcon icon="close" />
                </button>
            </div>
            <label class="upload">
              <img v-if="imageObjUrl" :src="imageObjUrl" class="preview">
              <!-- <TheIcon v-else icon="upload-image" /> -->
              <img id="imgIcon" v-else src="../assets/UploadImage.png" alt="">
              <!-- 上傳圖片類型文件 -->
              <input 
                type="file" 
                accept="image/*" 
                class="fileChooser"
                @change="handleImageUpload"
              >
            </label>
            <!-- 貼文輸入框 -->
            <div class="postContent">
                <textarea 
                    placeholder="寫的甚麼吧..."
                    class="postContentInput">
                </textarea>
                <!-- 沒有圖片時，無法關閉 -->
                <TheButton v-if="!imageObjUrl"
                  class="pubBtn"
                >
                上傳
                </TheButton>
                <TheButton v-else
                  class="pubBtn"
                  @close="store.commit('changeShowPostUpload', false)"
                >
                上傳
                </TheButton>
              </div>
        </div>
    </TheModal>
</template>

<script setup>
import TheButton from './TheButton.vue';
import TheIcon from './TheIcon.vue';
import TheModal from './TheModal.vue';
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const imageObjUrl = ref('');

async function handleImageUpload(e) {
  //-- 獲取用戶選擇的檔案
  const imageFile = e.target.files[0];
  if(imageFile) {
    //-- 圖片路徑
    imageObjUrl.value = URL.createObjectURL(imageFile);
  }
} 
</script>

<style scoped>
.postUpload {
  width: 600px;
  max-width: 90vw;
  height: 500px;
  display: grid;
  grid-template-rows: 43px 1fr auto;
}

.upload-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid var(--ig-border);
  font-size: 16px;
  font-weight: 600;
}

.upload-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

.upload-close :deep(svg) {
  width: 18px;
  height: 18px;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  background: var(--ig-bg);
}

.upload > #imgIcon {
  width: 120px;
  height: 120px;
  opacity: 0.5;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  border-top: 1px solid var(--ig-border);
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
}

.postContentInput {
  flex: 1;
  border: none;
  background: none;
  resize: none;
  padding: 12px 0;
  font-size: 14px;
  height: 60px;
}

.postContentInput::placeholder {
  color: var(--ig-secondary);
}

.pubBtn {
  flex-shrink: 0;
}
</style>