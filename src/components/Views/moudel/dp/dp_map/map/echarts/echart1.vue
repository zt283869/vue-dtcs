<template>
  <div>
    <div id="myChart" style="height: 100%;width: 100%;position: absolute;"></div>
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
        name:"频率精度测试",
        legendData:['频率精度'],
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
          this.name = this.eData.echart1.name
          this.legendData = this.eData.echart1.legendData
          this.xAxisData = this.eData.echart1.xAxisData
          this.seriesData = this.eData.echart1.seriesData
          this.draw();
          this.myChart.resize();
        },
        deep:true
      },
    },
    mounted(){
      // this.draw();
      this.myChart = echarts.init(document.getElementById('myChart'))
    },
    methods: {
      draw(){
        // 基于准备好的dom，初始化echarts实例

        let option = {
          title:{
            text:this.name,
            left:'5%',
            top:'7%',
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
            top: '18%',
            left: '1%',
            right: '4%',
            bottom: '8%',
            containLabel: true,
          },
          legend: {
            itemGap: 50,
            right:'10',
            top: '7%',
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
              margin: 5,
              textStyle: {
                color: '#d1e6eb',

              },
            },
            axisTick: {
              show: true,
            },
          }],
          visualMap: {
            top: "7%",
            right:100,
            align:"auto",
            orient:"horizontal",
            padding:5,
            textStyle: {
              fontSize: 12,
              color: '#fff'                             // 主标题文字颜色
            }, //文本样式
            pieces: [{
              gt: 10,
              lte: 20,
              color: '#ec0083'
            }],
            outOfRange: {
              color: '#17A5FB'
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
                    color:"#8300ec"
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
