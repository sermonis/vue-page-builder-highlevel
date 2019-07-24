<template>
  <section class="hl_page-creator--rows-group" :class="{ active: activate }">
    <div class="close--item">
      <b-button variant="#e7f3fe"  @click="$emit('click', activate = false)">
        <font-awesome-icon icon="times" />
      </b-button>
    </div>
    <div class="row-title">
      <h2>Add Row</h2>
    </div>
    <div class="row-cards">
      <div class="row-card" @click="colNum(1)">
        <font-awesome-icon icon="columns" />
        <h5>1 Column</h5>
      </div>
      <div class="row-card" @click="colNum(2)">
        <font-awesome-icon icon="columns" />
        <h5>2 Column</h5>
      </div>
      <div class="row-card" @click="colNum(3)">
        <font-awesome-icon icon="columns" />
        <h5>3 Column</h5>
      </div>
      <div class="row-card" @click="colNum(4)">
        <font-awesome-icon icon="columns" />
        <h5>4 Column</h5>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['activate'],
  methods:{
    colNum(num){
      this.$store.commit('addCol', num)
    }
  }
};
</script>

<style>
.close--item {
  top: 0;
  left: -38px;
  position: absolute;
  background-color: #e7f3fe;
}
.hl_page-creator--rows-group.active {
  right: 0px;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  -webkit-box-shadow: 5px 10px 30px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 5px 10px 30px 0 rgba(0, 0, 0, 0.15);
}
.hl_page-creator--rows-group {
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  border-top: 1px solid #f2f7fa;
  position: fixed;
  top: 0px;
  right: -60px;
  bottom: 0;
  z-index: 4;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}
.hl_page-creator--rows-group .row-cards .row-card {
  border: 2px solid #f2f7fa;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  padding: 15px 10px;
  margin-left: 5px;
  margin-right: 5px;
  width: calc(50% - 10px);
  min-width: calc(50% - 10px);
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
.row-title h2 {
  text-align: center;
  font-size: 1rem;
  background-color: #e7f3fe;
  padding: 15px 20px;
  margin-bottom: 20px;
}
.row-cards {
  display: flex;
  flex-wrap: wrap;
}
.row-card:hover {
  transform: rotate(5deg);
  background-color: #ddeefe;
}
</style>