<template>
    <v-container>
        <v-layout align-center justify-center>
            <boards-list></boards-list>
        </v-layout>
    </v-container>
</template>

<script>
    import BoardsList from "../components/BoardsList";
    export default {
        name: "Home",
        components: {BoardsList}
    }
</script>

<style scoped>

</style>
