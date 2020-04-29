<template>
    <div class="body">
        <el-menu
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/best">分析</el-menu-item>
        </el-menu>
        <h1 class="title">FIFA的探索性数据分析及可视化</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    @import "../assets/first/first.css";
</style>