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
            <div id="player_card_shoumen"><card element_id="shoumen" index=0></card></div>
            <div id="player_card_zuoqianfeng"><card element_id="zuoqianfeng" index=1></card></div>
            <div id="player_card_youqianfeng"><card element_id="youqianfeng" index=2></card></div>
            <div id="player_card_qianfeng"><card element_id="qianfeng" index=3></card></div>
            <div id="player_card_zhonghouwei"><card element_id="zhonghouwei" index=4></card></div>
            <div id="player_card_zuohouwei"><card element_id="zuohouwei" index=5></card></div>
            <div id="player_card_youhouwei"><card element_id="youhouwei" index=6></card></div>
            <div id="player_card_zhongqianwei"><card element_id="zhongqianwei" index=7></card></div>
            <div id="player_card_zhongfeng"><card element_id="zhongfeng" index=8></card></div>
            <div id="player_card_zuoqianwei"><card element_id="zuoqianwei" index=9></card></div>
            <div id="player_card_youqianwei"><card element_id="youqianwei" index=10></card></div>
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
            charts_club:charts_club,
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