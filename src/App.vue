<template>
  <div id="app">
    <NavBar @count="updatecount" @start="method" @stop='stop'></NavBar>
    <Stats v-bind:dataSet="feedArr"></Stats>
    <p v-bind="arr"></p>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Stats from "./components/Stats.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Stats
  },
  data() {
    return {
      arr: [],
      feedArr: [],
      ind: [],
      status: null
    };
  },
  methods: {
    updatecount: function(variable) {
      this.arr = [];
      for (var i = 0; i < variable; i++) {
        this.arr.push(Math.floor(Math.random() * 300));
      }
    },
    stop: function(){
        this.status = 'stop'
    },
    method: function(variable) {
      let array = this.arr.slice(0);
      console.log(array);
      let iarray = array.map((el, i) => {
        return [el, i];
      });
      console.log(iarray);
      if (variable == "mergeSort") {
        let fArray = this.mergeSort(iarray, 0, array.length - 1);
        this.status = 'running'
        this.toggleMerge();
        console.log(fArray);
      } else if (variable == "bubbleSort") {
        let fArray = this.bubbleSort(iarray);
        this.status = 'running'
        this.toggleBubble();
        console.log(fArray);
      } else if (variable == "quickSort") {
        let fArray = this.quickSort(iarray, 0, iarray.length - 1);
        this.status = 'running'
        this.toggleQuick();
        console.log(fArray);
      }
    },
    quickSort: function(items, left, right) {
      var index;
      if (items.length > 1) {
        index = this.quickPartition(items, left, right);
        if (left < index - 1) {
          this.quickSort(items, left, index - 1);
        }
        if (index < right) {
          this.quickSort(items, index, right);
        }
      }
      return items;
    },
    quickPartition: function(items, left, right) {
      var pivot = items[Math.floor((right + left) / 2)][0],
        i = left,
        j = right;
      while (i <= j) {
        while (items[i][0] < pivot) {
          i++;
        }
        while (items[j][0] > pivot) {
          j--;
        }
        if (i <= j) {
          let ind1 = items[i][1];
          let ind2 = items[j][1];
          this.ind.push([ind1, ind2]);
          var temp = items[i][0];
          items[i][0] = items[j][0];
          items[j][0] = temp;
          i++;
          j--;
        }
      }
      return i;
    },
    bubbleSort: function(array) {
      var n = array.length;
      for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
          if (array[j][0] > array[j + 1][0]) {
            let ind1 = array[j][1];
            let ind2 = array[j + 1][1];
            this.ind.push([ind1, ind2]);
            let ele1 = array[j][0];
            let ele2 = array[j + 1][0];
            array[j][0] = ele2;
            array[j + 1][0] = ele1;
          }
        }
      }
      return array;
    },
    mergeSort: function(array, start, end) {
      if (array.length === 1) {
        return array;
      } else {
        var mid = Math.floor(array.length / 2);
        var left = array.slice(0, mid);
        var right = array.slice(mid);
        var indexHalf = Math.floor((end + 1 + start) / 2);
        var Aleft = this.mergeSort(left, start, indexHalf - 1);
        var Aright = this.mergeSort(right, indexHalf, end);
        return this.actualMergeSort(Aleft, Aright, start);
      }
    },
    actualMergeSort: function(left, right, start) {
      var sortedArray = [];
      var indexToPush = start;
      while (left.length && right.length) {
        if (left[0][0] <= right[0][0]) {
          indexToPush++;
          sortedArray.push(left.shift());
        } else {
          let toIndex = indexToPush;
          let fromIndex = right[0][1];
          this.ind.push([fromIndex, toIndex]);
          right[0][1] = indexToPush++;
          sortedArray.push(right.shift());
          left.forEach(element => {
            element[1]++;
          });
        }
      }
      return sortedArray.concat(left).concat(right);
    },
    toggleMerge: function() {
      this.ind.forEach(el => {
        setTimeout(() => {
            if(this.status == 'stop'){
                return
            }
          var element = this.arr.splice(el[0], 1);
          this.arr.splice(el[1], 0, element[0]);
        }, 50);
      });
      this.ind = [];
    },
    toggleBubble: function() {
      this.ind.forEach(el => {
        setTimeout(() => {
            if(this.status == 'stop'){
                return
            }
          let ele1 = this.arr.splice(el[1], 1);
          this.arr.splice(el[0], 0, ele1[0]);
        }, 50);
      });
      this.ind = [];
    },
    toggleQuick: function() {
      this.ind.forEach(el => {
        setTimeout(() => {
            if(this.status == 'stop'){
                return
            }
          var temp = this.arr[el[0]];
          this.arr[el[0]] = this.arr[el[1]];
          this.arr[el[1]] = temp;
          this.arr.splice(0, 0);
        }, 50);
      });
      this.ind = [];
    }
  },
  watch: {
    arr: function() {
      this.feedArr = this.arr;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
