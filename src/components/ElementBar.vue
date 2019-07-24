<template>
  <section class="hl_page-creator--rows-group" :class="{ active: activate }">
    <div class="close--item">
      <b-button variant="#e7f3fe"  @click="$emit('click', activate = false)">
        <font-awesome-icon icon="times" />
      </b-button>
    </div>
    <div class="row-title">
       <b-form-input v-model="search" placeholder="Enter your name"></b-form-input>
    </div>
    <div class="element-form">
        <div class="element-group">
            <h4>Text</h4>
            <div class="element-cards">
                <div class="element-card" @click="elemNum(1)">
                    <font-awesome-icon icon="heading" />
                    <h5>HEADLINE</h5>
                </div>
                <div class="element-card" @click="elemNum(2)">
                    <font-awesome-icon icon="font" />
                    <h5>SUB-HEADLINE</h5>
                </div>
                <div class="element-card" @click="elemNum(3)">
                    <font-awesome-icon icon="paragraph" />
                    <h5>PARAGRAPH</h5>
                </div>
                <div class="element-card" @click="elemNum(4)">
                    <font-awesome-icon icon="list" />
                    <h5>BULLET LIST</h5>
                </div>
            </div>
        </div> 
        <div class="element-group">
            <h4>Media</h4>
            <div class="element-cards">
                <div class="element-card" @click="elemNum(5)">
                    <font-awesome-icon icon="image" />
                    <h5>IMAGE</h5>
                </div>
                <div class="element-card" @click="elemNum(6)">
                    <font-awesome-icon icon="images" />
                    <h5>IMAGE-POPUP</h5>
                </div>
                <div class="element-card" @click="elemNum(7)">
                    <font-awesome-icon icon="play-circle" />
                    <h5>VIDEO</h5>
                </div>
                <div class="element-card" @click="elemNum(8)">
                    <font-awesome-icon icon="play-circle" />
                    <h5>VIDEO-POPUP</h5>
                </div>
            </div>
        </div>   
    </div>
    
  </section>
</template>
<script>
export default {
  model: {
    prop: "activate",
  },
  props: ['activate', 'comp'],
  data(){
      return{
          search: ""
      }
  },
  methods:{
    elemNum(num){
      this.$store.commit('addElem', num)
    }
  }
};
</script>

<style>
.hl_page-creator--rows-group .element-form {
    height: calc(100vh - 85px);
    overflow-y: auto;
    padding: 15px;
}
.hl_page-creator--rows-group .element-group {
    margin-bottom: 20px;
}
.hl_page-creator--rows-group .element-group h4 {
    font-size: 14px;
    margin-bottom: 10px;
}
.hl_page-creator--rows-group .element-group .element-cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
}
.hl_page-creator--rows-group .element-group .element-cards .element-card {
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
.row-title {
  text-align: center;
  font-size: 1rem;
  padding: 15px 20px;
  margin-bottom: 20px;
}
.row-cards {
  display: flex;
  flex-wrap: wrap;
}
.element-card:hover {
  transform: rotate(5deg);
  background-color: #ddeefe;
}
</style>