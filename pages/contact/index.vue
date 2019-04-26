<template>
    <v-container class="contact" justify-center>
        <v-layout column class="my-5">
            <h2 class="display-2 font-weight-thin mb-5">Contact me</h2>

            <v-flex>
                <v-btn icon class="ml-5" outline color="blue-grey" href="mailto:hello@felipeflor.com">
                    <v-icon>email</v-icon>
                </v-btn>
                <a class="text-link ml-2" href="mailto:hello@felipeflor.com">hello@felipeflor.com</a>
            </v-flex>


            <v-flex>
                <v-btn icon class="ml-5" outline color="blue-grey" target="_blank" href="https://github.com/frflor">
                    <v-icon>fab fa-github-alt</v-icon>
                </v-btn>
                <a class="text-link ml-2" target="_blank" href="https://github.com/frflor">https://github.com/frflor</a>
            </v-flex>

            <v-flex>
                <v-btn icon class="ml-5" outline color="blue-grey" target="_blank" href="https://twitter.com/Felipe_R_Flor">
                    <v-icon>fab fa-twitter</v-icon>
                </v-btn>
                <a class="text-link ml-2" target="_blank" href="https://twitter.com/Felipe_R_Flor">https://twitter.com/Felipe_R_Flor</a>
            </v-flex>

            <v-flex>
                <v-btn icon class="ml-5" outline color="blue-grey" target="_blank" href="https://www.linkedin.com/in/felipe-flor/">
                    <v-icon>fab fa-linkedin</v-icon>
                </v-btn>
                <a class="text-link ml-2" target="_blank" href="https://www.linkedin.com/in/felipe-flor/">https://www.linkedin.com/in/felipe-flor/</a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        transition: (_, from) => ( !from || from.name === 'portfolio' ) ? 'slide-left' : 'slide-right',
    };
</script>

<style scoped lang="scss">
    $_blue-grey: #607D8B;
    .contact {
        .text-link {
            text-decoration: none;
            color: $_blue-grey;
            &:hover {
                text-decoration: underline;
                color: hsl(200, 68%, 46%);
            }
        }
    }

</style>

