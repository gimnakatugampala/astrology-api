//Fetch Prevoius
async function getPrevious(sign){
    const head = {
        method:'POST'
    }
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=yesterday`,head)
    const yesterday = await res.json();
    return yesterday;
}

//Fetch data Today
async function getToday(sign){
    const head = {
        method:'POST'
    }
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,head)
    const today = await res.json();
    return today;
}

//Fetch Tommorrow
async function getTomorrow(sign){
    const head = {
        method:'POST'
    }
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=tomorrow`,head)
    const tomorrow  = await res.json();
    return tomorrow;
}

