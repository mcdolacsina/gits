<template>
    <h1>Axios Demo</h1>
    
    <p>{{covidData}} </p>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

 
  const  covidData=ref([])

  
  async function getCovidData () {
       axios({
                method:'get',
                url:'https://iata-and-icao-codes.p.rapidapi.com/airlines', 
                
                headers: {
                          'X-RapidAPI-Key': 'c7c89a12a3msh2a5f68805de598bp1692dejsn2282f0138c9d',
                          'X-RapidAPI-Host': 'iata-and-icao-codes.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data)
       console.log(covidData.value)
      })
  
  }


   onMounted( async () => {
       await getCovidData()
   })

  
</script>

