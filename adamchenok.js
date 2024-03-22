const treeMonthUpgrade = 2;
const monthUpgrade = treeMonthUpgrade / 3;
const longestDickInHistory = 48;

const hubSizeChlen = (chlenBefore, monthsOfTraining) => {
    // Проверяем, что введенные значения не пусты и являются числами
    if (chlenBefore.trim() !== '' && monthsOfTraining.trim() !== '') {
        const parsedChlenBefore = parseFloat(chlenBefore);
        const parsedMonthsOfTraining = parseFloat(monthsOfTraining);

        if (!isNaN(parsedChlenBefore) && !isNaN(parsedMonthsOfTraining) && parsedChlenBefore !== 0 && parsedMonthsOfTraining !== 0) {
            let newChlen = parsedChlenBefore + (monthUpgrade * parsedMonthsOfTraining);
            let otroslo = newChlen - parsedChlenBefore;

            document.getElementById('result').textContent = `Вітаю! After taking a Hub Size курс for ${parsedMonthsOfTraining} месяців, your chlen viros na ${Math.floor(otroslo)} cm!`;

            if (newChlen > longestDickInHistory) {
                document.getElementById('result').textContent += ` Vau! Vash chlen is ${Math.floor(newChlen)} см long and it's a NEW WORLD RECORD!`;
            } else {
                document.getElementById('result').textContent += ` Vash chen uzhe складає ${Math.floor(newChlen)} см! Продолжай в том же духе, зай!`;
            }
        } else if(parsedChlenBefore === 0){
            document.getElementById('result').textContent = 'Похоже у вас нет chlena. Следите за новинками, следуйщий курс Hubsize: "DIY. Как обзавестись chlenom в домашних условиях."';

             
        } else if(parsedMonthsOfTraining === 0){
            document.getElementById('result').textContent = 'Хочешь выростить апарат? Тренеруйся с Hubsize!';
             
        } else {
            document.getElementById('result').textContent = 'Введи свои данные спрева, зай:)';
        }
    } 
    
    else {
        document.getElementById('result').textContent = 'Сперва введи свои данные спрева, зай:)';
    }
};

document.getElementById('math').addEventListener('click', () => {
    const chlenBefore = document.getElementById('chlenBefore').value;
    const monthsOfTraining = document.getElementById('monthsOfTraining').value;
    hubSizeChlen(chlenBefore, monthsOfTraining);
});
