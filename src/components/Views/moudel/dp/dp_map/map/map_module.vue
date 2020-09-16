<template>
  <div style="width: 100%;height: 100%;">
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
      <dv-decoration-11 class="imgSrcC" style=" padding: 3px;z-index:9999;color:#fff;border-radius:15px;font-size:28px;font-weight: bold">
        监控大屏
        <dv-decoration-3 style="width:350px;height:40px;position: absolute;margin: -15px 0 0 -400px;" />
        <dv-decoration-3 style="width:350px;height:40px;position: absolute;margin: -15px 0 0 400px;" />
      </dv-decoration-11>
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
      <dv-border-box-1  backgroundColor="#08304a" height="500px">
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 100px;" />-->
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 350px;" />-->
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 600px;" />-->
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 1050px;" />-->
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 1300px;" />-->
        <!--      <dv-decoration-3 style="width:250px;height:20px;position: absolute;margin: 0 0 0 1550px;" />-->
        <dv-decoration-2 :reverse="true" style="width:10px;height:720px;position: absolute;margin: 54px 0 0 10px;" />
        <dv-decoration-2 :reverse="true" style="width:10px;height:720px;position: absolute;margin: 54px 0 0 1900px;" />
        <!--      <dv-decoration-11 style="width:200px;height:60px;position: absolute;margin: 0 0 0 850px;z-index:9999;background-color: #08304a;color:#fff;border-radius:15px;font-size:28px;font-weight: bold">-->
        <!--        监控大屏</dv-decoration-11>-->
        <div style="width: 100%;height: 98%;">
          <div id="myMap" style="width: 97%;height: 98%;left:25px;top:20px"></div>
        </div>
      </dv-border-box-1>
    </div>

    <div id="myMenu" style="width: 26%;height: 92%; background-color: rgba(8,48,74,0.8); position: absolute;top:7%;left: 1392px;border-bottom: 2px solid #a1dafb;
    border-top: 2px solid #a1dafb;border-left: 2px solid #a1dafb;">
      <div style="width: 500px;height: 40px;">
        <div style="font-size:22px;width: 400px;height: 40px;float: left;">
          <span style="height: 40px;line-height: 40px;width: 400px;color: #a1dafb;margin-left:15px;font-weight: bold">{{this.setData.name}}</span>
        </div>
        <el-button type="danger" icon="el-icon-close" style="margin:5px 5px 5px 65px;float: left" circle @click="xsBtn()" size="mini"></el-button>
      </div>
      <dv-border-box-8 style="height:31%;width: 480px;margin: 9px;">
        <video id='myVideo' :src="voideUre" controls="controls" loop="loop" autoplay="autoplay" style="height: 90%;width: 450px;margin:5px;margin-left: 18px;margin-top: 15px;position:absolute;opacity: 1">
          您的浏览器不支持 video 标签。
        </video>
      </dv-border-box-8>
      <dv-border-box-8 style="height:31%;width: 480px;margin: 9px;">
        <eChart :echartData = "setData.echartData"></eChart>
      </dv-border-box-8>
      <dv-border-box-8 style="height:30%;width: 480px;margin: 9px;">
        <eChart1 :echartData = "setData.echartData"></eChart1>
      </dv-border-box-8>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Uilts from  '../../../../../../uitls'
  import eChart from './echarts/quxian.vue';
  import eChart1 from './echarts/zhuzhuang.vue';
  // import Jquery from jquery //在需要使用的页面中
  export default {
    name:'',
    data () {
      return {
        voideUre:"",
        setData:"",
        all_d:[
          [
            {
              name:"总部生产车间",
              address:"XXXXXX路XXXXXX号",
              str:[
                {name:"生产产品",value:"终端主板"},
                {name:"在用设备",value:"贴片生产线"},
                {name:"车间状态",value:"良好"},
                {name:"质量状态",value:"受控"},
                {name:"当前任务",value:"贴片检查"}
                ],
              icon:"3",
              mp4Url:"static/img/1.mp4",
              comIcon:"static/img/companyLogo/logo1.jpg",
              jwd:[106.557021,29.570369,1],
              echartData:{
                echart1:{
                  legendData:['良品率'],
                  xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                  seriesData:[
                    [300, 482, 602, 767, 886, 915, 1116]]
                },
                echart2:{
                  category: [
                    {
                      name: "管控",
                      value: 2500
                    },
                    {
                      name: "集中式",
                      value: 8000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    }
                  ], // 类别
                  total: 10000,// 数据总数
                  datas : []
                }
              }
            },
            {
              name:"整机组装车间",
              address:"XXXXXX路XXXXXX号",
              str:[
                {name:"生产产品",value:"终端整机"},
                {name:"在用设备",value:"组装流水线"},
                {name:"车间状态",value:"良好"},
                {name:"质量状态",value:"受控"},
                {name:"当前任务",value:"单元检查"}
              ],
              icon:"3",
              mp4Url:"static/img/01.mp4",
              comIcon:"static/img/companyLogo/logo2.jpg",
              jwd:[116.380122,39.918255,1],
              echartData:{
                echart1:{
                  legendData:['良品率'],
                  xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                  seriesData:[
                    [300, 482, 602, 767, 886, 915, 1116]]
                },
                echart2:{
                  category: [
                    {
                      name: "管控",
                      value: 2500
                    },
                    {
                      name: "集中式",
                      value: 8000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    }
                  ], // 类别
                  total: 10000,// 数据总数
                  datas : []}
              }
            },
            {
              name:"天线测试厂",
              address:"XXXXXX路XXXXXX号",
              str:[
                {name:"生产产品",value:"终端天线"},
                {name:"在用设备",value:"微波暗室"},
                {name:"车间状态",value:"良好"},
                {name:"质量状态",value:"受控"},
                {name:"当前任务",value:"天线性能测试"}
              ],
              icon:"3",
              mp4Url:"static/img/2.mp4",
              comIcon:"static/img/companyLogo/logo2.jpg",
              jwd:[108.955505,34.333844,1],
              echartData:{
                echart1:{
                  legendData:['良品率'],
                  xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                  seriesData:[
                    [300, 182, 302, 567, 586, 515, 516]]
                },
                echart2:{
                  category: [
                    {
                      name: "管控",
                      value: 2500
                    },
                    {
                      name: "集中式",
                      value: 8000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    }
                  ], // 类别
                  total: 10000,// 数据总数
                  datas : []}
              }
            },
            {
              name:"基带生产车间",
              address:"XXXXXX路XXXXXX号",
              str:[
                {name:"生产产品",value:"基带主板"},
                {name:"在用设备",value:"贴片生产线"},
                {name:"车间状态",value:"良好"},
                {name:"质量状态",value:"受控"},
                {name:"当前任务",value:"贴片检查"}
              ],
              icon:"3",
              mp4Url:"static/img/3.mp4",
              comIcon:"static/img/companyLogo/logo2.jpg",
              jwd:[114.062663,22.557861,1],
              echartData:{
                echart1:{
                  legendData:['良品率'],
                  xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                  seriesData:[
                    [300, 482, 602, 767, 886, 915, 1116]]
                },
                echart2:{
                  category: [
                    {
                      name: "管控",
                      value: 2500
                    },
                    {
                      name: "集中式",
                      value: 8000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    }
                  ], // 类别
                  total: 10000,// 数据总数
                  datas : []}
              }
            },
            {
              name:"单元生产车间",
              address:"XXXXXX路XXXXXX号",
              str:[
                {name:"生产产品",value:"终端天线"},
                {name:"在用设备",value:"电装产线"},
                {name:"车间状态",value:"良好"},
                {name:"质量状态",value:"受控"},
                {name:"当前任务",value:"天线检查"}
              ],
              icon:"3",
              mp4Url:"static/img/4.mp4",
              comIcon:"static/img/companyLogo/logo2.jpg",
              jwd:[121.481962,31.232106,1],
              echartData:{
                echart1:{
                  legendData:['良品率'],
                  xAxisData:['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                  seriesData:[
                    [300, 482, 602, 767, 886, 915, 1116]]
                },
                echart2:{
                  category: [
                    {
                      name: "管控",
                      value: 2500
                    },
                    {
                      name: "集中式",
                      value: 8000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    },
                    {
                      name: "纳管",
                      value: 3000
                    }
                  ], // 类别
                  total: 10000,// 数据总数
                  datas : []}
              }
            },
          ]
        ],
        gettime:"",
      }
    },
    components:{
      eChart,
      eChart1,
    },
    computed: {},
    mounted() {
      let _this = this

      let dom1 = document.getElementById("myMenu")
      dom1.style.visibility ="hidden";
      let zoomLevel = 6;
      let map = new BMap.Map("myMap");
      window.map = map;
      //map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
      let mapStyle={  style : "midnight" }
      map.setMapStyle(mapStyle);
      // map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
      // map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
      // map.enableScrollWheelZoom();                            //启用滚轮放大缩小
      //map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
      map.disable3DBuilding();
      map.centerAndZoom(new BMap.Point(107.55,33.57),zoomLevel);
      map.setCurrentCity("西安");
      let myIcon1 = new BMap.Icon(Uilts.publicPath+"static/img/gaoxiao/qiyeIcon1.png", new BMap.Size(41,62));
      let myIcon2 = new BMap.Icon(Uilts.publicPath+"static/img/gaoxiao/qiyeIcon2.png", new BMap.Size(41,62));
      let myIcon3 = new BMap.Icon(Uilts.publicPath+"static/img/gaoxiao/qiyeIcon3.png", new BMap.Size(41,62));
      let myIcon4 = new BMap.Icon(Uilts.publicPath+"static/img/gaoxiao/qiyeIcon4.png", new BMap.Size(41,62));
      for(let i=0;i<_this.all_d.length;i++){
        for(let n=0;n<_this.all_d[i].length;n++){
          let item = JSON.parse(JSON.stringify(_this.all_d[i][n]))
          let sContent = _this.scDome(item)
          let point = new BMap.Point(item.jwd[0],item.jwd[1]);
          let marker = new BMap.Marker(point,{icon:myIcon3});
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
          let infoWindow1 = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
          marker.addEventListener("click", function(e){
            this.openInfoWindow(infoWindow1);
            _this.isshow = 1
            let dom1 = document.getElementById("myMenu")
            let myVideo = document.getElementById("myVideo")
            myVideo.play()
            dom1.style.visibility="visible";
            let lng = e.target.point.lng
            let lat = e.target.point.lat
            for(let i=0;i<_this.all_d.length;i++){
              for(let n=0;n<_this.all_d[i].length;n++){
                let item = JSON.parse(JSON.stringify(_this.all_d[i][n]))
                if(item.jwd[0]===lng && item.jwd[1]===lat){
                  _this.mathNum(item)
                  // _this.setData = item
                  _this.voideUre = Uilts.publicPath + item.mp4Url
                }
              }
            }
          });
          map.addOverlay(marker);
        }
      }
    },
    methods: {
      mathNum(item){
        let _this = this
        item.echartData.echart1.seriesData[0]=[]
        let sumNum = 0
        for(let num=0;num<100;num++){
           let dataNum = Math.floor(Math.random() * ((num+3) - num)) + num
          if(dataNum<0){
            dataNum=num
          }
          item.echartData.echart1.seriesData[0].push(dataNum)
          item.echartData.echart1.xAxisData=[]
          if(100-num<7){
            dataNum=100
            item.echartData.echart1.seriesData[0].push(dataNum)
            item.echartData.echart1.xAxisData=[]
            break;
          }
        }
        item.echartData.echart2.category=[
          {
            name: "终端主板",
            value: Math.floor(Math.random() * (9000 - 4500)) + 4500
          },
          {
            name: "终端整机",
            value: Math.floor(Math.random() * (9000 - 4500)) + 4500
          },
          {
            name: "终端天线",
            value: Math.floor(Math.random() * (9000 - 4500)) + 4500
          },
          {
            name: "基带主板",
            value: Math.floor(Math.random() * (9000 - 4500)) + 4500
          }
        ]
        _this.setData = item
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      xsBtn(){
        let dom1 = document.getElementById("myMenu")
        dom1.style.visibility="hidden";
        let myVideo = document.getElementById("myVideo")
        myVideo.pause()
      },
      scDome(item){
        let sContent = "<div class='content-border' style='width: 300px;height: 280px;background-color: #0b5875;border: 1px solid #0b5875;z-index: 9999'>"+
          "<span class='span1 row1'></span>"+
          "<span class='span1 row2'></span>"+
          "<span class='span1 col1'></span>"+
          "<span class='span1 col2'></span>"+
          "<span class='span2 row3'></span>"+
          "<span class='span2 row4'></span>"+
          "<span class='span2 col3'></span>"+
          "<span class='span2 col4'></span>"+
          "<div style='width: 100%;height: 125px;border-bottom: 1px solid #0b5875;'>"+
          // "<video id='myVideo' src='"+Uilts.publicPath+"static/img/jiance.mp4' controls='controls' loop='loop' autoplay='autoplay' style='height: 130px;width: 260px;margin: 20px;margin-left: 20px'>"+
          // "您的浏览器不支持 video 标签。"+
          // "</video>"+
          "<p style='height: 80px;width: 80px;margin-top: 20px;margin-left: 110px;margin-bottom: 15px'>" +
          "<img src='"+Uilts.publicPath+item.comIcon+"'   style='height: 100%;width: 100%;display: inline-block'>"+
          "</p>"+
          "<p style='font-size: 18px;color: #63AEFF;text-align: center'>"+item.name+"</p>"+
          // "<p style='font-size: 14px;color: #FFFFFF;text-align: center;width: 90%;margin: auto;' class='yc'>"+item.address+"</p>"+
          "</div>"+
          "<div style='width: 100%;height: 160px;'>"+
          "<table style='margin-top: 17px;font-size: 14px;color: #fff;width: 96%;margin-left: 2%'>"+
          "<tr style='height: 25px;text-align: center'><td>"+item.str[0].name+"："+item.str[0].value+"</td></tr>"+
          "<tr style='height: 25px;text-align: center'><td>"+item.str[1].name+"："+item.str[1].value+"</td></tr>"+
          "<tr style='height: 25px;text-align: center'><td>"+item.str[2].name+"："+item.str[2].value+"</td></tr>"+
          "<tr style='height: 25px;text-align: center'><td>"+item.str[3].name+"："+item.str[3].value+"</td></tr>"+
          "<tr style='height: 25px;text-align: center'><td>"+item.str[4].name+"："+item.str[4].value+"</td></tr>"+
          "</table>"+
          "</div>"+
          "</div>"
        return sContent
      },

      //创建定时器
      currentTime(){
        setInterval(this.getTime,500)
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
