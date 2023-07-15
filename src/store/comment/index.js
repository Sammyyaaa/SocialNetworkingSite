export const comment = {
    state() {
        return {
            mine: {
                id: 0,
                name: "SamYen",
                photo: "../src/assets/photo/0.jpg",
                postImages: [
                    {
                        postImage:"https://picsum.photos/id/350/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/351/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/352/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/353/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/354/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/355/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/356/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/357/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/358/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/360/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/361/1125/915"
                    },
                    {
                        postImage:"https://picsum.photos/id/362/1125/915"
                    },
                ],
            },
            users: [
                {
                    id: 1,
                    name: "Will",
                    like: 168,
                    likeState: true,
                    favorite: 77,
                    favoriteState: true,
                    time: 5,
                    photo: "./src/assets/photo/1.jpg",
                    postImage: "https://picsum.photos/id/250/1125/915",
                    postText: "快門點亮瞬間的光輝，照見生活每一角落的秘密。只有停格的永恆，與愛的紀念。",
                    response: [
                        {
                            id: 2,
                            name: "Barry",
                            ReplyText: "讓我想起了許多珍貴的回憶!",
                            photo: "./src/assets/photo/2.jpg",
                        },
                        {
                            id: 3,
                            name: "Zoe",
                            ReplyText: "從攝影中獲得最大有趣體驗!",
                            photo: "./src/assets/photo/3.jpg",
                        },
                        {
                            id: 4,
                            name: "Evan",
                            ReplyText: "我喜歡這種將相機視為見證人生的觀點，真的很獨特",
                            photo: "./src/assets/photo/4.jpg",
                        },
                        {
                            id: 5,
                            name: "Jessica",
                            ReplyText: "這句話讓我想起了我的攝影熱情",
                            photo: "./src/assets/photo/5.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "相機確實為風景披上了時間的薄紗，非常美麗的描繪",
                            photo: "./src/assets/photo/6.jpg",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Barry",
                    like: 8,
                    likeState: false,
                    favorite: 7,
                    favoriteState: false,
                    time: 1,
                    photo: "./src/assets/photo/2.jpg",
                    postImage: "https://picsum.photos/id/251/1125/915",
                    postText: "沿著山谷深入，你能聽到風的樂章。它在石壁之間遊走，拂動樹枝，喚醒每一寸土地的生命力。",
                    response: [
                        {
                            id: 1,
                            name: "Will",
                            ReplyText: "可以感受到大自然的魔力，令人敬畏!",
                            photo: "./src/assets/photo/1.jpg",
                        },
                        {
                            id: 3,
                            name: "Zoe",
                            ReplyText: "我喜歡你如何把山描述成沉默的說書人!",
                            photo: "./src/assets/photo/3.jpg",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "Zoe",
                    like: 97,
                    likeState: true,
                    favorite: 88,
                    favoriteState: true,
                    time: 7,
                    photo: "./src/assets/photo/3.jpg",
                    postImage: "https://picsum.photos/id/265/1125/915",
                    postText: "站在高橋上，目光遠眺，車輛的燈光在昏暗的夜晚裡閃爍，像繁星般點綴在寬闊的馬路上，照亮了這座城市的每一個角落。",
                    response: [
                        {
                            id: 1,
                            name: "Will",
                            ReplyText: "我更加熱愛我所生活的城市!",
                            photo: "./src/assets/photo/1.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "感受到了生活的繁榮與活力",
                            photo: "./src/assets/photo/7.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "每個車窗都是一幅畫。這個比喻非常生動，讓人有更深的思考",
                            photo: "./src/assets/photo/6.jpg",
                        },
                    ],
                },
                {
                    id: 4,
                    name: "Evan",
                    like: 3,
                    likeState: true,
                    favorite: 0,
                    favoriteState: false,
                    time: 2,
                    photo: "./src/assets/photo/4.jpg",
                    postImage: "https://picsum.photos/id/271/1125/915",
                    postText: "蔚藍的海洋上，浪花在陽光的照射下，閃耀著金色的光芒，似乎在說著它們自己的故事，在空氣中飛舞，落回母親大海的懷抱。",
                    response: [
                        {
                            id: 10,
                            name: "Oliver",
                            ReplyText: "好感動!",
                            photo: "./src/assets/photo/10.jpg",
                        },
                        {
                            id: 8,
                            name: "Ian",
                            ReplyText: "你的文字讓我仿佛能感受到海浪的翻騰和浪花的飛舞!",
                            photo: "./src/assets/photo/8.jpg",
                        },
                    ],
                },
                {
                    id: 5,
                    name: "Jessica",
                    like: 244,
                    likeState: false,
                    favorite: 158,
                    favoriteState: false,
                    time: 16,
                    photo: "./src/assets/photo/5.jpg",
                    postImage: "https://picsum.photos/id/254/1125/915",
                    postText: "大樹都彷彿在低聲細語，樹皮裂開痕跡，都是時間在其上留下的歷史。",
                    response: [
                        {
                            id: 1,
                            name: "Will",
                            ReplyText: "樹木隧道充滿了安靜與祥和",
                            photo: "./src/assets/photo/1.jpg",
                        },
                        {
                            id: 3,
                            name: "Zoe",
                            ReplyText: "種對未知世界的期待和探索的慾望",
                            photo: "./src/assets/photo/3.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "找到了對自然的敬畏和尊重",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "讓我想起了我在家鄉的樹木隧道",
                            photo: "./src/assets/photo/7.jpg",
                        },
                    ],
                },
                {
                    id: 6,
                    name: "Aaron",
                    like: 56,
                    likeState: true,
                    favorite: 32,
                    favoriteState: true,
                    time: 19,
                    photo: "./src/assets/photo/6.jpg",
                    postImage: "https://picsum.photos/id/274/1125/915",
                    postText: "霓虹燈的閃爍，如同流星划破夜空，每一塊廣告板都是一個夢想的象徵，燈光照亮每一個角落，也照亮了每一個前來尋夢的人心。",
                    response: [
                        {
                            id: 2,
                            name: "Barry",
                            ReplyText: "每一個夜晚都是新的開始!!",
                            photo: "./src/assets/photo/2.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "每一道光都照亮了我們的夢想",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 5,
                            name: "Jessica",
                            ReplyText: "照亮了我們的踏入外國夢想道路上，出發!",
                            photo: "./src/assets/photo/5.jpg",
                        },
                    ],
                },
                {
                    id: 7,
                    name: "Correia",
                    like: 13,
                    likeState: true,
                    favorite: 7,
                    favoriteState: true,
                    time: 14,
                    photo: "./src/assets/photo/7.jpg",
                    postImage: "https://picsum.photos/id/256/1125/915",
                    postText: "雪山的魅力，早已超越了語言述說，變得如此的高遠而神秘，皚皚白雪覆蓋山頂，那是一種無法用言語形容的壯麗。",
                    response: [
                        {
                            id: 4,
                            name: "Evan",
                            ReplyText: "我想要立刻去看一看雪山的壯麗景色",
                            photo: "./src/assets/photo/4.jpg",
                        },
                        {
                            id: 5,
                            name: "Jessica",
                            ReplyText: "我可以感受到風在吹動，雪在下落",
                            photo: "./src/assets/photo/5.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "想去親自體驗雪山的魅力",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "不得不驚嘆大自然的神奇與壯觀",
                            photo: "./src/assets/photo/7.jpg",
                        },
                    ],
                },
                {
                    id: 8,
                    name: "Ian",
                    like: 22,
                    likeState: false,
                    favorite: 14,
                    favoriteState: false,
                    time: 1,
                    photo: "./src/assets/photo/8.jpg",
                    postImage: "https://picsum.photos/id/257/1125/915",
                    postText: "運河，這個城市的生命線，沒有它，就沒有這座城市的今日繁華。運河見證了城市的興衰，見證了無數的故事和生活片段。",
                    response: [
                        {
                            id: 2,
                            name: "Barry",
                            ReplyText: "感受到運河對於城市的重要性，你的文字很有力量",
                            photo: "./src/assets/photo/2.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "仿佛可以聽到運河的呼吸和城市的脈搏，美妙極了！",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "充滿活力和生命力的運河城市",
                            photo: "./src/assets/photo/7.jpg",
                        },
                    ],
                },
                {
                    id: 9,
                    name: "Xavier",
                    like: 168,
                    likeState: true,
                    favorite: 68,
                    favoriteState: false,
                    time: 12,
                    photo: "./src/assets/photo/9.jpg",
                    postImage: "https://picsum.photos/id/278/1125/915",
                    postText: "從明亮走進黑暗，再從黑暗走出明亮。一段短暫的旅程，讓人深深地體驗到人生的起起伏伏。",
                    response: [
                        {
                            id: 4,
                            name: "Evan",
                            ReplyText: "我從未想過隧道可以有如此深沉的象徵意義",
                            photo: "./src/assets/photo/4.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "你對隧道的描述真是生動極了!",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "你的文字讓我重新認識了隧道，讓我看到了它的美和力量",
                            photo: "./src/assets/photo/7.jpg",
                        },
                    ],
                },
                {
                    id: 10,
                    name: "Oliver",
                    like: 96,
                    likeState: true,
                    favorite: 24,
                    favoriteState: false,
                    time: 4,
                    photo: "./src/assets/photo/10.jpg",
                    postImage: "https://picsum.photos/id/281/1125/915",
                    postText: "腳踏著那塊由七層楓木壓製而成的滑板，在街頭自由地滑行。這就是我對滑板的熱愛，也是對生活的熱愛。",
                    response: [
                        {
                            id: 2,
                            name: "Barry",
                            ReplyText: "原來滑板不僅僅是運動，更是一種藝術和生活方式!",
                            photo: "./src/assets/photo/2.jpg",
                        },
                        {
                            id: 3,
                            name: "Zoe",
                            ReplyText: "這就是滑板，這就是生活",
                            photo: "./src/assets/photo/3.jpg",
                        },
                        {
                            id: 6,
                            name: "Aaron",
                            ReplyText: "是一種挑戰、也是一種享受",
                            photo: "./src/assets/photo/6.jpg",
                        },
                        {
                            id: 7,
                            name: "Correia",
                            ReplyText: "走啊! 開滑!",
                            photo: "./src/assets/photo/7.jpg",
                        },
                    ],
                },
            ],
        };
    },
    // matations: {},
    // actions: {}, 
};