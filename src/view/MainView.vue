<template>
    <div>
        123123
        test
        test
        
        <!-- Your content goes here -->
         1321321
         1321321
         123123
        <BookCatogory />
        <div class="book-cotainer">
            <BookShowCard v-for="(book,key) in books" :book="book" :key="key"  />
        </div>
        <div class="book-cotainer" style="margin-top: 10px;">
            <BookShowCard v-for="(book,key) in books" :book="book" :key="key" />
        </div>
        <pagination :currentPage="currentPage" :totalPages="totalPages" @previousPage="previousPageF"
            @nextPage="nextPageF" />
    </div>
</template>

<script>
import BookCatogory from '@/components/BookCatogory.vue'
import BookShowCard from '@/components/BookShowCard.vue'
import Pagination from '../components/Pagination.vue'
export default {

    name: 'MainView',
    data(){
        return {
            books:[{
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'The Great',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            },
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'The Great',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            },
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'The Great',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            },{
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'The Great',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            },{
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                description: 'The Great',
                image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            },
            ], 
            currentPage: 1,
            totalPages: 10,
        };
            
    },
    components: {
        BookCatogory,
        BookShowCard,
        Pagination
    },
    
    beforeCreate(){
        document.querySelector('body').style.background = "linear-gradient(135deg, #fff, #fff)"
    },
    created(){
        if(this.$route.currentPage!=null){
            this.currentPage = this.$router.currentPage;
            this.totalPages = this.$router.totalPages;
        }else{
            this.currentPage = 1;
            this.totalPages = 10;
        }

    },
    methods: {
        previousPageF(){
            if (this.currentPage > 1) {
                this.currentPage--;
                
            }
        },
        nextPageF(){
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                

            }
        }
    },
    watch: {
        currentPage: function(val){
            this.$router.replace({ path: '/mainView', params: {currentPage: this.currentPage}});
        }
    }
}
</script>

<style scoped>
/* Your component styles go here */
.book-cotainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 53px;
}
</style>style