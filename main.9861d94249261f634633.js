(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,e){"use strict";e.r(n);var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.querySelector("body"),startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')},r=null;a.startBtn.addEventListener("click",(function(){r=setInterval((function(){var t,n;a.body.style.backgroundColor=o[(t=0,n=o.length-1,Math.floor(Math.random()*(n-t+1)+t))]}),1e3),a.startBtn.disabled=!0,console.log("setInterval started!-!-!-!")})),a.stopBtn.addEventListener("click",(function(){clearInterval(r),a.startBtn.disabled=!1,console.log("setInterval stopped!")}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.9861d94249261f634633.js.map