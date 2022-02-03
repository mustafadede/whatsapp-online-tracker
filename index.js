    alert("Ready! Set! Go!")
    console.clear()
    const x = document.querySelector("#main > header > div._24-Ff")
    const n = document.querySelector("#main > header > div._24-Ff > div > div > span").innerHTML
    const observer = new MutationObserver(mutations => {
        const state = mutations[0].target.outerText
        let nState = String
        let crrntD = new Date().getUTCDate()
        let crrntH = new Date().getHours()
        let crrntM = new Date().getMinutes()
        let crrntS = new Date().getSeconds()
        if(state.includes("çevrimiçi")) {
            console.log(`Şu an çevrimiçi ${crrntD}:${crrntH}:${crrntM}:${crrntS}`);
             nState = `Şu an çevrimiçi ${crrntD}:${crrntH}:${crrntM}:${crrntS}`
        } else if (!state.includes("çevrimiçi")) {
            console.log(`Şu an çevrimdışı ${crrntD}:${crrntH}:${crrntM}:${crrntS}`);
            nState = `Şu an çevrimdışı ${crrntD}:${crrntH}:${crrntM}:${crrntS}`
        }
        function showNotification() {
            const notification = new Notification(`${n}`,{
                body:nState,
                icon:"https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            })
        }
        if (Notification.permission === "granted") {
            showNotification()
        }    
    })  
    observer.observe(x, {
        childList: true
    })
