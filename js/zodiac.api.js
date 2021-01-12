const apiKey = 'eee7f4eee39ce09278c897dcd980dde0';
const userId = '615417';

//Fetch data Previous Day

//Fetch data Today
async function getToday(sign){
    const res = await fetch(`http://horoscope-api.herokuapp.com/horoscope/today/${sign}`)
    const today = await res.json();
    return today;
}

//Fetch Day Next Day