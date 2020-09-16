<template>
  <div>
    <div id="myChart3" style="height: 95%;width: 918px;position: absolute; margin: 10px 5px 5px 5px;"></div>
  </div>
</template>

<script>

  import echarts from "echarts";
  import { mapState } from 'vuex'
  export default {
    name: 'TB',
    data () {
      return {
        myChart:"",
        name:"三阶互调测试",
        legendData:['互调(dB)'],
        xAxisData:["1605", "2182", "6215", "8291", "12290", "16420", "27500"],
        seriesData:[[]]
      }
    },
    computed: {
      // ...mapState(['eData'])
      // ...mapState({
      //   eData: state => state.eData
      // })
      eData() {
        return this.$store.state.eData;
      }

    },
    watch:{
      // eData() {
      //   debugger
      //   console.log("this.echartData",this.eData)
      //   this.name = this.eData.echart1.name
      //   this.legendData = this.eData.echart1.legendData
      //   this.xAxisData = this.eData.echart1.xAxisData
      //   this.seriesData = this.eData.echart1.seriesData
      //   this.draw();
      // },
      eData:{
        handler(val, oldVal){
          console.log("this.echartData",this.eData)
          this.name = this.eData.echart3.name
          this.legendData = this.eData.echart3.legendData
          this.xAxisData = this.eData.echart3.xAxisData
          this.seriesData = this.eData.echart3.seriesData
          this.draw();
          this.myChart.resize();
        },
        deep:true
      }
    },
    mounted(){
      // this.draw();
      this.myChart = echarts.init(document.getElementById('myChart3'))
    },
    methods: {
      draw(){
        // 基于准备好的dom，初始化echarts实例

        // let option = {
        //   title:{
        //     text:this.name,
        //     left:'5%',
        //     top:'7%',
        //     textStyle:{
        //       //文字颜色
        //       color:'#ccc',
        //       //字体风格,'normal','italic','oblique'
        //       fontStyle:'normal',
        //       //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        //       fontWeight:'bold',
        //       //字体大小
        //       fontSize:"18"
        //     }
        //   },
        //   tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //       type: 'cross',
        //       label: {
        //         backgroundColor: '#6a7985'
        //       }
        //     }
        //   },
        //   grid: {
        //     top: '15%',
        //     left: '1%',
        //     right: '5%',
        //     bottom: '8%',
        //     containLabel: true,
        //   },
        //   legend: {
        //     itemGap: 50,
        //     right:'10',
        //     top: '7%',
        //     data: this.legendData,
        //     textStyle: {
        //       color: '#f9f9f9',
        //       borderColor: '#fff'
        //     },
        //   },
        //   xAxis: [{
        //     type: 'category',
        //     boundaryGap: true,
        //     axisLine: { //坐标轴轴线相关设置。数学上的x轴
        //       show: true,
        //       lineStyle: {
        //         color: '#f9f9f9'
        //       },
        //     },
        //     axisLabel: { //坐标轴刻度标签的相关设置
        //       textStyle: {
        //         color: '#d1e6eb',
        //         margin: 15,
        //       },
        //     },
        //     axisTick: {
        //       show: false,
        //     },
        //     data: this.xAxisData,
        //   }],
        //   yAxis: [{
        //     type: 'value',
        //     min:0,
        //     max:60,
        //     axisLabel:{
        //       formatter: function (value) {
        //         var texts = [];
        //         if(value==0){
        //           texts.push('标准');
        //         }
        //         else if (value <=5) {
        //           texts.push('优');
        //         }
        //         else if (value<= 7) {
        //           texts.push('良');
        //         }
        //         else if(value<= 10){
        //           texts.push('合格');
        //         }
        //         else{
        //           texts.push('不合格');
        //         }
        //         return texts;
        //
        //       }
        //     },
        //     splitNumber: 7,
        //     splitLine: {
        //       show: true,
        //       lineStyle: {
        //         color: '#0a3256'
        //       }
        //     },
        //     axisLine: {
        //       show: true,
        //     },
        //     axisLabel: {
        //       margin: 5,
        //       textStyle: {
        //         color: '#d1e6eb',
        //
        //       },
        //     },
        //     axisTick: {
        //       show: true,
        //     },
        //   }],
        //   visualMap: {
        //     top: "7%",
        //     right:100,
        //     align:"auto",
        //     orient:"horizontal",
        //     padding:5,
        //     textStyle: {
        //       fontSize: 12,
        //       color: '#fff'                             // 主标题文字颜色
        //     }, //文本样式
        //     pieces: [{
        //       gt: 40,
        //       lte: 60,
        //       color: 'red'
        //     }],
        //     outOfRange: {
        //       color: '#28ffb3'
        //     },
        //     seriesIndex: 0
        //   },
        //   series: [
        //     {
        //       name: this.legendData[0],
        //       type: 'line',
        //       smooth: true, //是否平滑曲线显示
        //       // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        //       showAllSymbol: false,
        //       symbol: 'emptyCircle',
        //       symbolSize: 6,
        //       markLine: {
        //         // symbol:"none",               //去掉警戒线最后面的箭头
        //         label:{
        //           position:"middle",         //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
        //           formatter: "合格警戒线"
        //         },
        //         data : [{
        //           silent:false,             //鼠标悬停事件  true没有，false有
        //           lineStyle:{               //警戒线的样式  ，虚实  颜色
        //             type:"solid",
        //             color:"#ec0b0b"
        //           },
        //           name: '合格警戒线',
        //           yAxis: 40
        //         }]
        //       },
        //       label: {
        //         show: true,
        //         position: 'top',
        //         textStyle: {
        //           color: '#fff',
        //         }
        //       },
        //       data: this.seriesData[0]
        //     },
        //   ]
        // }
        const sideData = this.seriesData[0].map(item => item + 3.5)
        let option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            title:{
              text:this.name,
              left:'5%',
              top:'3%',
              textStyle:{
                //文字颜色
                color:'#ccc',
                //字体风格,'normal','italic','oblique'
                fontStyle:'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight:'bold',
                //字体大小
                fontSize:"18"
              }
            },
            legend: {
              itemGap: 50,
              right:'6%',
              top: '3%',
              data: this.legendData,
              textStyle: {
                color: '#f9f9f9',
                borderColor: '#fff'
              },
            },
            grid: {
              top: '15%',
              left: '1%',
              right: '9%',
              bottom: '8%',
              containLabel: true,
            },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#1e5ea9'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#d1e6eb',
                margin: 15,
              },
            },
            axisTick: {
              show: false,
            },
            data: this.xAxisData,
          }],
            yAxis: [{
              type: 'value',
              min:0,
              max:60,
              axisLabel:{
                formatter: function (value) {
                  var texts = [];
                  if(value==0){
                    texts.push('标准');
                  }
                  else if (value <=5) {
                    texts.push('优');
                  }
                  else if (value<= 7) {
                    texts.push('良');
                  }
                  else if(value<= 10){
                    texts.push('合格');
                  }
                  else{
                    texts.push('不合格');
                  }
                  return texts;

                }
              },
              splitNumber: 7,
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#0a3256'
                }
              },
              axisLine: {
                show: true,
              },
              axisLabel: {
                margin: 5,
                textStyle: {
                  color: '#d1e6eb',

                },
              },
              axisTick: {
                show: true,
              },
            }],

          series: [{
            name: this.legendData,
            tooltip: {
              show: false
            },
            type: 'bar',
            barWidth: 24.5,
            "markLine": {
              "silent": true,
              "symbol": "none",
              "label": {
                "position": "middle",
                "formatter": "{b}"
              },
              "data": [{
                "name": "超过百分之30",
                "yAxis": 30,
                "lineStyle": {
                  "color": "red"
                },
              }]
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#0B4EC3" // 0% 处的颜色
                }, {
                  offset: 0.6,
                  color: "#138CEB" // 60% 处的颜色
                }, {
                  offset: 1,
                  color: "#17AAFE" // 100% 处的颜色
                }], false)
              }
            },
            data: this.seriesData[0],
            barGap: 0
          }, {
            type: 'bar',
            barWidth: 8,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: "#09337C" // 0% 处的颜色
                }, {
                  offset: 0.6,
                  color: "#0761C0" // 60% 处的颜色
                }, {
                  offset: 1,
                  color: "#0575DE" // 100% 处的颜色
                }], false)
              }
            },
            barGap: 0,
            data: this.seriesData[0]
          },
          //   {
          //   name: 'b',
          //   tooltip: {
          //     show: false
          //   },
          //   type: 'pictorialBar',
          //   itemStyle: {
          //     borderWidth: 1,
          //     borderColor: '#0571D5',
          //     color: '#1779E0'
          //   },
          //   symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
          //   symbolSize: ['30', '12'],
          //   symbolOffset: ['0', '-11'],
          //   //symbolRotate: -5,
          //   symbolPosition: 'end',
          //   data: this.seriesData[0],
          //   z: 3
          // }
          ]
        }
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
