<template>
    <div class="chart-container contain">
        <el-row>
            <!-- <el-col :span="12">
                <div id="chartColumn" style="width:500px; height:400px;"></div>
            </el-col> -->
            <el-col :span="12">
                <div id="chartBar" style="width:500px; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="width:500px; height:400px;"></div>
            </el-col>
            <!-- <el-col :span="12">
                <div id="chartPie" style="width:500px; height:400px;"></div>
            </el-col> -->
        </el-row>
    </div>
</template>
 
<script>
    import * as echarts from "echarts";
    import {getArticalfrequency,getAlldata} from "../config/net.js"
 
    export default {
        name:'Echarts',
        data() {
            return {
                // chartColumn: null,
                chartBar: null,
                chartLine: null,
                // chartPie: null
                articalFrequency:{
                    name:['文章发布频率'],
                    time:[],
                    num:[]
                },
                row:{
                    name:[],
                    num:[]
                }
            }
        },
 
        methods: {
            // drawColumnChart() {
            //     this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            //     this.chartColumn.setOption({
            //       title: { text: '分类文章数' },
            //       tooltip: {},
            //       xAxis: {
            //           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            //       },
            //       yAxis: {},
            //       series: [{
            //         name: '文章数',
            //         type: 'bar',
            //           data: [5, 20, 36, 10, 10, 20]
            //       }]
            //     });
            // },
            drawBarChart() {
                this.chartBar = echarts.init(document.getElementById('chartBar'));
                this.chartBar.setOption({
                    title: {
                        text: '分类文章数',
                        subtext: '数据来自数据库'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        // data: ['2011年', '2012年']
                        data:['数量']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        // data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                        data:this.row.name
                    },
                    series: [
                        // {
                        //     name: '2011年',
                        //     type: 'bar',
                        //     data: [18203, 23489, 29034, 104970, 131744, 630230]
                        // },
                        // {
                        //     name: '2012年',
                        //     type: 'bar',
                        //     data: [19325, 23438, 31000, 121594, 134141, 681807]
                        // }
                        {
                            name:'数量',
                            type:'bar',
                            data:this.row.num
                        }
                    ]
                });
            },
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    title: {
                        text: '文章发布频率'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        // data: ['邮件营销', '联盟广告', '搜索引擎']
                        data:this.articalFrequency.name
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        data:this.articalFrequency.time
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        // {
                        //     name: '邮件营销',
                        //     type: 'line',
                        //     stack: '总量',
                        //     data: [120, 132, 101, 134, 90, 230, 210]
                        // },
                        // {
                        //     name: '联盟广告',
                        //     type: 'line',
                        //     stack: '总量',
                        //     data: [220, 182, 191, 234, 290, 330, 310]
                        // },
                        // {
                        //     name: '搜索引擎',
                        //     type: 'line',
                        //     stack: '总量',
                        //     data: [820, 932, 901, 934, 1290, 1330, 1320]
                        // }
                        {
                            name:'文章发布频率',
                            type:'line',
                            stack:'总量',
                            data:this.articalFrequency.num
                        }
                    ]
                });
            },
            // drawPieChart() {
            //     this.chartPie = echarts.init(document.getElementById('chartPie'));
            //     this.chartPie.setOption({
            //         title: {
            //             text: 'Pie Chart',
            //             subtext: '纯属虚构',
            //             x: 'center'
            //         },
            //         tooltip: {
            //             trigger: 'item',
            //             formatter: "{a} <br/>{b} : {c} ({d}%)"
            //         },
            //         legend: {
            //             orient: 'vertical',
            //             left: 'left',
            //             data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            //         },
            //         series: [
            //             {
            //                 name: '访问来源',
            //                 type: 'pie',
            //                 radius: '55%',
            //                 center: ['50%', '60%'],
            //                 data: [
            //                     { value: 335, name: '直接访问' },
            //                     { value: 310, name: '邮件营销' },
            //                     { value: 234, name: '联盟广告' },
            //                     { value: 135, name: '视频广告' },
            //                     { value: 1548, name: '搜索引擎' }
            //                 ],
            //                 itemStyle: {
            //                     emphasis: {
            //                         shadowBlur: 10,
            //                         shadowOffsetX: 0,
            //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                     }
            //                 }
            //             }
            //         ]
            //     });
            // },
            drawCharts() {
                // this.drawColumnChart()
                this.drawBarChart()
                this.drawLineChart()
                // this.drawPieChart()
            },
        },
 
        mounted: function () {
            // this.$axios({
            //     url:getArticalfrequency,
            //     // withCredentials:true,
            //     method:'GET',
            // }).then(res=>{
            //     console.log(res);
            //     for(let frequency of res.data){
            //         this.articalFrequency.time.push(frequency.time);
            //         this.articalFrequency.num.push(frequency.num);
            //     }
            //     this.drawCharts();
            //     console.log(this.articalFrequency);
            // }).catch(err=>{
            //     console.error(err);
            // });
            this.$axios({
                url:getAlldata,
                // withCredentials:true,
                method:'GET',
            }).then(res=>{
                console.log(res);
                for(let frequency of res.data.articalfrequency){
                    this.articalFrequency.time.push(frequency.time);
                    this.articalFrequency.num.push(frequency.num);
                }
                for(let essay of res.data.classify){
                    this.row.name.push(essay.name);
                    this.row.num.push(essay.num);
                }
                console.log('1---',this.row.name);
                console.log('2---',this.row.num);
                this.drawCharts();
            }).catch(err=>{
                console.error(err);
            });
        },
        updated: function () {
            this.drawCharts();
        }
    }
</script>
 
<style scoped>
    .chart-container {
        background-color:white;
        height: 100%;
        width: 100%;
    }
 
    .el-col {
        padding: 30px;
    }

    .contain{
        overflow: scroll;
    }
</style>

