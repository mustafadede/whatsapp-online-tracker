# wp-online-tracker
WhatsApp online tracker with desktop notification.
## Bookmark
If you want to use as a bookmark copy and paste this to bookmark section
```bash
javascript:void function(){alert("Ready! Set! Go!"),console.clear();const a=document.querySelector("%23main > header > div._24-Ff"),b=document.querySelector("%23main > header > div._24-Ff > div > div > span").innerHTML,c=new MutationObserver(a=>{function c(){new Notification(`${b}`,{body:e,icon:"https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"})}const d=a[0].target.outerText;let e=String,f=new Date().getDay(),g=new Date().getHours(),h=new Date().getMinutes(),i=new Date().getSeconds();d.includes("\xE7evrimi\xE7i")%3F(console.log(`Şu an çevrimiçi ${f}:${g}:${h}:${i}`),e=`Şu an çevrimiçi ${f}:${g}:${h}:${i}`):!d.includes("\xE7evrimi\xE7i")%26%26(console.log(`Şu an çevrimdışı ${f}:${g}:${h}:${i}`),e=`Şu an çevrimdışı ${f}:${g}:${h}:${i}`),"granted"===Notification.permission%26%26c()});c.observe(a,{childList:!0})}();```
