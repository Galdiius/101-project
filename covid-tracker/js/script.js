let xhttp = new XMLHttpRequest();
let confirmed = document.getElementById('confirmed')
let recovered = document.getElementById('recovered')
let death = document.getElementById('death')
let country = document.getElementById('country')
let title = document.getElementById('title')
axios.get('https://covid19.mathdro.id/api').then(v=>{
    confirmed.innerHTML = v.data.confirmed.value
    recovered.innerHTML = v.data.recovered.value
    death.innerHTML = v.data.deaths.value
})

axios.get('https://covid19.mathdro.id/api/countries').then(v=>{
    console.log(v.data)
    
    let html = '<option>Global</option>'

    v.data.countries.forEach(i=>{
        html += '<option>'+i.name+'</option>'
    })
    country.innerHTML = html
})

function countries(){
        let value = document.getElementById('country').value
        if(value != 'Global'){
            axios.get('https://covid19.mathdro.id/api/countries/'+value).then(v=>{
                title.innerHTML = "Case in "+value
                confirmed.innerHTML = v.data.confirmed.value
                recovered.innerHTML = v.data.recovered.value
                death.innerHTML = v.data.deaths.value
            })
        }else{
            axios.get('https://covid19.mathdro.id/api').then(v=>{
                title.innerHTML = "Case in Global"
                confirmed.innerHTML = v.data.confirmed.value
                recovered.innerHTML = v.data.recovered.value
                death.innerHTML = v.data.deaths.value
            })
        }
}