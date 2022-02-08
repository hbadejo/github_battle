document.addEventListener('DOMContentLoaded', function() {
    // variable declaration
    const varDec = {
        player2Name: document.querySelector('#player-two'),
        getP2Data: document.querySelector('#gotoPTabBtn'),
        };

    // Event Lsitener for player 1
    varDec.getP2Data.addEventListener('click', function (e) {
              
        // check if user has entered a value into the input box
//         if (varDec.player2Name.value === '') {
//             alert('Please enter a valid Github user name');
//             return false;
//         }

        // Promise for fetching data from github API
        P2Data = new URL (`https://api.github.com/users/${varDec.player2Name.value}`);
        const playerTwo = fetch(P2Data).then(function (respone) {
            return respone.json();
        }).then(function (text) {
           localStorage.setItem("player-two", JSON.stringify(text));
        });
        // Function call
        callPlay()  
    });

    // function for displaying result from Promise.
    //If promise is fulfilled - else block runs
    //If promise is rejected - if block runs
    function play2Res() {

        let test = JSON.parse(localStorage.getItem("player-two"));
        let player2Result = document.querySelector('.displayP2_result');
        
        if (test.name === undefined && test.login === undefined && test.public_repos === undefined) {
            player2Result.innerHTML = `
                <div>
                    <p style="font-size: 70px; font-weight: 900">USER NOT FOUND</p>
                </div>
            `;
            varDec.player2Name.value = '';
        } else {
            player2Result.innerHTML = `
            <table>
                <tr><td><img src="${test.avatar_url}" style="height: 250px; width: 250px; border: 3px solid green; border-radius: 5px"></td></tr>
                <tr><td>${test.name} </td></tr>
                <tr><td>${test.login}</td></tr>
                <tr><td>${test.followers}</td></tr>
                <tr><td>${test.following}</td></tr>
               <tr><td>${test.public_repos}</td></tr>
            </table>
        
        `;
        gotoPTab() 
        }
    };


    // Delay the function call to play1Res so that promise can settle before call
    //If not, value of "test" in play1Res function will be "null"
    function callPlay() {
        setTimeout( () => {
            play2Res();
        }, 1500);
    }

    //Transiting to players table page
    function gotoPTab() {
        setTimeout(() => {
            location.reload();
            const playerTabUrl = '/github_battle/playersTable.html';
            window.location = playerTabUrl;
        }, 2000);      
    };


})
