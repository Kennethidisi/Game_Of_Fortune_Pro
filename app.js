// targetting the DOMs
let get_started = document.querySelector('.get-started')
let get_started_btn = document.querySelector('.get-started-btn');
let form_container = document.querySelector('.form-container');
let close_form_btn =document.querySelector('.close_form');
let form = document.querySelector('.main-form');
let deposit_environ = document.querySelector('.deposit-environment');
let deposit_btn = document.querySelector('.deposit-btn');
let dashboard_environ = document.querySelector('.dash-board-environ');
let show_dashboard_btn = document.querySelector('.show-dashboard-btn');
let make_deposit_btn = document.querySelector('.make-deposit-btn');
let close_deposit_environ = document.querySelector('.close_deposit-environment');
let close_dashboard_environ = document.querySelector('.close_dashboard-environ');
let play_environ = document.querySelector('.play-environ');
let close_play_environ = document.querySelector('.close_play-environ');
let play_btn = document.querySelector('.play-btn');
let game_environ = document.querySelector('.game-environ');
let uploaded_img = ''
let start_page = document.querySelector('.start_page');

document.body.onload = function(){
    setTimeout(()=>{
        start_page.classList.add('close_start_page')
    }, 3500)
}


let menu_btn = document.querySelector('.menu-btn')
menu_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    nav.classList.toggle('slide')
})


get_started_btn.addEventListener('click', (event)=>{
    event.preventDefault();

    form_container.style.display = "flex";
    get_started.style.display = "none";
})


let photo = document.querySelector('.profile-img');
let file = document.querySelector('#file');

file.addEventListener('change', (event)=>{
    event.preventDefault();

    let chosenFile = file.files[0];
    if(chosenFile){
        let reader = new FileReader();
        reader.addEventListener('load', (event)=>{
            event.preventDefault();
            photo.src = reader.result;
            uploaded_img = reader.result;
        })
        reader.readAsDataURL(chosenFile)
    }
})



form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let username = document.querySelector('.username').value;
    let email = document.querySelector('.email').value;
    let number = document.querySelector('.phone').value;
    
    document.querySelector('.player-name').textContent = username;
    document.querySelector('.name_deposit_environ').textContent = username;
    let dashboard_img = document.querySelector('.dashboard-img');
    dashboard_img.src = uploaded_img;

    if(username == ''){
        document.querySelector('.username').classList.add('error');

        setInterval(()=>{
            document.querySelector('.username').classList.remove('error');
        },1000)
    }else if(email == ''){
        document.querySelector('.email').classList.add('error');

        setInterval(()=>{
            document.querySelector('.email').classList.remove('error');
        }, 1000)
    }else if(number == 0){
        document.querySelector('.phone').classList.add('error');

        setInterval(()=>{
            document.querySelector('.phone').classList.remove('error');
        },1000)
    }else{
        form_container.style.display = "none";
        deposit_environ.style.display = "flex";
    }

})


close_form_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    form_container.style.display = "none";
    get_started.style.display = "flex";
})



let dashboard_balance = document.querySelector('.dashboard-balance');

deposit_btn.addEventListener('click', (event)=>{
    event.preventDefault();

    let deposit_input = Number(document.querySelector('.deposit-input').value);
    dashboard_balance.innerHTML = Number(dashboard_balance.innerHTML) + deposit_input;

    deposit_environ.style.display = "none";
    show_dashboard_btn.style.display = "flex";
})

close_deposit_environ.addEventListener('click', (event)=>{
    event.preventDefault();
    deposit_environ.style.display = "none";
    get_started.style.display = "flex";
})



show_dashboard_btn.addEventListener('click', (event)=>{
    event.preventDefault();

    dashboard_environ.style.display = "flex";
    show_dashboard_btn.style.display = "none";
    make_deposit_btn.style.display = "flex";
    play_environ.style.display = "none";
    game_environ.style.display = "none"
})

let place_bet_btn = document.querySelector('.place-bet-btn');

place_bet_btn.addEventListener('click', (event)=>{
    event.preventDefault();

    dashboard_environ.style.display = "none";
    play_environ.style.display = "flex";
    show_dashboard_btn.style.display = "flex";
    make_deposit_btn.style.display = "none";

})



close_dashboard_environ.addEventListener('click', (event)=>{
    event.preventDefault();
    dashboard_environ.style.display = "none";
    show_dashboard_btn.style.display = "flex";
    make_deposit_btn.style.display = "none";
})

make_deposit_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    deposit_environ.style.display = "flex";
    show_dashboard_btn.style.display = "none";
    dashboard_environ.style.display = "none";
    make_deposit_btn.style.display = "none";
    play_environ.style.display = "none";
})


close_play_environ.addEventListener('click', (event)=>{
    event.preventDefault();
    play_environ.style.display = "none";
    show_dashboard_btn.style.display = "flex";
    make_deposit_btn.style.display = "none";
})



play_btn.addEventListener('click', (event)=>{
    event.preventDefault();

    let bet_amount = Number(document.querySelector('.bet_amount').value);

    if(bet_amount > Number(dashboard_balance.innerHTML)){
        alert('Sorry you do not have enough cash to play this bet')
    }else{
        dashboard_balance.innerHTML = Number(dashboard_balance.innerHTML) - bet_amount

        let computer_balls = []
        let player_balls = []

        let computer_span = document.querySelector('.lucky-balls');
        let player_span = document.querySelector('.player-balls');

        computer_span.innerHTML = ''
        player_span.innerHTML = ''

        for(i=0; i<5; i++){
            let computer_random_balls = Math.floor(Math.random() * 99) + 1;
            if(!computer_balls.includes(computer_random_balls)){
                computer_balls.push(computer_random_balls);
            }else{
                let computer_random_balls = Math.floor(Math.random() * 92) + 8;
                computer_balls.push(computer_random_balls);
            }


            let player_random_balls = Math.floor(Math.random() * 99) + 1
            if(!player_balls.includes(player_random_balls)){
                player_balls.push(player_random_balls);
            }else{
                let player_random_balls = Math.floor(Math.random() * 92) + 8;
                player_balls.push(player_random_balls);
            }
        }
        
        computer_balls.forEach((ball)=>{
            let random_ball = document.createElement('span');
            random_ball.classList.add('green-ball');
            random_ball.innerHTML = ball

            computer_span.appendChild(random_ball);
        })


        let counter = 0;
        player_balls.forEach((ball)=>{
            let lucky_ball = document.createElement('span')
            if(computer_balls.includes(ball)){
                lucky_ball.classList.add('green-ball')
                lucky_ball.innerHTML = ball;
                counter++
            }else{
                lucky_ball.classList.add('red-ball')
                lucky_ball.innerHTML = ball;
            }
            player_span.appendChild(lucky_ball);
        })

        let amount_won = bet_amount * counter;
        dashboard_balance.innerHTML = Number(dashboard_balance.innerHTML) + amount_won
        document.querySelector('.win-amt').innerHTML = amount_won


        game_environ.style.display = "flex";
        play_environ.style.display = "none"
        make_deposit_btn.style.display = "none";
        show_dashboard_btn.style.display = "flex";
    }
})





// changing theme
let theme = document.querySelector('.theme');
let theme_btn = document.querySelector('.theme-btn');
let body = document.querySelector('body');
let top1 = document.querySelector('.top1');
let nav = document.querySelector('nav');
let top2 = document.querySelector('.top2');
let deposit_div = document.querySelector('.deposit-div')
let dashboard_div = document.querySelector('.dashboard')
let lucky_ball_div = document.querySelector('.lucky-balls-div')
let player_ball_div = document.querySelector('.player-balls-div')
let winning_div = document.querySelector('.winnings')
let player_font = document.querySelector('.player-balls-div h3')
let lucky_font = document.querySelector('.lucky-balls-div h3')


theme.addEventListener('click', (event)=>{
    event.preventDefault();
    theme_btn.classList.toggle('change_theme')
    body.classList.toggle('body-bg')
    top1.classList.toggle('bg-color1')
    nav.classList.toggle('bg-color2')
    top2.classList.toggle('bg-color2')

    let a_tags =  document.querySelectorAll('a')
      a_tags.forEach((a_tag)=>{
          a_tag.classList.toggle('dark-theme-link')
    })

    form_container.classList.toggle('bg-color2')
    form.classList.toggle('bg-color1')
    deposit_environ.classList.toggle('bg-color2')
    deposit_div.classList.toggle('bg-color1')
    dashboard_environ.classList.toggle('bg-color2')
    dashboard_div.classList.toggle('bg-color1')
    play_environ.classList.toggle('bg-color2')
    lucky_ball_div.classList.toggle('bg-color3')
    player_ball_div.classList.toggle('bg-color3')
    winning_div.classList.toggle('bg-color3')

})
