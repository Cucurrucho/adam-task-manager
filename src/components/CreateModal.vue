<template>
    <v-dialog v-model="show" max-width="30%">
        <v-card dark>
            <v-card-title>
                <span class="headline">New Dashboard</span>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Name" v-model="name" required></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-icon @click="create()" class="mr-2">add</v-icon>
                <v-icon @click.stop="show=false">close</v-icon>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                required: true,
            },
            url: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                name: ''
            }
        },
        methods: {
          async create(){
              this.$emit('close');
              let response = await this.$http.post(this.url, {name: this.name});
              this.$bus.$emit('created', response);
          }
        },
        computed: {
            show: {
                get () {
                    return this.visible
                },
                set (value) {
                    if (!value) {
                        this.$emit('close')
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
