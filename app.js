const API_URL = "https://bzq9e83pn68q.share.zrok.io/";  

async function fetchData() {  
    try {  
        const response = await fetch(API_URL);  
        if (!response.ok) throw new Error("Сервер не отвечает");  
        const data = await response.json();  
        document.getElementById("data").innerText = JSON.stringify(data);  
    } catch (error) {  
        // Если сервер упал – показываем заглушку  
        window.location.href = "fallback.html";  
    }  
}  

fetchData();  
