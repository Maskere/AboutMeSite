<template>
    <input v-model="word" placeholder="Type a word" type="text">
    <button @click="save">Save</button>
    <button @click="showMessage">Show</button>
    <button @click="clearArray">Clear</button>
    <p></p>
    <div v-if="show">
        <table class="myTable">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Word</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(word,index) in words">
                    <td>{{ index }}</td>
                    <td>{{ word }}</td>
                    <td><button @click="removeFromArray(word)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default{
    data(){
        return {
            word: null,
            words: [],
            message: null,
            show:false,
        };
    },
    methods:{
        removeFromArray(word){
            this.words.splice(this.words.indexOf(word), 1);
        },
        save(){
            this.words.push(this.word);
        },
        showMessage(){
            if(this.show == false){
                this.show = true;
            }
            else if(this.show == true){
                this.show = false;
            }
        },
        clearArray(){
            this.words = []
        },
    }
};
</script>
