// ************* admin page *****************
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

// ******* marketing *********

// category music page
// const category1 = {
//     handleCategory: function() {
//         const categoryList = document.querySelectorAll(
//             ".category__list .category__list-item"
//         );
//         const categoryMusic = document.querySelectorAll(".category__music");

//         categoryList.forEach(function(item, index) {
//             item.onclick = function() {
//                 categoryList.forEach(function(e) {
//                     e.classList.remove("active");
//                 });
//                 categoryMusic.forEach(function(e) {
//                     e.classList.remove("active");
//                 });
//                 item.classList.add("active");
//                 categoryMusic.forEach(function(e, indexMusic) {
//                     if (index == indexMusic) {
//                         e.classList.add("active");
//                     }
//                 });
//             };
//         });
//     },
//     start: function() {
//         this.handleCategory();
//     },
// };
// category1.start();

// close/open popup edits
// const popUp = {
//     handlePopup: function() {
//         const popupBtn = document.querySelector("#outbtn");
//         const popUpEdit = document.querySelector(".edit-popup");
//         const editBtn = document.querySelectorAll(".item-create");
//         editBtn.forEach(function(e) {
//             e.onclick = function() {
//                 popUpEdit.classList.add("active");
//             };
//         });
//         popupBtn.onclick = function() {
//             popUpEdit.classList.remove("active");
//         };
//     },
//     start: function() {
//         this.handlePopup();
//     },
// };
// popUp.start();

// menubar
// const menuAdmin = {
//     handleMenuAdmin: function() {
//         console.log("123");
//         const menuContent = document.querySelectorAll(".menu-bar");
//         const menuLink = document.querySelectorAll(".menuItem");
//         console.log(menuLink);
//         menuLink.forEach(function(e, index) {
//             e.onclick = function() {
//                 console.log("123");
//                 menuLink.forEach(function(item) {
//                     item.classList.remove("active");
//                 });
//                 menuContent.forEach(function(item) {
//                     item.classList.remove("active");
//                 });
//                 e.classList.add("active");

//                 menuContent.forEach(function(item, indexContent) {
//                     if (index == indexContent) {
//                         item.classList.add("active");
//                     }
//                 });
//             };
//         });
//     },
//     start: function() {
//         this.handleMenuAdmin();
//     },
// };
// menuAdmin.start();

// ********** Home page *********

// const pause = false;
// const playList = document.querySelectorAll(".main__post-like");
// const songName = document.querySelector(".player-title");
// const songAuthor = document.querySelector(".player-author");
// const songImg = document.querySelector(".player__img");
// const songUrl = document.querySelector(".progress__song");
// const playBtn = document.querySelector(".player-play");
// const songTime = document.querySelectorAll("#progress__input");
// const nextBtn = document.querySelector(".player-next");
// const prevBtn = document.querySelector(".player-prev");
// const textTime = document.querySelector("#progress__time");

// const music = {
//     playing: true,
//     currentIndex: 0,
//     // data temporary database

//     defineProperties: function() {
//         Object.defineProperty(this, "currentSong", {
//             get: function() {
//                 return this.songs[this.currentIndex];
//             },
//         });
//     },
//     songs: [{
//             id: "0",
//             name: "EDM",
//             author: "Chưa biết tên",
//             path: "/music/khong_loi/pop/bensound-hey.mp3",
//             image: "/img/img_music/1.jpg",
//             time: "02:30",
//             like: "10",
//         },
//         {
//             id: "1",
//             name: "Navada",
//             author: "Chưa biết tên",
//             path: "/music/navada.mp3",
//             image: "/img/img_music/2.jpg",
//             time: "02:30",
//             like: "11",
//         },
//         {
//             id: "2",
//             name: "bensound-acousticbreeze",
//             author: "Benjamin Tissot",
//             path: "/music/khong_loi/acoustic/bensound-acousticbreeze.mp3",
//             image: "/img/img_music/khong_loi/acoustic/acousticbreeze.jpg",
//             time: "02:30",
//             like: "11",
//         },
//         {
//             id: "1",
//             name: "bensound-buddy",
//             author: "Benjamin Tissot",
//             path: "/music/khong_loi/acoustic/bensound-buddy.mp3",
//             image: "/img/img_music/khong_loi/acoustic/buddy.jpg",
//             time: "02:30",
//             like: "11",
//         },
//     ],

//     // const playPromise = songUrl.play();

//     // // In browsers that don’t yet support this functionality,
//     // // playPromise won’t be defined.
//     // if (playPromise !== undefined) {
//     //     playPromise.then(function() {

//     //     }).catch(function(error) {
//     //         // Automatic playback failed.
//     //         // Show a UI element to let the user manually start playback.
//     //     });
//     // }

//     handleEvent: function() {
//         // xử lý khi click nút player
//         playBtn.onclick = function() {
//
//             if (music.playing) {
//                 songUrl.play();
//             } else {
//                 songUrl.pause();
//             }
//         };
//         // sử dụng animate web api để quay img music hay CD
//         const songAnimate = songImg.animate(
//             [{
//                 transform: "rotate(360deg)",
//             }, ], {
//                 duration: 10000, // quay trong bao nhiêu lâu
//                 iterations: Infinity, // quay bao nhiêu lần
//             }
//         );
//         songAnimate.pause();

//         // khi bài hát được chạy
//         songUrl.onplay = function() {
//             // sau khi bài hát chạy thì giá trị sẽ được gán là false
//             music.playing = false;
//             playBtn.classList.add("fa-pause");
//             songAnimate.play();
//         };
//         // dừng bài hát
//         songUrl.onpause = function() {
//             // lần click tiếp theo giá trị này đã là false thì sẽ lột vào đây và ngược lại
//             music.playing = true;
//             playBtn.classList.remove("fa-pause");
//             songAnimate.pause();
//         };

//         // xử lý thanh progress chạy theo tiến độ bài nhạc
//         songUrl.ontimeupdate = function() {
//             if (!!songUrl.duration) {
//                 const songPercent = Math.floor(
//                     (songUrl.currentTime / songUrl.duration) * 100
//                 );
//                 songTime.value = songPercent;
//             }
//         };

//         // tua nhạc với hàm onchange của html dom audioend
//         songTime.onchange = function(e) {
//             const seekTime = (songUrl.duration / 100) * e.target.value;
//             songUrl.currentTime = seekTime;
//         };

//         // chuyển bài tiếp theo
//         nextBtn.onclick = function() {
//             music.nextSong();
//             songUrl.play();
//         };
//         // lùi bài nhạc trước
//         prevBtn.onclick = function() {
//             music.prevSong();
//             songUrl.play();
//         };
//         //next song when ended
//         songUrl.onended = function() {
//             nextBtn.click();
//         };
//     },

//     choseMusic: function() {
//         // let listMusic = document.querySelectorAll(".post .like");
//         // console.log(listMusic);
//         // listMusic.forEach(function() {
//         //     this.addEventListener("click", function(e) {
//         //         console.log(e);
//         //     });
//         // });
//     },

//     nextSong: function() {
//         const afterMusic = music.currentIndex;
//         music.currentIndex++;
//         if (music.currentIndex >= music.songs.length) {
//             music.currentIndex = 0;
//         }
//         music.loadCurrentSong();
//     },

//     prevSong: function() {
//         music.currentIndex--;
//         if (music.currentIndex < 0) {
//             music.currentIndex = music.songs.length - 1;
//         }
//         music.loadCurrentSong();
//     },

//     // đẩy đúng giá trị của bài hát vào khung chơi nhạc
//     loadCurrentSong: function() {
//         songName.innerHTML = this.currentSong.name;
//         songAuthor.innerHTML = this.currentSong.author;
//         songImg.src = this.currentSong.image;
//         songUrl.src = this.currentSong.path;
//     },

//     // render listening history
//     // render: function() {
//     //     const historyMusic = document.querySelector(".menu__history-list");
//     //     const htmlsHistoryMusic = this.songs.map((song) => {
//     //         return;
//     //         `
//     //     <div class="list__item">
//     //         <img class="list__item-img" src="${song.image}" alt="">
//     //         <h4 class="list__item-name">${song.name}</h4>
//     //         <span class="list__item-author">${song.author}</span>
//     //     </div>
//     //     `;
//     //     });
//     //     console.log("123");
//     //     console.log(historyMusic);
//     //     historyMusic.innerHTML = htmlsHistoryMusic.join("");
//     // },

//     start: function() {
//         // định nghĩa thuộc tính cho object
//         this.defineProperties();

//         this.choseMusic();

//         this.handleEvent();

//         this.nextSong();

//         this.prevSong();

//         // this.loadCurrentSong();
//     },
// };
// music.start();

// // ---- Notification --------

// let notiBtn = document.querySelector(".right #notiBtn");

// const noti = {
//     handleBtnnotify: function() {
//         let displayNoti = document.querySelector(".notification");
//         notiBtn.onclick = function(e) {
//             e.stopPropagation();
//             displayNoti.classList.toggle("active");
//         };
//         document.onclick = function() {
//             displayNoti.classList.remove("active");
//         };
//     },

//     start: function() {
//         this.handleBtnnotify();
//     },
// };
// noti.start();

// // -------- Menu -------

// const listMenu = {
//     clickMenu: function() {
//         const menuMain = document.querySelectorAll(" .item__option");
//         const menuItem = document.querySelectorAll(".post-list");
//         menuMain.forEach(function(itemMenu, index) {
//             itemMenu.onclick = function(e) {
//                 menuItem.forEach(function(item) {
//                     item.classList.remove("active");
//                 });
//                 menuMain.forEach(function(item) {
//                     item.classList.remove("active");
//                 });
//                 itemMenu.classList.add("active");

//                 menuItem.forEach(function(itemList, indexList) {
//                     if (index > 4) {
//                         index = index - 5;
//                         if (index == indexList) {
//                             itemList.classList.add("active");
//                         }
//                     } else {
//                         if (index == indexList) {
//                             itemList.classList.add("active");
//                         }
//                     }
//                 });

//                 // document.querySelectorAll("post-list-" + index).classList.add("active");
//             };
//         });
//     },

//     start: function() {
//         this.clickMenu();
//     },
// };
// listMenu.start();

// // -------- menu create page --------
// const category = {
//     handleCategory: function() {
//         const categoryList = document.querySelectorAll(
//             ".category__list .category__list-item"
//         );
//         const categoryMusic = document.querySelectorAll(".category__music");

//         categoryList.forEach(function(item, index) {
//             item.onclick = function() {
//                 categoryList.forEach(function(e) {
//                     e.classList.remove("active");
//                 });
//                 categoryMusic.forEach(function(e) {
//                     e.classList.remove("active");
//                 });
//                 item.classList.add("active");
//                 categoryMusic.forEach(function(e, indexMusic) {
//                     if (index == indexMusic) {
//                         e.classList.add("active");
//                     }
//                 });
//             };
//         });
//     },
//     start: function() {
//         this.handleCategory();
//     },
// };
// category.start();
// // musicPopup

// const musicFooter = {
//     handleMusicFooter: function() {
//         const musicFooterTitle = document.querySelector(".music-footer");
//         const musicPopup = document.querySelector(".music-popup");
//         const btnOut = document.querySelector(".icon__out");

//         musicFooterTitle.onclick = function() {
//             var pos = -100;
//             var id = setInterval(frame, 10);

//             function frame() {
//                 if (pos == -10) {
//                     clearInterval(id);
//                 } else {
//                     pos = pos + 2;
//                     musicPopup.style.bottom = pos + "vh";
//                 }
//             }
//         };
//         btnOut.onclick = function() {
//             var pos = -10;
//             var id = setInterval(frame, 10);

//             function frame() {
//                 if (pos == -100) {
//                     clearInterval(id);
//                 } else {
//                     pos = pos - 2;
//                     musicPopup.style.bottom = pos + "vh";
//                 }
//             }
//         };
//     },
//     start: function() {
//         this.handleMusicFooter();
//     },
// };
// musicFooter.start();
