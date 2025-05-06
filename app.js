const API_URL = "https://bzq9e83pn68q.share.zrok.io/";  

async function fetchFromBackend() {
    const path = window.location.pathname; // Получаем текущий путь (/site, /api, etc.)
    
    try {
        const response = await fetch(`${BACKEND_URL}${path}`);
        
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}`);
        }
        
        const data = await response.json();
        document.getElementById("response").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Ошибка:", error);
        //window.location.href = "fallback.html"; // Перенаправление на заглушку
    }
}

// Запускаем при загрузке страницы
fetchFromBackend();
