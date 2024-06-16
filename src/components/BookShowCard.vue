<template>
    <router-link :to="{ name:'bookDetail',params:{book:book}}">
        <div class="book-show-card">
            <img :src="book.image" alt="Book Cover" class="book-image" />
            <div class="book-info">
                <h2>{{ book.title }}</h2>
                <p>{{ book.author }}</p>
                <p>{{ book.description }}</p>
            </div>
        </div>
    </router-link>

</template>

<script>
export default {
    name: 'BookShowCard',
    
    props: ['book']
        
}
</script>

<style scoped>
.book-show-card {
    display: inline-block;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    width: 180px;
}

.book-image {
    width: 100%;
    height: 190px;
    margin-right: 1rem;
}

.book-info {
    flex: 1;
    display: block;
}

h2 {
    margin: 0;
    font-size: 1.2rem;
}

p {
    margin: 0.5rem 0;
}
</style>