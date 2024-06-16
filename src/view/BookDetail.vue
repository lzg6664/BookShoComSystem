    <template>
        <div class="book-detail container mt-5">
            <!-- 图片和介绍信息在同一行 -->
            <div class="row">
                <!-- 图片在左边 -->
                <div class="img-div">
                    <img :src="book.image" alt="Book Cover" class="img-fluid" />
                </div>
                <!-- 介绍信息在右边 -->
                <div class="info-div">
                    <h1>{{ book.title }}</h1>
                    <p><strong>Author:</strong> {{ book.author }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                    <p><strong>Description:</strong> {{ book.description }}</p>
                </div>
            </div>
            <!-- 评论区域在下面 -->
            <div class=" comment-box">
                <div class="col-12">
                    <h2>评论</h2>
                    <!-- 评论内容 -->
                    <div class="comments">
                        <p><strong>User1:</strong> Great book!</p>
                        <p><strong>User2:</strong> I found this book very insightful.</p>
                        <!-- 更多评论 -->
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
export default {
    name: 'BookDetail',
    data() {
        return {
            book: this.$route.params.book
        }
    },
    beforeCreate() {
        // document.querySelector('body').style.background = "linear-gradient(135deg, blue, blue)"
    }
}
</script>

<style scoped>
.book-detail {
    padding: 20px;
}

.container{
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
}
.title {
    color: #333;
}
.row{
    display: flex;
    justify-content:flex-start ;
    border-radius: 15px;
    box-shadow: 0 2px 34px rgba(0, 0, 0, 0.1);
    /* padding-left: 1px; */
    overflow: hidden;
}
/* 图片和介绍信息样式 */
.img-fluid{
    width: 200px;
    height: 100%;
}
.img-div{
    display: inline-block;
    height: 270px;
    border-radius: 15px;
        overflow: hidden;
}

.info-div {
    display: inline;
    margin-left: 80px;
}

/* 评论区域样式 */
.comments {
    margin-top: 20px;
}

.comment-box  {
    margin-top: 30px;
    box-shadow: 0 2px 34px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding-left: 40px;
    
}


</style>