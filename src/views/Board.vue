<template>
    <v-container grid-list-xs>
        <v-layout row justify-space-between>
            <v-flex v-for="column in board.columns" :key="column.id" class="pa-2">
                <task-column :column="column"></task-column>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import TaskColumn from "../components/TaskColumn";
    export default {
        name: "Board",
        components: {TaskColumn},
        props: {
        },
        data () {
            return {
                board: {},
            }
        },
        mounted(){
            this.getBoard();
        },
        methods: {
            async getBoard(){
                this.board = await this.$http.get('/boards/' + this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>
