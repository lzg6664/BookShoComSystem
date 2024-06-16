<template>
    <div>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <a :href="category.url">{{ category.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                { id: 1, name: '科技', url: '/fiction' },
                { id: 2, name: '经管', url: '/non-fiction' },
                { id: 3, name: '文艺', url: '/mystery' },
                { id: 4, name: '教育', url: '/mystery' },
                { id: 5, name: '人文社科', url: '/mystery' },
                // Add more categories here
            ]
        };
    }
};
</script>

<style scoped>
/* Add your custom styles here */
div ul {
    background-color: #c2b8b8;
    margin: 0px;
    margin-bottom: 10px;
    padding: 5px;
}
li {
    list-style: none;
    text-decoration: none;
    display: inline-block;
    background-color: #ddd;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;

}
a {
    text-decoration: none;
    color: #333;
    padding: 5px;
    border-radius: 5px;
}
</style>