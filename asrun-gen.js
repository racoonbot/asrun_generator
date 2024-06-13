const fs = require("fs");

function generateLogString() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  const currentDate = new Date();
  const dateStr = `${formatNumber(
    currentDate.getFullYear() % 100
  )}/${formatNumber(currentDate.getMonth() + 1)}/${formatNumber(
    currentDate.getDate()
  )}`;
  const timeStr = `${formatNumber(currentDate.getHours())}:${formatNumber(
    currentDate.getMinutes()
  )}:${formatNumber(currentDate.getSeconds())}.${getRandomInt(
    0,
    99
  )} ${getRandomInt(1000000, 9999999)}`;

  const bankNames = [
    "Альфа Банк",
    "Бета Банк",
    "Гамма Банк",
    "Аль    нк",
    "Беывфывфывк",
    "YSdk ма erererer 2234",
  ];
  const cardNames = ["Альфа_Карта", "Бета_Карта", "Гамма_Карта"];
  const duration1 = `${formatNumber(getRandomInt(0, 23))}:${formatNumber(
    getRandomInt(0, 59)
  )}:${formatNumber(getRandomInt(0, 59))}.${getRandomInt(0, 99)}`;
  const duration2 = `${formatNumber(getRandomInt(0, 23))}:${formatNumber(
    getRandomInt(0, 59)
  )}:${formatNumber(getRandomInt(0, 59))}.${getRandomInt(0, 99)}`;
  const Nexio = ["Nexio_1B:08", "Nexio_2B:05", "Nexio_1m:06", "Nexio_2M:04"];
  const prTime = ["00 00:00:30.00", "00 00:10:30.00", "00 03:00:00.00"];
  const randomBankName =
    bankNames[Math.floor(Math.random() * bankNames.length)];
  const randomCardName =
    cardNames[Math.floor(Math.random() * cardNames.length)];
  const randomNexio = Nexio[Math.floor(Math.random() * Nexio.length)];
  const randomprTime = prTime[Math.floor(Math.random() * prTime.length)];
  let randomWord = "";
  if (getRandomInt(1, 5) === 1) {
    const words = ["RUNSHORT", "SKIPED", "MISSED", "LONG"];
    randomWord = words[Math.floor(Math.random() * words.length)];
  }

  const logString = `${dateStr}   ${timeStr}                             ${randomBankName}  ${randomCardName}-Барабан_ ${randomprTime} ${randomWord} 00:00:30.00         ${randomNexio}            ${getRandomInt(
    10000000,
    99999999
  )}  A`;

  return logString;
}

function generateLogEvery5Seconds() {
  const logEntry = generateLogString();
  fs.appendFile(
    "/home/pppo/Документы/Mario/_code/AS_RUN-genertor/asrun.txt",
    logEntry + "\n",
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    }
  );
}

// Генерация строки лога каждые 5 секунд
setInterval(generateLogEvery5Seconds, 5000);
