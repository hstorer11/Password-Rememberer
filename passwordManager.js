//https://www.youtube.com/watch?v=7jRG39lhx6o - used to set up json

window.addEventListener('load', start)
function start() {
    document.getElementById("form").addEventListener('submit', formSubmission)
    function formSubmission(e) {
        e.preventDefault();
        console.log(document.getElementById("account").value);
        console.log(document.getElementById("password").value);

        var account = document.getElementById("account").value;
        var password = document.getElementById("password").value;
        var bigArray = [];

        keeper = {
            keepaccount: account,
            keeppassword: password
        }

        if (localStorage.getItem('hold') === null) {
            bigArray.push(keeper);
            localStorage.setItem('hold', JSON.stringify(bigArray));

        }
        else {
            bigArrayForm = JSON.parse(localStorage.getItem('hold'));
            bigArrayForm.push(keeper);
            localStorage.setItem('hold', JSON.stringify(bigArrayForm))

        }

        document.getElementById("account").value = '';
        document.getElementById("password").value = '';
    }
    
}

function fetchValuesAndDisplayTable() {
    bigArrayFormat = [];
    output = '';
    bigArrayFormat = JSON.parse(localStorage.getItem('hold'));
    for(var i=0;i<bigArrayFormat.length;i++){


        output+= `
          <tr>
            <td>`+ bigArrayFormat[i].keepaccount +`</td>
            <td>`+ bigArrayFormat[i].keeppassword +`</td>
          </tr>
        `;
    }
document.getElementById("fillAsGo").innerHTML = output;
}