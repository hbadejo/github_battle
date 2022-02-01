document.addEventListener('DOMContentLoaded', function () {
    let strBtn = document.querySelector('#startApp');


    function startApp() {

        localStorage.clear();
        let appStr = "/playerOne.html";
        window.location = appStr;
        
    };

    strBtn.addEventListener('click', function (e) {
        startApp();
    });
    
})