    const previousBtn = document.getElementById('previous');
    const todayBtn = document.getElementById('today');
    const tommorrowBtn = document.getElementById('tommorrow');
    const zodiacList = document.getElementById('zodiacList');
    const generalInfo = document.getElementById('generalInfo');

    //Get the value when clicked the today btn
    todayBtn.addEventListener('click',function(e){
        e.preventDefault();
        getToday(zodiacList.value)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    })

     //Get the value when clicked the previous btn
     previousBtn.addEventListener('click',function(e){
        e.preventDefault();
        console.log(zodiacList.value)
    })

     //Get the value when clicked the tommorrow btn
     tommorrowBtn.addEventListener('click',function(e){
        e.preventDefault();
        console.log(zodiacList.value)
    })

     //Get Genral Info
     generalInfo.addEventListener('click',function(e){
        e.preventDefault();
        console.log(zodiacList.value)
    })




    //init the select form
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
