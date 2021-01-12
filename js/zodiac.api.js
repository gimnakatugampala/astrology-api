
//Fetch data Previous Day

//Fetch data Today
async function getToday(sign){
    const res = await fetch(`https://horoscope-api.herokuapp.com/horoscope/today/${sign}`)
    const today = await res.json();
    return today;
}

//Fetch Day Next Day

//fetch general data