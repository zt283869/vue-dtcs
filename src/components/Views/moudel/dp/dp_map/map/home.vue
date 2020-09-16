<template>
  <div style="width: 100%;height: 100%;background-image: url('/static/img/bj.png')">
    <div class="top">
      <div class="imgSrcL">
        <div class="time">
          <svg t="1590400204921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2825" width="240" height="240"><path d="M512 950c-59.1 0-116.5-11.6-170.5-34.4-52.2-22.1-99-53.6-139.2-93.8-40.2-40.2-71.8-87-93.8-139.2C85.6 628.5 74 571.1 74 512s11.6-116.5 34.4-170.5c22.1-52.2 53.6-99 93.8-139.2s87-71.8 139.2-93.8C395.5 85.6 452.9 74 512 74s116.5 11.6 170.5 34.4c52.2 22.1 99 53.6 139.2 93.8 40.2 40.2 71.8 87 93.8 139.2 22.8 54 34.4 111.4 34.4 170.5 0 59.1-11.6 116.5-34.4 170.5-22.1 52.2-53.6 99-93.8 139.2-40.2 40.2-87 71.8-139.2 93.8-54 23-111.4 34.6-170.5 34.6z m0-806c-98.3 0-190.7 38.3-260.2 107.8S144 413.7 144 512c0 98.3 38.3 190.7 107.8 260.2S413.7 880 512 880s190.7-38.3 260.2-107.8S880 610.3 880 512s-38.3-190.7-107.8-260.2S610.3 144 512 144z" p-id="2826" fill="#20e0dc"></path><path d="M512 547c-9.3 0-18.1-3.6-24.7-10.2-6.5-6.5-10.3-15.6-10.3-24.8V249.6c0-19.3 15.7-35 35-35s35 15.7 35 35v227.3l222.5-0.8c19.2 0 34.9 15.6 35 34.9 0.1 19.3-15.6 35.1-34.9 35.1l-257.5 0.9h-0.1z" p-id="2827" fill="#20e0dc"></path></svg>
          {{gettime}}
        </div>
        <div>
          <img src="../../../../../../../static/img/topBg.png">
        </div>
      </div>
      <dv-decoration-3 style="width:350px;height:40px;position: absolute;left: 370px;top: 10px;" />
      <dv-decoration-11 class="imgSrcC" style=" padding: 3px;z-index:9999;color:#fff;border-radius:15px;font-size:28px;font-weight: bold">WT-6000中高频无线电装置测试</dv-decoration-11>
      <dv-decoration-3 style="width:350px;height:40px;position: absolute;right: 370px;top: 10px;" />
      <div class="imgSrcR">
        <div class="weather">
          <iframe width="270" scrolling="no" height="22" frameborder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=1&color=%2361d6d3&bgc=%23&bdc=%23&icon=1&wind=0&num=1&site=12"></iframe>
        </div>
        <div>
          <img src="../../../../../../../static/img/topBg.png">
        </div>
      </div>
    </div>
    <div class="center-a">
      <dv-border-box-1 height="500px">
        <dv-decoration-2 :reverse="true" style="width:10px;height:720px;position: absolute;margin: 54px 0 0 10px;" />
        <dv-decoration-2 :reverse="true" style="width:10px;height:720px;position: absolute;margin: 54px 0 0 1900px;" />
        <div style="width: 100%;height: 100%;">
          <div style="width: 100%;height: 66%;padding-bottom: 10px">
             <div style="width: 48%;height: 48%;display: inline-block;float: left;">
               <dv-border-box-5 :reverse="true" style="margin: 20px 0 10px 20px;padding-right: 15px;box-sizing:border-box;padding: 10px 0px 0px 45px">
               <div v-if="num>0">
               <eChart1></eChart1>
               </div>
               </dv-border-box-5>
               <dv-border-box-5 :reverse="true" style="margin: 15px 0 10px 20px;padding-right: 15px;box-sizing:border-box;padding: 10px 0px 0px 45px">
               <eChart3></eChart3>
               </dv-border-box-5>
             </div>
            <div style="width: 48%;height:99%;display: inline-block;float:right;margin-right: 20px;margin-top: 25px">
              <dv-decoration-4 :dur="10" style="position: absolute;left:50%;top: 4%;width:5px;height:550px;" />
              <dv-border-box-2 style="width: 100%;height: 97.5%;box-sizing: border-box;padding: 10px" >
              <imgpace></imgpace>
              </dv-border-box-2>
            </div>
          </div>
          <div style="width: 100%;height: 26%;">
            <dv-decoration-4 :reverse="true" :dur="30" style="position: absolute;top: 68%;left:2%;width:96%;height:5px;" />
            <dv-border-box-6 style="width:1880px;margin: 20px 0 20px 20px;padding-bottom: 20px">
            <dv-border-box-7 style="width:440px;display: inline-block;margin: 10px 10px 10px 18px">
            <eChart21></eChart21>
            </dv-border-box-7>
            <dv-border-box-7 style="width:440px;display: inline-block;margin: 10px 10px 10px 10px">
            <eChart22></eChart22>
            </dv-border-box-7>
            <dv-border-box-7 style="width:440px;display: inline-block;margin: 10px 10px 10px 10px">
            <eChart23></eChart23>
            </dv-border-box-7>
            <dv-border-box-7 style="width:440px;display: inline-block;margin: 10px 18px 10px 10px">
            <eChart24></eChart24>
            </dv-border-box-7>
            </dv-border-box-6>
          </div>
        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Uilts from  '../../../../../../uitls'
  import eChart1 from './echarts/echart1.vue';
  import eChart21 from './echarts/echart21.vue';
  import eChart22 from './echarts/echart22.vue';
  import eChart23 from './echarts/echart23.vue';
  import eChart24 from './echarts/echart24.vue';
  import eChart3 from './echarts/echart3.vue';
  import imgpace from './echarts/img.vue';
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
  // import Jquery from jquery //在需要使用的页面中
  export default {
    name:'',
    data () {
      return {
        voideUre:"",
        num:0,
        setT:"",
        setData:[],
        eChart1Data:[[]],
        eChart21Data:[[]],
        eChart22Data:[[]],
        eChart23Data:[[]],
        eChart24Data:[[]],
        eChart3Data:[[]],
        gettime:"",
      }
    },
    components:{
      eChart1,
      eChart21,
      eChart22,
      eChart23,
      eChart24,
      eChart3,
      imgpace
    },
    computed: {
      ...mapState(['eData'])
    },
    mounted() {
      this.newData()
    },
    methods: {
      ...mapMutations([
        'pushData',
        'pushData7'
      ]),
      //创建定时器
      currentTime(){
        setInterval(this.getTime,500)
      },
      //创建定时器
      dsTime(){
        this.setT = setTimeout(this.newData,1000)
      },
      //获取当前时间，进行转换
      newData:function(){
        let _this = this
        if(_this.num<7){

          let str1 = _this.randomNum(1,15)
          _this.eChart1Data[0].push(str1)
          let data1 = {
            "name":"echart1",
            "seriesData":_this.eChart1Data
          }
          _this.pushData(data1)

          let str21 = _this.randomNum(30,80)
          _this.eChart21Data[0].push(str21)
          let data21 = {
            "name":"echart21",
            "seriesData":_this.eChart21Data
          }
          _this.pushData(data21)

          let str22 = _this.randomNum(30,80)
          _this.eChart22Data[0].push(str22)
          let data22 = {
            "name":"echart22",
            "seriesData":_this.eChart22Data
          }
          _this.pushData(data22)

          let str23 = _this.randomNum(30,80)
          _this.eChart23Data[0].push(str23)
          let data23 = {
            "name":"echart23",
            "seriesData":_this.eChart23Data
          }
          _this.pushData(data23)

          let str24= _this.randomNum(30,80)
          _this.eChart24Data[0].push(str24)
          let data24 = {
            "name":"echart24",
            "seriesData":_this.eChart24Data
          }
          _this.pushData(data24)

          let str3 = _this.randomNum(15,45)
          _this.eChart3Data[0].push(str3)
          let data3 = {
            "name":"echart3",
            "seriesData":_this.eChart3Data
          }
          _this.pushData(data3)

          let src = "../../../../../../../../static/img/PICTURE"+_this.num+".BMP"
          let srcdata = {
            "name":"src",
            "seriesData":src
          }
          _this.pushData(srcdata)
        }
        else{

          let str1 = _this.randomNum(1,15)
          _this.eChart1Data[0].push(str1)
          let data1 = {
            "name":"echart1",
            "seriesData":_this.eChart1Data
          }
          _this.pushData7(data1)

          let str21 = _this.randomNum(30,80)
          _this.eChart21Data[0].push(str21)
          let data21 = {
            "name":"echart21",
            "seriesData":_this.eChart21Data
          }
          _this.pushData7(data21)

          let str22 = _this.randomNum(30,80)
          _this.eChart22Data[0].push(str22)
          let data22 = {
            "name":"echart22",
            "seriesData":_this.eChart22Data
          }
          _this.pushData7(data22)

          let str23 = _this.randomNum(30,80)
          _this.eChart23Data[0].push(str23)
          let data23 = {
            "name":"echart23",
            "seriesData":_this.eChart23Data
          }
          _this.pushData7(data23)

          let str24= _this.randomNum(30,80)
          _this.eChart24Data[0].push(str24)
          let data24 = {
            "name":"echart24",
            "seriesData":_this.eChart24Data
          }
          _this.pushData7(data24)

          let str3 = _this.randomNum(15,45)
          _this.eChart3Data[0].push(str3)
          let data3 = {
            "name":"echart3",
            "seriesData":_this.eChart3Data
          }
          _this.pushData7(data3)

          let src = "../../../../../../../../static/img/PICTURE"+_this.num%7+".BMP"
          let srcdata = {
            "name":"src",
            "seriesData":src
          }
          _this.pushData(srcdata)
        }

        _this.num++;
        console.log("eData",_this.eData);
        _this.dsTime();
      },
      //获取当前时间，进行转换
      getTime:function(){
        let _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
      },
      //生成从minNum到maxNum的随机数
      randomNum:function(minNum,maxNum){
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
      }
    },
    //生命周期函数中触发定时器
    created() {
      this.currentTime();
    },
  }
</script>
<style scoped lang="scss">
  @import '../../../../../../../static/css/exhibition/chiefPublic.css';
  .qy_select{
    width: 80px;
    height: 100%;
    color: #000000;
    curosr: pointer;
  }
  .qy_select li{
    padding: 10px;
    width: 80px;
    height: 20px;
    list-style-type:none;
    color: #a1dafb;
    text-align: center;
    float: left;
    curosr: pointer;
  }
  .qy_select li:hover{
    background-color: #a1dafb;
    color:#fff;
  }
  .qy_select1{
    width: 350px;
    height: 100%;
    color: #000;
    curosr: pointer;
  }
  .qy_select1 li{
    padding: 5px;
    width: 340px;
    height: 70px;
    list-style-type:none;
    color: #a1dafb;
    float: left;
    curosr: pointer;
  }
  .qy_select1 li:hover{
    background-color: #a1dafb;
    color:#fff;
  }
  .top{
    height: 7%;
    padding: 0px 11px;
    position: relative;
    top: -10px;
  }
  .center-a{
    height: 93%;
    width: 100%;
  }
  .imgSrcL,.imgSrcR{
    width: calc((100% / 2) - 233px);
    display: inline-block;
    vertical-align: bottom;
    div{
      height: 60px;
      img{
        width: 100%;
        height: 100%;
        display: inline-block;
      }

    }
  }
  .imgSrcR{
    div{
      img{
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
      }
    }
    .weather{
      width: 100%;
      height: auto;
      position: relative;
      top:26px;
      text-align: right;
    }

  }
  .imgSrcL{
    .time{
      width: 200px;
      height: auto;
      color: #61d6d3;
      font-size: 14px;
      display: inline-block;
      position: relative;
      top:18px;
      svg{
        width: 20px;
        height: 20px;
        vertical-align: sub;

      }
    }
  }

  .imgSrcC{
    width: 450px;
    height: 60px;
    display: inline-block;
    color: #61d6d3;
  }

</style>
<style  lang="scss">
  /* 左上角删除按键 */
  .BMap_pop img {
    width: 12px;
    height: 12px;
    top: 25px !important;
    left: 295px !important;
  }
</style>
