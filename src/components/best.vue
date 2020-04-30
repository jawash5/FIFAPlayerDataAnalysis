<template>
    <div class="body_best">
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
        <div class="label">
            <p align="center">选项卡</p>
            <el-tabs tab-position="left" style="height: 400px;" @tab-click="handleClick">
                <el-tab-pane :label=item  v-for="item in detail_data" :name=item :key="item"></el-tab-pane>
            </el-tabs>
        </div>

        <h3 class="title1">最强球场十一人</h3>

        <div id="best_11" v-if=content_show[0]>
            <div id="player_card_shoumen"><card></card></div>
            <div id="player_card_zuoqianfeng"><card></card></div>
            <div id="player_card_youqianfeng"><card></card></div>
            <div id="player_card_qianfeng"><card></card></div>
            <div id="player_card_zhonghouwei"><card></card></div>
            <div id="player_card_zuohouwei"><card></card></div>
            <div id="player_card_youhouwei"><card></card></div>
            <div id="player_card_zhongqianwei"><card></card></div>
            <div id="player_card_zhongfeng"><card></card></div>
            <div id="player_card_zuoqianwei"><card></card></div>
            <div id="player_card_youqianwei"><card></card></div>
        </div>

        <div class="single_data" v-if=content_show[1]><charts_speed></charts_speed></div>
        <div class="single_data" v-if=content_show[2]><charts_power></charts_power></div>
        <div class="single_data" v-if=content_show[3]><charts_attack></charts_attack></div>
        <div class="single_data" v-if=content_show[4]><charts_IQ></charts_IQ></div>
        <div class="single_data" v-if=content_show[5]><charts_skill></charts_skill></div>
        <div class="single_data" v-if=content_show[6]><charts_club></charts_club></div>
    </div>
</template>

<script>
    import card from "@/components/card";
    import charts_speed from "@/components/chart/charts_speed";
    import charts_power from "@/components/chart/charts_power";
    import charts_attack from "@/components/chart/charts_attack";
    import charts_IQ from "@/components/chart/charts_IQ";
    import charts_skill from "@/components/chart/charts_skill";
    import charts_club from "@/components/chart/charts_club";
    export default {
        name: "best",
        components:{
            card: card,
            charts_speed:charts_speed,
            charts_power:charts_power,
            charts_attack:charts_attack,
            charts_IQ:charts_IQ,
            charts_skill:charts_skill,
            charts_club:charts_club
        },
        data() {
            return {
                detail_data:[
                    "最佳阵容","速度排名","力量排名","进攻排名","球商排名","技术排名","俱乐部排行"
                ],
                content_show:[
                    true,false,false,false,false,false,false
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClick(tab, event){
                console.log(tab, event);
                for (let i=0; i<this.detail_data.length; i++) {
                    if(tab.name === this.detail_data[i]) {
                        for (let j=0; j<this.detail_data.length; j++) {
                            this.content_show[j] = false;
                        }
                        this.content_show[i] = true;
                    }
                }
                this.$forceUpdate();
            }
        }
    }
</script>

<style scoped>
    @import "../assets/best/best.css";
</style>