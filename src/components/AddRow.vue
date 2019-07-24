<template>
    <div class="hl_page-creator--row" >
      <div class="hl_page-creator--actions">
         <div class="move-actions">
          <span v-b-tooltip.hover title="Up" @click="rowUp">
            <font-awesome-icon icon="arrow-up" />
          </span>
          <span v-b-tooltip.hover title="Down" @click="rowDown">
            <font-awesome-icon icon="arrow-down" />
          </span>
        </div>
        <div class="more-actions">
          <span v-b-tooltip.hover title="Settings">
            <font-awesome-icon icon="cogs" />
          </span>
          <span v-b-tooltip.hover title="Clone">
            <font-awesome-icon icon="eye" />
          </span>
          <span v-b-tooltip.hover title="Save">
            <font-awesome-icon icon="copy" />
          </span>
          <span v-b-tooltip.hover title="Delete" @click="deleteRow()">
            <font-awesome-icon icon="trash-alt" />
          </span>
        </div>
      </div>
      <span class="add-new-row" v-b-tooltip.hover title="Add New Row">
        <font-awesome-icon icon="plus" @click="add()" />
      </span>
      <!-- <div href="#" class="new-row-blank" v-if="(sectionData.col < 1)">
        <b-btn variant="outline-primary" @click="isActive = true">Add New Column</b-btn>
      </div> -->
      <div v-for="(col,i) in sectionData.col" :key="i" class="column--wrapper">
        <AddCol :sectionData="col" :id="i" :secId="id"/>
      </div>
    </div>
</template>
<script>
import AddCol from './AddCol';
export default {
  components:{
    AddCol
  },
  props:['sectionData', 'id', "secId"],
  methods:{
    rowUp(){
        this.$store.commit('upRow', {sec: this.secId, row:this.id})
    },
    rowDown(){
        this.$store.commit('upDown', {sec: this.secId, row:this.id})
    },
    add(){
        this.$store.commit('secID')
       this.$store.commit('rowId',  {sec: this.secId, row:this.id});
    }
  }
}
</script>
<style>
.column--wrapper{
  flex: 1
}
.hl_page-creator--row > .add-new-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #188bf6;;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: -15px;
  z-index: 2;
  opacity: 0;
}
.hl_page-creator--row:hover > .hl_page-creator--actions {
  opacity: 1;
}
.hl_page-creator--row:hover > .add-new-row {
  opacity: 1;
}
.hl_page-creator--row > .new-row-blank {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  background: rgba(24, 139, 246, 0.1);
  border: 1px solid rgba(24, 139, 246, 0.2);
  text-align: center;
  padding: 7px;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
.hl_page-creator--row > .hl_page-creator--actions .move-actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: -25px;
    left: 0;
    z-index: 2;
}
.hl_page-creator--row > .hl_page-creator--actions .more-actions {
      display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: -25px;
    right: -2px;
    z-index: 2;
}
.hl_page-creator--row > .hl_page-creator--actions .move-actions span {
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #188bf6;
    color: #fff;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    font-size: .75rem;
    cursor: pointer;
}
.hl_page-creator--row > .hl_page-creator--actions .more-actions span {
     display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: .75rem;
    background-color: #188bf6;
    color: #fff;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;
}
.hl_page-creator--row > .hl_page-creator--actions {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
.hl_page-creator--row {
  padding: 30px;
  border: 2px solid transparent;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  display: flex;
}
.hl_page-creator--row:hover {
  border-color: #188bf6;
}
</style>