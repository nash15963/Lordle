# Lordle sideproject

[Demo](https://lordle-77474.web.app/)

A puzzle game based on Wordle from NY Times

## Main Function:

1. Two game difficulties to increase playability

2. A Leaderboard that records member scores

3. RWD design for different devices

## Tech:

| Technique | Description |
| --------- | ----------- |
| React Hook| Components for custom hook,useState, useEffect, useContext, useMemo, useCallback |
| React Router(v6) | routing in SPA |
| Firebase | firestore ,Hosting |
| Stylus | Organizing CSS syntax |
| Git | control system designed |
| Prettier | Keep coding style |

## 功能說明:

- 登入頁面

Firestore紀錄會員帳號密碼，並使用localstorage模擬session機制，Router v6跳轉頁面。

![image](https://nash15963.github.io/lordle/img/login.png)
<!-- 會員頁面圖片 -->

- 遊戲主頁面

主要畫面中包括字格，鍵盤與上方功能欄

![image](https://nash15963.github.io/lordle/img/main.png)
<!-- 主畫面圖片 -->

- 個人遊戲紀錄 :

第一個彈出框顯示玩家遊戲紀錄

![image](https://nash15963.github.io/lordle/img/Profile.png)

- 玩家排行 :

第二個彈出框顯示玩家間的總積分，並顯示不同模式下的前三名

![image](https://nash15963.github.io/lordle/img/Rank.png)

- 遊戲難度 :

第三個彈出框用來轉換遊戲難度

- 遊戲說明 :

第四個彈出框用來說明遊玩方法

![image](https://nash15963.github.io/lordle/img/des.png)

- 夜間/日照模式 :

第五個選擇鈕切換背景主題

![image](https://nash15963.github.io/lordle/img/light.png)

- 遊戲結束 :

當遊戲結束會結算本次使用了幾次機會猜到答案，使用者點擊分享連結才能結束loading時間，否則需要等待五分鐘才會出現下次對局

![image](https://nash15963.github.io/lordle/img/gameover.png)

- 登出遊戲 :

第六個彈出框登出會員

***

### 使用者體驗優化:

- 字格

渲染使用者正在輸入的字母，並以邊框變色處理。

- 鍵盤

增加keydown的監聽，供使用者在不同機型上可以使用合適的輸入工具，已使用字母會反饋在螢幕鍵盤上

- 單字輸入反應

若輸入字不存在於字庫則出現Toast並搖晃字框
![image](https://nash15963.github.io/lordle/img/Toast.png)






