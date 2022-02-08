document.addEventListener('DOMContentLoaded', function() {
    // variable declaration
    const varDec = {
        player1Name: document.querySelector('#player-one'),
        getP1Data: document.querySelector('#gotoP2Btn'),
        };

    // Event Lsitener for player 1
    varDec.getP1Data.addEventListener('click', function (e) {
              
        // check if user has entered a value into the input box
        if (varDec.player1Name.value !== '') {
                     // Promise for fetching data from github API
        P1Data = new URL (`https://api.github.com/users/${varDec.player1Name.value}`);
        const playerOne = fetch(P1Data).then(function (respone) {
            return respone.json();
        }).then(function (text) {
           localStorage.setItem("player-one", JSON.stringify(text));
        });
        // Function call
        callPlay();
        }
    });

    // function for displaying result from Promise.
    //If promise is fulfilled - else block runs
    //If promise is rejected - if block runs
    function play1Res() {

        let test = JSON.parse(localStorage.getItem("player-one"));
        let player1Result = document.querySelector('.displayP1_result');
        
        if (test.name === undefined && test.login === undefined && test.public_repos === undefined) {
            player1Result.innerHTML = `
                <div>
                    <p style="font-size: 70px; font-weight: 900">USER NOT FOUND</p>
                </div>
            `;
            varDec.player1Name.value = '';
        } else {
            player1Result.innerHTML = `
            <table>
                <tr><td><img src="${test.avatar_url}" style="height: 250px; width: 250px; border: 3px solid green; border-radius: 5px"></td></tr>
                <tr><td>${test.name} </td></tr>
                <tr><td>${test.login}</td></tr>
                <tr><td>${test.followers}</td></tr>
                <tr><td>${test.following}</td></tr>
               <tr><td>${test.public_repos}</td></tr>
            </table>
        
        `;
        gotoP2() 
        }
    };


    // Delay the function call to play1Res so that promise can settle before call
    //If not, value of "test" in play1Res function will be "null"
    function callPlay() {
        setTimeout( () => {
            play1Res();
        }, 1500);
    }

    //Transiting to player 2 page
    function gotoP2() {
        setTimeout(() => {

            location.reload();
            const playerTwoUrl = '/github_battle/playerTwo.html';
            window.location = playerTwoUrl;
        }, 2000);      
    };


})
