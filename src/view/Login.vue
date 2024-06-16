<template>
    <div class="container">
        <h1>书籍展评线上平台</h1>
        <div class="login-container">
            <h2>登录</h2>
            <form action="/login" method="post">
                <div class="input-group">
                    <label for="username">用户名</label>
                    <input type="text" id="username" name="username" v-model="username" required>
                </div>
                <div class="input-group">
                    <label for="password">密码</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>
                <button @click="login" type="submit" class="loginButton">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if(true){
                document.querySelector('body').style.background = "linear-gradient(135deg, #fff, #fff)"

                // 登录成功
                this.$router.push('/')
            }
            // 处理登录逻辑
        }
    },
    beforeCreate(){
        document.querySelector('body').style.background = "linear-gradient(135deg, #71b7e6, #9b59b6)"
    },
}
</script>
<style>
body {
    font-family: Arial, sans-serif;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {


    text-align: center;
    color: white;
    overflow: hidden;
}

h1 {
    width: 100%;
    max-width: 400px;
    margin: 1.5rem auto;
    font-size: 2rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.login-container {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.login-container h2 {
    margin-bottom: 1rem;
    color: #333;
}

.input-group {
    margin-bottom: 1rem;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.input-group input {
    width: 93.6%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.loginButton {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.loginButton:hover {
    background-color: #4cae4c;
}
</style>