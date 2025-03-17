import { createApp } from 'vue';
import AboutMe from './components/AboutMe.vue';
import MyWork from './components/MyWork.vue';
import Calculator from './components/Calculator.vue';
import navbar from './components/navbar.vue';

createApp(AboutMe).mount("#AboutMe");
createApp(MyWork).mount("#MyWork");
createApp(Calculator).mount("#Calculator");
createApp(navbar).mount("#navbar");
