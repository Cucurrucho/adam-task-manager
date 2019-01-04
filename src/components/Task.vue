<template>
    <v-list-tile dark>
        <v-card>
            <v-card-text>
                <v-list-tile-content>
                    <v-list-tile-title v-text="task.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-card-text>
        </v-card>
    </v-list-tile>
</template>

<script>
    export default {
        name: "Task",
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
