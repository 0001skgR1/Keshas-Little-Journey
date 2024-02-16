/* Глобальные переменные */
var NxNam;
var NxTex;
var NxAnimN;
var NxAnimT;
var BKG;
var DialCanvas
/* Присваивание */
document.addEventListener('DOMContentLoaded', function() {
NxNam = document.getElementById('phatName');
NxTex = document.getElementById('phatText');
NxAnimN = 'NxNam.style.animation = showWE 4s forwards';
NxAnimT = 'NxTex.style.animation = showWE 4s forwards';
BKG = document.getElementById('forBG');
DialCanvas = document.getElementById('dialCanv');
smTextRev = document.getElementById('forTex');
});

/* Назначение слушателей начальной анимации */
document.addEventListener('DOMContentLoaded', function() {
var Text = document.getElementById('forTex');
var Image = document.getElementById('forBG');
var DialogSc = document.getElementById('dialCanv');

Text.style.animation = 'smText 8s forwards';
  // Первичный текст -> Появление фона
Text.addEventListener('animationend', function() {
  Text.style.animation = '';
  Text.style.display = 'none';
  Image.style.visibility = 'visible';
  Image.style.animation = 'smMap 4s forwards';
});
  // Фон -> Появление зоны диалога
Image.addEventListener('animationend', function() {
  Image.style.animation = '';
  DialogSc.style.display = 'block';
  DialogSc.style.animation = 'smThree 2s forwards';
});
// Зона диалога -> закрытие анимации, изменение значения текста
DialogSc.addEventListener('animationend', function() {
// Первичное изменение текста
  DialogSc.style.animation = '';
    if (count < queryScene.length) {
      queryScene[count]();
    }
  });
});

/* Массив и Чтение */
let count = 0;
let queryScene = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
queryScene[0] = function ToZero(){
/*  NxAnimN;
  NxAnimT; */
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Сегодня был необычно сильный ветер, а летящий снег, по ощущениям резал кожу';
};
queryScene[1] = function ToFirst(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Какая холодрыга... Быстрее бы автобус пришёл!';
};
queryScene[2] = function ToSecond(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'На счастье Кеши, автобус пришёл быстро';
};
queryScene[3] = function ToThree(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Наконец-то!';
};
queryScene[4] = function ToFour(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Промёрзший до костей Кеша садится на последний автобус, и уезжает домой...';
};
queryScene[5] = function ToFive(){
  BKG.src = 'sources/els_bg/black.jpg';
  NxTex.innerText = 'Сидя в наудивление тёплом автобусе, Кеша засыпает, и просыпается в незнакомом для себя месте';
};
queryScene[6] = function ToSix(){
  BKG.src = 'sources/els_bg/inBus.jpg';
  NxTex.innerText = 'Кеша просыпается в автобусе, уже при ярком свете дня';
};
queryScene[7] = function ToSeven(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Это... Конечная?';
};
queryScene[8] = function ToEight(){
  BKG.src = 'sources/els_bg/black.jpg';
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Выйдя из автобуса, Кеша ощущает тепло солнечных лучей. Оглянувшись, не узнает место в котором оказался';
};
queryScene[9] = function ToNine(){
  BKG.src = 'sources/els_bg/campGates.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Это Казахстан..? Казахстан, да?';
};
queryScene[10] = function ToTen(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'К сожалению для Кеши, это не Казахстан. Но, что бы разобраться со своим местоположением, он решает зайти на территорию';
};
queryScene[11] = function ToEleven(){
  BKG.src = 'sources/els_bg/extHouses.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'А где же люди, если ворота открыты?';
};
queryScene[12] = function ToTwelv(){
  BKG.src = 'sources/els_bg/extHouse.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Может постучать?';
};
queryScene[13] = function ToThirteen(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Постучав в дверь, ему никто не ответил';
};
queryScene[14] = function ToFourteen(){
  BKG.src = 'sources/els_bg/black.jpg';
  NxTex.innerText = 'Поняв, что в домах никого нет, Кеша начал пробираться в глубь территории Пионер-лагеря';
};
queryScene[15] = function ToFiveteen(){
  NxTex.innerText = 'Найдя здание, похоже на диспетчерскую, Кеша без всяких сомнений зашёл внутрь';
};
queryScene[16] = function ToSixteen(){
  BKG.src = 'sources/els_bg/intCatacombsF.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Что то я не туда забрёл...';
};
queryScene[17] = function ToSeventeen(){
  NxTex.innerText = 'Что за жуткие развалины? Сам лагерь выглядел как новый...';
};
queryScene[18] = function ToThouteen(){
  BKG.src = 'sources/els_bg/intCatacombsS.jpg';
  NxNam.innerText = 'Рассписание';
  NxTex.innerText = 'По неизвестной причина, Кеша полностью проигнорировал знак радиационной опасности, как и любой здравый смысл, заходя всё дальше в руины';
};
queryScene[19] = function ToNineteen(){
  BKG.src = 'sources/els_bg/intCatacombsT.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Я всё ещё иду... Это место действительно огромное!';
};
queryScene[20] = function ToTwenty(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Кеша ещё не понял, что бродит по одному и тому же корридору';
};
queryScene[21] = function ToTwentyOne(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Ладно, здесь я точно никого не найду. Надо возвращаться...';
};
queryScene[22] = function ToTwentyTwo(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Казалось бы, пора вернуться обратно, но идя обратно понял, что попал в зацикленный корридор';
};
queryScene[23] = function ToTwentyThree(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Что за чёрт..? Я точно не хожу кругами...';
};
queryScene[24] = function ToTwentyFour(){
  NxNam.innerText = 'Рассазчик';
  NxTex.innerText = 'В какой то момент, блуждая в темноте, Кеша потрескивание и дыхание возле себя';
};
queryScene[25] = function ToTwentyFive(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'А?! Тут кто то есть?';
};
queryScene[26] = function ToTwentySix(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'А?! Тут кто то есть?';
};
queryScene[27] = function ToTwentySeven(){
  BKG.src = 'sources/els_bg/black.jpg';
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Спустя мгновение Кеша начал ощущать боль в шее... В глазах потемнело...';
};
queryScene[28] = function ToTwentyThou(){
  NxNam.innerText = '';
  NxTex.innerText = '...';
};
queryScene[29] = function ToTwentyNine(){
  NxTex.innerText = '..?';
};
queryScene[30] = function ToThirty(){
  NxNam.innerText = 'Кондуктор';
  NxTex.innerText = 'Мужчина, проснитесь, конечная.';
};
queryScene[31] = function ToThirtyOne(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Кеша просыпается спустя пару минут после объявления конечной';
};
queryScene[32] = function ToThirtyTwo(){
  BKG.src = 'sources/els_bg/inBusNight.jpg';
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'Конечка..? Это был сон? Агх, ладно, надо выходить';
};
queryScene[33] = function ToThirtyThree(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Кеша ещё не знает,';
};
queryScene[34] = function ToThirtyFour(){
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Но он приехал в Казахстан';
};
queryScene[35] = function ToThirtyFive(){
  NxNam.innerText = 'Кеша';
  NxTex.innerText = 'АААААААААААААААААААААА?!';
};
queryScene[36] = function ToThirtySix(){
  BKG.src = 'sources/els_bg/black.jpg';
  NxNam.innerText = 'Рассказчик';
  NxTex.innerText = 'Эх, Кеша, может не стоило настолько надолго засыпать в автобусе?';
};
queryScene[37] = function ToThirtySeven(){
  DialCanvas.style.animation = 'revers 2s forwards';

  DialCanvas.addEventListener('animationend', function() {
    DialCanvas.style.visibility = 'hidden';
    smTextRev.style.display = 'block';
    smTextRev.innerText = 'Всё!';
    smTextRev.style.animation = 'smText 4s forwards';
  })
};
  // Функция вызова последующей функции
function CallNextScene(){
    if (count < queryScene.length) {
        queryScene[count]();
        count++;
    }
}
function ToClickForever(){
    CallNextScene();
};