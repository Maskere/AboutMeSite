<template>
    <input v-model="this.number1" placeholder="Type a number" type="number">
    <select v-model="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <input v-model="this.number2" placeholder="Type a number" type="number">
    <button @click="calculate">=</button>
    <span class="container">{{ result.toLocaleString("en", {useGrouping:true}) }}</span>
</template>

<script>
export default {
    data(){
        return{
            number1:null,
            number2:null,
            result:0,
            operation:"add"
        }
    },
    methods:{
        calculate(){
            switch(this.operation){
                case "add":
                    this.result = this.number1 + this.number2;
                break;
                case "subtract":
                    this.result = this.number1 - this.number2;
                break;
                case "multiply":
                    this.result = this.number1 * this.number2;
                break;
                case "divide":
                    this.result = this.number1 / this.number2;
                break;
            }
        }
    }
};
</script>
