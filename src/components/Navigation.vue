<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <a href="#" class="navigation__link">主页</a>
            </li>
            <!-- <li class="navigation__item">
                <a href="#" class="navigation__link">书籍分类</a>
            </li> -->
            <li class="navigation__item">
                <a href="#" class="navigation__link">作者列表</a>
            </li>
            <li class="navigation__item">
                <router-link to="/login" class="navigation__link">登录</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navigation {
    background-color: #f2f2f2;
    padding: 10px;
    /* margin-bottom: 10px; */
}

.navigation__list {
    list-style: none;
    display: inline;
    /* align-items: center; */
    padding: 0;
    margin: 0;
    text-align: left;
}

.navigation__item {
    margin-right: 10px;
    display: inline;
    text-align: left;
}
ul .navigation__item{
    text-align: left;
}
.navigation__link {
    text-decoration: none;
    color: #333;
    padding: 5px;
    border-radius: 5px;
}

.navigation__link:hover {
    background-color: #ddd;
}
</style>