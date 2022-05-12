<template>
<div>
  <h1>{{header}}</h1>
  <ul class="list-group">
    <li class="list-group-item" v-for="(country, index) in countyData.countries" :key="country.id" :title="country.details">
        {{index + counter}}-
       {{country.name}}
    </li>
    <button @click="counter++" class="btn btn-succes" type="button">+</button>
    <button @click="counter--" class="btn btn-danger" type="button">-</button>

  </ul>

</div>
</template>

<script>
import countyData from "@/data/countyData";
export default {
  name: "vacationPicker",
  data(){
    return{
      countyData,
      header: "Vue vacation Picker",
      counter: 0
    }
  }
}
</script>

<style scoped>

</style>