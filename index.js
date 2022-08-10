const left_button = document.querySelector(".left_button");
const left_dash = document.querySelector(".left_dash");
const left_balls = document.querySelector(".left_balls");
const left_score = document.querySelector(".left_score");
const left_span = document.querySelector(".left_span");

let left_totalscore = [];
const left_hit = () => {
    var r = Math.floor(Math.random() * 6);
    left_dash.innerHTML = r;
    left_totalscore.push(r);
    left_score.innerHTML = left_totalscore.reduce((a, b) => a += b, 0);
}

const right_enableButton = () => {
    left_button.disabled = true;
    right_button.disabled = false;
    left_button.style.backgroundColor = "red";
    right_button.style.backgroundColor = "green"
    left_span.style.backgroundColor = "red";
    right_span.style.backgroundColor = "green";

}
left_button.addEventListener('click', right_enableButton);



var value = 6;
const left_interval = () => {


    if (value < 1) {
        value = 1;
        console.log(value);

        if (value = 1) {
            left_button.remove();
            left_span.remove();
            if (left_totalscore > right_totalscore) {
                left_dash.innerHTML = "WINNER 🥇 ";


            }
            else {
                left_dash.innerHTML = "LOSER  😢 ";

            }
        }
        else {
            value;
        }
    }
    value--;
    left_balls.innerHTML = value;
    console.log(value);
}

left_button.addEventListener('click', left_hit);
left_button.addEventListener('click', left_interval);








const right_button = document.querySelector(".right_button");
const right_dash = document.querySelector(".right_dash");
const right_balls = document.querySelector(".right_balls");
const right_score = document.querySelector(".right_score");
const right_span = document.querySelector(".right_span");




let right_totalscore = [];
const right_hit = () => {
    var r2 = Math.floor(Math.random() * 6);
    right_dash.innerHTML = r2;
    right_totalscore.push(r2);
    let sum = right_totalscore.reduce((a, b) => a += b, 0);
    right_score.innerHTML = sum;


}

var right_value = 6;
const right_interval = () => {


    if (right_value < 1) {
        right_value = 1;
        console.log(right_value);

        if (right_value = 1) {
            right_button.remove();
            right_span.remove();
            if (left_totalscore > right_totalscore) {
                right_dash.innerHTML = "LOSER 😢";

            }
            else {
                right_dash.innerHTML = "WINNER 🥇";
            }
        }
        else {
            right_value;
        }
    }
    right_value--;
    right_balls.innerHTML = value;
}

right_button.addEventListener('click', right_hit);
right_button.addEventListener('click', right_interval);




const left_enablebutton = () => {
    left_button.disabled = false;
    right_button.disabled = true;
    left_button.style.backgroundColor = "green";
    right_button.style.backgroundColor = "red";
    left_span.style.backgroundColor = "green";
    right_span.style.backgroundColor = "red";

}


right_button.addEventListener('click', left_enablebutton);


