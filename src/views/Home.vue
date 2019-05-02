<template>
    <div class="home">
        欢迎访问我的网站，随便看！
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>

<style lang="less" scoped>
    .home {
        position: absolute;
        font-size: 50px;
        left: 50%;
        top: 50%;
        .transform(translate(-50%, -50%))
    }
</style>
