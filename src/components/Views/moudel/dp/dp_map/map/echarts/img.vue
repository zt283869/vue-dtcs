<template>
  <div style="height: 99%;width: 99%">
    <IMG :src="src" style="width: 100%;height:99%;margin: 4px 4px 2px 4px"/>
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
        src:"../../../../../../../../static/img/PICTURE0.BMP"
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
      eData:{
        handler(val, oldVal){
          this.src = this.eData.src.seriesData
        },
        deep:true
      }
    },
    mounted(){
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
