addEventListener('DOMContentLoaded', function () {
    
    // Variables declaration
    // Getting tags and info from LocalStaorage and HTML page
    let playerOne = JSON.parse(localStorage.getItem("player-one")),
        playerTwo = JSON.parse(localStorage.getItem("player-two")),
        playerOneRes = document.querySelector('#player1'),
        playerTwoRes = document.querySelector('#player2'),
        resPlayBtn = document.querySelector('.restartGame'),
        iniBatBtn = document.querySelector('.resultPage');
     
    //Updating HMTL page wih info from localStorage
    function popTab() {
        playerOneRes.innerHTML += `
            <table>
                <tr><td><img src="${playerOne.avatar_url}" style="height: 250px; width: 250px; border: 3px solid green; border-radius: 5px"></td></tr>
                <tr><td>${playerOne.name} </td></tr>
                <tr><td>${playerOne.login}</td></tr>
                <tr><td>${playerOne.followers}</td></tr>
                <tr><td>${playerOne.following}</td></tr>
                <tr><td>${playerOne.public_repos}</td></tr>
            </table>
    
        `;
              
        playerTwoRes.innerHTML += `
            <table>
                <tr><td><img src="${playerTwo.avatar_url}" style="height: 250px; width: 250px; border: 3px solid green; border-radius: 5px"></td></tr>
                <tr><td>${playerTwo.name} </td></tr>
                <tr><td>${playerTwo.login}</td></tr>
                <tr><td>${playerTwo.followers}</td></tr>
                <tr><td>${playerTwo.following}</td></tr>
                <tr><td>${playerTwo.public_repos}</td></tr>
            </table>
        `;   
    };
    
    popTab();
    

    iniBatBtn.addEventListener('click', function (e) {
        begBat();

    });

    resPlayBtn.addEventListener('click', function (e) {
        resPlay();
    })
 
    function begBat () { 
        location.reload();
        const resultUrl = '/github_battle/result.html';
        window.location = resultUrl;
    };

    function resPlay () {
        localStorage.clear();
        const playerOneUrl = '/github_battle/playerOne.html';
        window.location = playerOneUrl;
    };

    
})
