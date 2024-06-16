<template>
    <div class="pagination">
        <button @click="previousPage()" :disabled="currentPage === 1" class="arrow">{{ '<' }}</button>
                <span>{{ currentPage }}</span>
                <button  @click="nextPage()" :disabled="currentPage === totalPages"
                    class="arrow">></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // currentPage: 1,
            // totalPages: 10 // Replace with the actual total number of pages
        };
    },
    methods: {
        previousPage() {
            if (this.currentPage > 1) {
                this.$emit('previousPage');
            }
        },
        nextPage() {
            // console.log(this.currentPage)
            // console.log(this.totalPages)

            if (this.currentPage < this.totalPages) {
                this.$emit('nextPage');
            }
        }
    },props:['currentPage','totalPages']
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

button {
    margin: 0 5px;
}

.arrow {
    width: 30px;
    height: 30px;
}
</style>