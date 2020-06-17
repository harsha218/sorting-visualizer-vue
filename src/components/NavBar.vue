<template>
    <div>
        <b-container fluid>
          <b-row align-v="center">
            <b-col cols="1"><img src="../assets/logo.png" alt="logo.png" height="100px"/></b-col>
            <b-col cols="2"><h4>Sorting <br> Visualizer</h4></b-col>
            <b-col cols="4">
                <b-input-group size="md" prepend="Sample Size">
                  <b-form-input type="number" v-model="count" @keydown.enter="countChange"></b-form-input>
                  <b-button variant="outline-info" @click="countChange">Create/Randomize</b-button>
                </b-input-group>
            </b-col>
            <b-col cols="1.1">
                <b-button-group size="md">
                  <b-button variant="outline-success" @click="$emit('start',method)">Start</b-button>
                  <b-button variant="outline-danger" @click="$emit('stop')">Stop</b-button>
                </b-button-group>
            </b-col>
            <b-col>
                <b-button-group size="md">
                  <b-button v-if="method=='mergeSort'" variant="dark" @click="methodChange($event)" value="mergeSort">Merge Sort</b-button>
                  <b-button v-else variant="outline-dark" @click="methodChange($event)" value="mergeSort">Merge Sort</b-button>
                  <b-button v-if="method=='bubbleSort'" variant="dark" @click="methodChange($event)" value="bubbleSort">Bubble Sort</b-button>
                  <b-button v-else variant="outline-dark" @click="methodChange($event)" value="bubbleSort">Bubble Sort</b-button>
                  <b-button v-if="method=='quickSort'" variant="dark" @click="methodChange($event)" value="quickSort">Quick Sort</b-button>
                  <b-button v-else variant="outline-dark" @click="methodChange($event)" value="quickSort">Quick Sort</b-button>
                </b-button-group>
            </b-col>
          </b-row>
        </b-container>    
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            count: '',
            method: ''
        };
    },
    methods: {
        countChange: function() {
            this.$emit("count", this.count);
        },
        methodChange: function(event){
            this.method = event.target.value
        }
    }
}
</script>