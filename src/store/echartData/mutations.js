import Vue from 'vue'

// export const pushData = (state, data) => { // A组件点击更改名称为A
//   debugger
//   console.log("state",state)
//   state[data.name].seriesData = data.seriesData
// }

export const pushData = (state, data) => {
  console.log("state",state)
  Vue.set(state.eData[data.name],"seriesData",data.seriesData)
}
export const pushData7 = (state, data) => {
  console.log("state",state)
  state.eData[data.name]["seriesData"][0].splice(0,1)
  Vue.set(state.eData[data.name],"seriesData",data.seriesData)
}
