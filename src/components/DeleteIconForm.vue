<template>
    <v-icon @click="deleteObject()">delete</v-icon>
</template>

<script>
    export default {
        name: "DeleteIconForm",
        props: {
            url: {
                type: String,
                required: true
            },
            objectId: {
                type: Number,
                default: 0
            }
        },
        methods: {
            async deleteObject() {
                let status = await this.$http.delete(this.url);
                this.$bus.$emit('deleted', [status, this.object]);
            }
        },
    }
</script>

<style scoped>

</style>
