# Lordle sideproject

A puzzle game based on Wordle from NY Times

[Demo](https://lordle-77474.web.app/)

* test account : ttt
* test password : ttt

## Main Function:

1. Two game difficulties to increase playability

2. A Leaderboard that records member scores

3. RWD design for different devices

4. Optimize user experience and visual feedback

## Tech:

| Technique | Description |
| --------- | ----------- |
| React Hook| Components for custom hook,useState, useEffect, useContext, useMemo, useCallback |
| React Router(v6) | Routing in SPA |
| Firebase | Firestore ,Hosting |
| Stylus | Organizing CSS syntax |
| Git | Control system designed |
| Prettier | Keep coding style |

## Function Description:

- Member Page

In order to simplify the complicated steps during registration, this project uses a customized input box to increase players' paying willingness . 
I used Firestore tool to record member data , and simulate session mechanism by localstorage .

![image](https://nash15963.github.io/lordle/img/login.png)

- Game Page

The Game page includes the board, keyboard and upper function bar .
In the keyboard function, I set up the 'keydown' listener, for bringing every player having a better typping experience in the different sizes of device .

The leaderboard displayed the rankings and scores of different players, players can find the score records in different modes by the personal information .

![image](https://nash15963.github.io/lordle/img/main.png)

## Features
![image](https://nash15963.github.io/lordle/img/LordleIntrodution.gif)

## Contact

nash1596315963@gmail.com