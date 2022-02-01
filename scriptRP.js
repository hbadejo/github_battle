addEventListener('DOMContentLoaded', function () {
    
    // Variables declaration
    // Getting tags and info from LocalStaorage and HTML page
    let playerOne = JSON.parse(localStorage.getItem("player-one")),
        playerTwo = JSON.parse(localStorage.getItem("player-two")),
        playerOneRes = document.querySelector('#player1'),
        playerTwoRes = document.querySelector('#player2'),
        iniBatBtn = document.querySelector('.playAgain')
        p1Status = '',
        p2Status = '',
        play1Sc = '',
        play2Sc = '';



    play1Sc = ((playerOne.public_repos / 2) + playerOne.followers + playerOne.following);
    play2Sc = ((playerTwo.public_repos / 2) + playerTwo.followers + playerTwo.following);

    if (play2Sc > play1Sc) {
        p2Status = "Winner 🏆🥇";
        p1Status = "Loser 🎭😏";
    } else if (play1Sc > play2Sc) {
        p1Status = "Winner 🏆🥇";
        p2Status = "Loser 🎭😏";
    } else {
        p1Status = p2Status = "It is a tie!!! ☺️"
    }


    
    //Updating HMTL page wih info from localStorage
    function popTab() {
        playerOneRes.innerHTML += `
            <table>
                <tr><td style="border: none; font-weight: 700;">${p1Status}</td></tr>
                <tr><td>Score: ${play1Sc}</td></tr>
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
                <tr><td style="border: none; font-weight: 700;">${p2Status}</td></tr>
                <tr><td>Score: ${play2Sc}</td></tr>
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
        replay();

    });


    function replay () {
        localStorage.clear();
        const indexUrl = '/index.html';
        window.location = indexUrl;
    };

    
})