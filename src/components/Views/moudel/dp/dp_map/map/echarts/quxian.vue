<template>
  <div>
    <div id="myChart" style="height: 250px;width: 918px;position: absolute; margin: 10px 5px 5px 5px;"></div>
  </div>
</template>

<script>

  import echarts from "echarts";
  export default {
    name: 'TB',
    props: {
      echartData: {
        type: Object,
        default: function () {
          return {};
        },
      }
    },
    data () {
      return {
        myChart:"",
        legendData:['良品率'],
        xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        seriesData:[
          [300, 482, 602, 767, 886, 915, 1116]]
      }
    },
    watch:{
      echartData() {
        console.log("this.echartData",this.echartData)
        this.legendData = this.echartData.echart1.legendData
        this.xAxisData = this.echartData.echart1.xAxisData
        this.seriesData = this.echartData.echart1.seriesData
          this.draw();
        }
    },
    mounted(){
      this.legendData = this.echartData.echart1.legendData
      this.xAxisData = this.echartData.echart1.xAxisData
      this.seriesData = this.echartData.echart1.seriesData
      // this.draw();
      this.myChart = echarts.init(document.getElementById('myChart'))
    },
    methods: {
      draw(){
        // 基于准备好的dom，初始化echarts实例

        let option = {
          title:{
            text:'频率精度测试',
            left:'left',
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
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            top: '15%',
            left: '1%',
            right: '1%',
            bottom: '8%',
            containLabel: true,
          },
          legend: {
            itemGap: 50,
            left:'right',
            data: this.legendData,
            textStyle: {
              color: '#f9f9f9',
              borderColor: '#fff'
            },
          },
          xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#f9f9f9'
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
            max:20,
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
              margin: 20,
              textStyle: {
                color: '#d1e6eb',

              },
            },
            axisTick: {
              show: true,
            },
          }],
          visualMap: {
            show: true,
            pieces: [{
              gt: 10,
              lte: 20,
              color: 'red'
            }],
            outOfRange: {
              color: '#28ffb3'
            },
            seriesIndex: 0
          },
          series: [
            {
              name: this.legendData[0],
              type: 'line',
              smooth: true, //是否平滑曲线显示
              // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: false,
              symbol: 'emptyCircle',
              symbolSize: 6,
              markLine: {
                // symbol:"none",               //去掉警戒线最后面的箭头
                label:{
                  position:"middle",         //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                  formatter: "合格警戒线"
                },
                data : [{
                  silent:false,             //鼠标悬停事件  true没有，false有
                  lineStyle:{               //警戒线的样式  ，虚实  颜色
                    type:"solid",
                    color:"#ec0b0b"
                  },
                  name: '合格警戒线',
                  yAxis: 10
                }]
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                }
              },
              data: this.seriesData[0]
            },
          ]
        }
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>

</style>
