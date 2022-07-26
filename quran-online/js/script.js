axios.get('https://api.quran.sutanlab.id/surah').then(v=>{
    console.log(v.data.data);
    v.data.data.forEach(item => {
        document.getElementById('surah').innerHTML += `
        <tr>
            <td>${item.number}</td>
            <td>${item.name.transliteration.id}</td>
            <td>${item.name.translation.id}</td>
        </tr>
        `
    });
})
const Home = {
    template : 
    `<div>
        <h1>Daftar surah</h1>
        <v-simple-table dark>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    No
                </th>
                <th class="text-left">
                    Surah
                </th>
                <th class="text-left">
                    Terjemahan
                </th>
                </tr>
            </thead>
            <tbody id="surah">
            </tbody>
            </template>
        </v-simple-table>
    </div>`
}
const opt = {
    theme : {
        dark : true
    }
}

const router = new VueRouter({
    mode : "history",
    routes : [
        {
            path : '/',
            component : Home
        },
    ]
})

new Vue({
    el : "#app",
    vuetify : new Vuetify(opt),
    data(){
        return {
            title : "Quran online",
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard',link:'/' },
            ],
            headers : [
                {name:'No'},
                {name:'Surah'},
                {name:'terjemahan'},
            ],
            drawer: false
        }
    },
    router : router
})
