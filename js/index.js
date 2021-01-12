    const previousBtn = document.getElementById('previous');
    const todayBtn = document.getElementById('today');
    const tommorrowBtn = document.getElementById('tommorrow');
    const zodiacList = document.getElementById('zodiacList');

    //Get the value when clicked the today btn
    todayBtn.addEventListener('click',function(e){
        e.preventDefault();
        getToday(`https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:${zodiacList.value}`,zodiacList.value)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    })

     //Get the value when clicked the previous btn
     previousBtn.addEventListener('click',function(e){
        e.preventDefault();
        console.log(zodiacList.value)
    })

     //Get the value when clicked the tommorrow btn
     tommorrowBtn.addEventListener('click',function(e){
        e.preventDefault();
        getToday(`https://json.astrologyapi.com/v1/sun_sign_prediction/daily/${zodiacList.value}:`,zodiacList.value)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    })




    //init the select form
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
