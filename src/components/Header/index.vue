<template>
    <div class="header">
        <span class="logo">个人博客网站</span>
        <ul class="nav">
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" to="/blog/list">博客</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style scoped lang="less">
    .header {
        line-height: 60px;
        .clearfix;
        border-bottom: 1px solid @color-border;
        background-color: @color-section;

        .logo {
            .fl;
            .fs24;
            .fb;
            .ml15;
        }
    }

    .nav {
        .fl;
        .ml30;
        .clearfix;

        li {
            .fl;
            .fs16;
            cursor: pointer;
            .mlr10;
        }
    }
</style>
