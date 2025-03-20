<template>
    <div>
        <span style="color:red;">Red: </span>{{red}}<br>
        <input id="redSlider" @input="changeColor" type="range" min="0" max="255" value="120" v-model="red"><br>

        <span style="color:green;">Green: </span>{{green}}<br>
        <input id="greenSlider" @input="changeColor" type="range" min="0" max="255" value="120" v-model="green"><br>

        <span style="color:blue;">Blue: </span>{{blue}}<br>
        <input id="blueSlider" @input="changeColor" type="range" min="0" max="255" value="120" v-model="blue">

        <div id="bgcolor" style="background-color: gray; width: 250px; height: 250px;">
            <div id="textcolor" style="text-align:center; padding:25%;">
                Change any of the sliders above to change the color of the box!
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            red: 120,
            green: 120,
            blue: 120
        }
    },
    methods:{
        changeColor(){
            var bgcolor = document.getElementById("bgcolor")
            var textcolor = document.getElementById("textcolor")
            bgcolor.style.backgroundColor = `rgb(${this.red},${this.green},${this.blue})`
            textcolor.style.color = `rgb(${-this.red},${-this.green},${-this.blue})`
        }
    },
}
</script>
