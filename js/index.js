const previousBtn = document.getElementById('previous');
const todayBtn = document.getElementById('today');
const tommorrowBtn = document.getElementById('tommorrow');
const zodiacList = document.getElementById('zodiacList');
const results = document.getElementById('results');

//Get the value when clicked the today btn
todayBtn.addEventListener('click',function(e){
    e.preventDefault();
    getToday(zodiacList.value)
    .then(data => {
        results.innerHTML = `
        <ul class="collection with-header">
        <li class="collection-header"><h4>${data.compatibility}</h4></li>
        <li class="collection-item">Current Date: ${data.current_date}</li>
        <li class="collection-item">Lucky Number: ${data.lucky_number}</li>
        <li class="collection-item">Lucky Time: ${data.lucky_time}</li>
        <li class="collection-item">Color: ${data.color}</li>
        <li class="collection-item">Date Range: ${data.date_range}</li>
        <li class="collection-item">Mood: ${data.mood}</li>
        <li class="collection-item">Description: ${data.description}</li>
      </ul>  
        `
    })
    .catch(err => console.log(err))
})

 //Get the value when clicked the previous btn
 previousBtn.addEventListener('click',function(e){
    e.preventDefault();
    getPrevious(zodiacList.value)
    .then(data => {
        results.innerHTML = `
        <ul class="collection with-header">
        <li class="collection-header"><h4>${data.compatibility}</h4></li>
        <li class="collection-item">Current Date: ${data.current_date}</li>
        <li class="collection-item">Lucky Number: ${data.lucky_number}</li>
        <li class="collection-item">Lucky Time: ${data.lucky_time}</li>
        <li class="collection-item">Color: ${data.color}</li>
        <li class="collection-item">Date Range: ${data.date_range}</li>
        <li class="collection-item">Mood: ${data.mood}</li>
        <li class="collection-item">Description: ${data.description}</li>
      </ul>  
        `
    })
    .catch(err => console.log(err))
})

 //Get the value when clicked the tommorrow btn
 tommorrowBtn.addEventListener('click',function(e){
    e.preventDefault();
    getTomorrow(zodiacList.value)
    .then(data => {
        results.innerHTML = `
        <ul class="collection with-header ">
        <li class="collection-header"><h4>${data.compatibility}</h4></li>
        <li class="collection-item">Current Date: ${data.current_date}</li>
        <li class="collection-item">Lucky Number: ${data.lucky_number}</li>
        <li class="collection-item">Lucky Time: ${data.lucky_time}</li>
        <li class="collection-item">Color: ${data.color}</li>
        <li class="collection-item">Date Range: ${data.date_range}</li>
        <li class="collection-item">Mood: ${data.mood}</li>
        <li class="collection-item">Description: ${data.description}</li>
      </ul>  
        `
    })
    .catch(err => console.log(err))
})


//init the select form
var elems = document.querySelectorAll('select');
M.FormSelect.init(elems, {});