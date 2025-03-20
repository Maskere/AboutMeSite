<template>
    <nav id="myHeader" class="topnav">
        <a href="/index.html">Home</a>
        <a href="/Pages/AboutMe.html">About Me</a>
        <a href="/Pages/MyWork.html">My Work</a>
        <a href="/Pages/MyHobbies.html">My Hobbies</a>
    </nav>
</template>

<script>
export default{
    data(){
        return {
        }
    },
    methods:{
        stickyHeader(){
            var header = document.getElementById("myHeader")
            console.log(header.window)
        }
    }
}
</script
