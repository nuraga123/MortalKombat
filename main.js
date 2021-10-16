const player1 = {
    name: 'Zero',
    hp: 50,
    weapon: ['нож'],
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    attack: function () {
        console.log(this.name + ' ' + 'Fight...')
    }
}
console.log(player1.attack());
const player2 = {
    name: 'Panda',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['палька'],
    attack: function () {
        console.log(this.name + ' ' + 'Fight...')
    }
}
function createPlayer(playerClass, playerObj) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);

    const $life = document.createElement("div");
    $life.classList.add('life');
    $progressbar.appendChild($life);
    $life.style.width = playerObj.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $img = document.createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);

    const $arena = document.querySelector('.arenas');
    $arena.appendChild($player1);
}
createPlayer('player1', player1);
createPlayer('player2', player2);



















//c = c + a;c += a;<div class="arenas arena1"></div>
//         <div class="chat"></div>
//         <div class="wall-left"></div>
//         <div class="wall-right"></div>
/*const  name = 'Scorpion';
const messge = ['hello', true, 2021];
messge.push('salam');
console.log(messge);
function getMessage(name, lastName) {
    console.log(name + ' ' + lastName + ' - fight...');
}

getMessage('sonya', 'blade');

function  createFullName(name, lastname, secondName) {
    const result = name + ' ' + secondName + ' ' + lastname;

    return result;
}

const fullName = createFullName('1', '2', '3');
console.log(fullName);
const player1 ={
    name: 'Scorpion',
    hp: 100,
};

const document = {
    children: [
        //html
        {
            children: [
                //head
                {
                    children: []
                },
                //body
                {
                    children: []
                }
            ]
        }
    ]
}

const $box = document.getElementById('box')

console.log($box.innerText);

$box.innerText = '1';

$box.style.height = '100px';
$box.addEventListener('click', function() {
    alert('555');
})
const $player1 = document.createElement('div');
$player1.classList.add('player1');

const $p = document.createElement('p');
$p.innerText = 'scr';

const $img = document.createElement('img');
$img.src = 'data:image/jpeg;base64,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'

$player1.appendChild($p);
$player1.appendChild($img);
const $root = document.querySelector('.root');
$root.appendChild($player1);
*/

