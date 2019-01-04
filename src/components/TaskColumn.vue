<template>
    <v-list two-line class="card-list">
        <v-subheader>
            <h2 class="headline"  v-text="column.name"></h2>
        </v-subheader>
        <draggable v-model="column.tasks" :options="{group: 'tasks'}" style="min-height: 10px">
            <task v-for="task in column.tasks" :key="task.id" :task="task"></task>
        </draggable>
    </v-list>
</template>

<script>
    import Draggable from 'vuedraggable';
    import Task from "./Task";
    export default {
        name: "TaskColumn",
        components: {
            Task,
          Draggable
        },
        props: {
            column: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .card-list{
        background: darkgray;
        border-radius: 10px;
    }
</style>
