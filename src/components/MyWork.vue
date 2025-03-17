<script setup>
import Calculator from './Calculator.vue'
import WordCollector from './WordCollector.vue'
</script>

<template>
    <div class="container">
        <section>
            <h3>My Works and Expertise</h3>
            <p>Welcome to my portfolio page, where I showcase my skills and projects.</p>
        </section>

        <section>
            <h4>KVUC/HF</h4>
            <ul>
                <li>A group effort short movie: <a target="_blank" href="https://www.youtube.com/watch?v=NcNTg35bOC8">Luna</a></li>
            </ul>
        </section>

        <section>
            <h4>ZEALAND/Datamatiker</h4>
            <div class="row">
                <div class="col-md-6">
                    <h5>Programming Languages</h5>
                    <ul>
                        <li>C#</li>
                        <li>Python</li>
                        <li>HTML + JavaScript + Vue</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h5>Text Editors</h5>
                    <ul>
                        <li>Vim/Neovim (main)</li>
                        <li>Microsoft Visual Code</li>
                        <li>Microsoft Visual Studio</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h4>Skills and Projects</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Language/Framework</th>
                        <th>Projects/Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>C#</strong></td>
                        <td>
                            <ul>
                                <li>Unit Testing (TDD)</li>
                                <li>Console Applications</li>
                                <li>Unity Game Development</li>
                                <li>Generic classes and collections</li>
                                <li>TCP Server Console Application</li>
                                <li>MSSQL + Microsoft.EntityFramework</li>
                                <li>Web Applications with RazorPages + MSSQL + Microsoft.EntityFramework</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>RazorPages + HTML + JavaScript + Vue</strong></td>
                        <td>
                            <ul>
                                <li>this.website</li>
                                <li>Exam project (RazorPages): <a target="_blank" href="https://GitHub.com/Maskere/BUMS">BUMS</a></li>
                                <li>CSS + Bootstrap</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Python</strong></td>
                        <td>
                            <ul>
                                <li>TCP Client Console Application</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <p>
                I am a proficient software developer with a strong focus on command-line interfaces (CLI), proficient in both Windows and WSL (Ubuntu). My expertise lies in leveraging the power of the terminal to streamline development processes and automate tasks efficiently.
            </p>
            <p>
                With a deep understanding of Unix-based environments and scripting languages such as Bash, PowerShell, and Python, I excel in creating robust, scalable solutions that enhance productivity and performance.
            </p>
            <p>
                I primarily use Neovim, which has taught me a lot about the inner workings of text editors and integrated development environments (IDEs). This includes the use of Language Server Protocols (LSP), Debug Adapter Protocols (DAP), linters, and more. This experience has given me a deep knowledge of setting up development environments tailored to my specific needs.
            </p>
        </section>

        <section>
            <p>Most of my work can be found on my <a target="_blank" href="https://GitHub.com/Maskere">GitHub</a> account.</p>
        </section>

        <section>
            <h5>Examples:</h5>
            <h5 class="myLinks" @click="showAllFunc"><u>This is HTML + Vue + JS</u></h5>
            <div v-if="showAll">
                <h5>Word Collector</h5>
                <WordCollector/>
                <h5>Calculator</h5>
                <Calculator/>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAll: false,
        };
    },
    methods: {
        showAllFunc() {
            this.showAll = !this.showAll;
        }
    }
};
</script>

<style>
.table {
    width: 100%;
    border-collapse: collapse;
}
.table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
}
.table tr:nth-child(even) {
    background-color: #f2f2f2;
}
.table tr:hover {
    background-color: #ddd;
}
</style>

