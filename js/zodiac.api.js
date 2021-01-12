const apiKey = 'eee7f4eee39ce09278c897dcd980dde0';
const userId = '615417';

//Fetch data Previous Day

//Fetch data Today

async function getToday(url,data){
    const head = {
        method:'POST',
        headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
        },
        dataType:'json',
        data:JSON.stringify(data)
    }

    const res = await fetch(url,head)
    const today = await res.json();
    return today;
}

//Fetch Day Next Day