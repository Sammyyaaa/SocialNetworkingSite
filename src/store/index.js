import { createStore } from "vuex";

//-- import 子模塊
import { comment } from "./comment/index";

//-- 頂級 store
export const store = createStore({
    //-- 配置子模塊
    modules: {
        comment,
    },
    state() {
        return {
            //-- 彈出上傳視窗，預設為 false
            showPostUpload: false,
            //-- 彈出貼文視窗，預設為 false
            showPostDetails: false,
            id: 1,
        };
    },
    mutations: {
        //-- 彈出上傳視窗
        changeShowPostUpload(state, show) {
            state.showPostUpload = show;
        },
        //-- 彈出貼文視窗
        changeShowPostDetails(state, payload) {
            state.showPostDetails = payload.show;
            state.id = payload.userId;
        },
        //-- 動態ID
        changeId(state, newId) {
            state.id = newId;
        },
        //-- like 數改變
        likeChange(state, userID){
            let  users = state.comment.users[userID-1]
            if(users.likeState) {
                users.likeState = false;
                users.like -= 1;
            } else {
                users.likeState = true;
                users.like += 1;
            };
        },
        // 收藏數改變
        favoriteChange(state, userID){
            const  users = state.comment.users[userID-1]
            if(users.favoriteState) {
                users.favoriteState = false;
                users.favorite -= 1;
            } else {
                users.favoriteState = true;
                users.favorite += 1;
            };
        },
        //-- 新增評論
        addComment(state, payload) {
            const mine = state.comment.mine
            const users = state.comment.users[payload.userId-1];
            const replyTexts = users.response;
            const addReplyText = payload.replyText.value;
            replyTexts.push({ 
                id:mine.id, 
                name:mine.name, 
                ReplyText:addReplyText,
                photo:mine.photo });
        },
    },
    actions: {
    },
});