<template>
  <div>
    <div id="myChart23" style="height: 95%;width: 430px;position: absolute; margin: 10px 5px 5px 5px;"></div>
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
        xAxisData:[],
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
          this.name = this.eData.echart23.name
          this.legendData = this.eData.echart23.legendData
          this.xAxisData = this.eData.echart23.xAxisData
          this.seriesData = this.eData.echart23.seriesData
          this.draw();
          this.myChart.resize();
        },
        deep:true
      }
    },
    mounted(){
      this.myChart = echarts.init(document.getElementById('myChart23'))
    },
    methods: {
      draw(){
        // 基于准备好的dom，初始化echarts实例

        let option = {
          title:{
            text:this.name,
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
            right: '5%',
            bottom: '3%',
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
          yAxis: [
            {
            type: 'value',
            min:0,
            max:90,
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
            top: 0,
            right:80,
            align:"auto",
            orient:"horizontal",
            padding:5,
            textStyle: {
              fontSize: 12,
              color: '#fff'                             // 主标题文字颜色
            }, //文本样式
            pieces: [{
              gt: 0,
              lte: 40,
              color: '#e64d45'
            },{
              gt: 60,
              lte: 100,
              color: 'red'
            }],
            outOfRange: {
              color: '#314eff'
            }
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
                symbol:"none",               //去掉警戒线最后面的箭头
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
                  yAxis: 40
                },
                  {
                  silent:false,             //鼠标悬停事件  true没有，false有
                  lineStyle:{               //警戒线的样式  ，虚实  颜色
                    type:"solid",
                    color:"#ec0b0b"
                  },
                  name: '合格警戒线',
                  yAxis: 60
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
