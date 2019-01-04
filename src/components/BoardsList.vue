<template>
    <div>
        <v-card v-for="board in boards" v-bind:key="board.id" :to="`/boards/` + board.id" class="my-2" dark>
            <v-card-title class="align-center" @click.prevent>
                <h3 class="headline"></h3>
                <v-text-field @blur="edit(board.id, board.name)"
                              v-model="board.name"
                              required
                ></v-text-field>
                <div class="ml-2">
                    <delete-icon-form :url="`/boards/` + board.id" :object-id="board.id"></delete-icon-form>
                </div>
            </v-card-title>
            <v-card-text :to="`/boards/` + board.id">

            </v-card-text>
        </v-card>
        <v-card dark>
            <v-card-actions class="justify-center">
                <v-icon @click="showCreate = true">add</v-icon>
            </v-card-actions>
        </v-card>
        <create-modal url="/boards" :visible="showCreate" @close="showCreate = false">
        </create-modal>
        <v-snackbar
                v-model="snackbar"
                :color="toast.color"
                :right="true"
        >
            {{toast.text}}
            <v-icon
                    dark
                    flat
                    @click="snackbar = false"
            >
                close
            </v-icon>
        </v-snackbar>
    </div>
</template>

<script>
    import DeleteIconForm from "./DeleteIconForm";
    import CreateModal from "./CreateModal";

    export default {
        name: "BoardsList",
        components: {CreateModal, DeleteIconForm},
        data() {
            return {
                boards: [],
                showCreate: false,
                snackbar: false,
                toast: {
                    color: 'success',
                    timeout: 2000,
                    text: ''
                }
            }
        },
        mounted() {
            this.getBoards();
        },
        methods: {
            async getBoards() {
                this.boards = await this.$http.get('/boards');
            },
            async edit(id, name) {
                let response = await this.$http.patch('/boards/' + id, {name: name});
            },
            addBoard(response) {
                if (!response.hasOwnProperty('status')) {
                    this.boards.push(response);
                }
                else {
                    this.toast.color = 'error';
                    this.toast.text = response.data.name[0];
                    this.snackbar = true;
                }
            }
        },
        created() {
            this.$bus.$on('deleted', (payload) => {
                if (payload[0] === true) {
                    if (payload[1] !== 0) {
                        this.boards.splice(this.boards.indexOf(payload[1]), 1)
                        this.toast.text = 'Board deleted successfully';
                        this.snackbar = true;
                    }
                }
            });
            this.$bus.$on('created', (response) => {
                this.addBoard(response);
            });
        }
    }
</script>

<style scoped>

</style>
