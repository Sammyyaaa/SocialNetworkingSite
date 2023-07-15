<template>
    <!-- 談窗內容組件 -->
    <TheModal @close="store.commit('changeShowPostUpload', false)">
        <!-- 貼文詳情內容 -->
        <div class="postUpload">
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
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}
.upload > #imgIcon {
  width: 275px;
  height: 295px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}
.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.postContentInput::placeholder {
  color: #757575;
}


.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
</style>