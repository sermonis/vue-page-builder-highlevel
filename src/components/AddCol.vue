<template>
  <div class="hl_page-creator--column">
    <div class="hl_page-creator--actions">
      <div class="more-actions">
        <span v-b-tooltip.hover title="Settings" @click="elemSettings()">
          <font-awesome-icon icon="cogs" />
        </span>
        <span v-b-tooltip.hover title="Clone">
          <font-awesome-icon icon="eye" />
        </span>
        <span v-b-tooltip.hover title="Save">
          <font-awesome-icon icon="copy" />
        </span>
        <span v-b-tooltip.hover title="Delete">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </div>
    </div>
    <span class="add-new-element" v-b-tooltip.hover title="Add New Element">
      <font-awesome-icon icon="plus" @click="trigElement()" />
    </span>
    <div
      class="element-container"
      v-if="(Object.entries(sectionData.elem ).length === 0 && sectionData.elem.constructor === Object)"
    >
      <div href="#" class="new-element-blank">
        <b-btn variant="outline-primary" @click="trigElement()">Add New Element</b-btn>
      </div>
    </div>
    <div class="element-container">
      <span v-html="sectionData.elem.outerHTML"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sectionData", "id", "secId"],
  data() {
    return {
      isElement: false
    };
  },
  methods: {
    trigElement() {
      this.$store.commit("elementBar", {row: this.secId, col:this.id});
    },
    elemSettings() {
      this.$store.commit("elementSettings", {id:this.id, type: this.sectionData.elem.tagName});
    }
  }
};
</script>
<style>
.element-container {
  text-align: center;
  width: 100%
}
.element-container span{
  width: 100vw
}
.hl_page-creator--column > .add-row-element {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  background: rgba(255, 116, 2, 0.1);
  border: 1px solid rgba(255, 116, 2, 0.2);
  text-align: center;
  padding: 7px;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
.hl_page-creator--column {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding: 25px;
  border: 2px solid transparent;
  -webkit-transform: translateX(2px);
  -ms-transform: translateX(2px);
  transform: translateX(2px);
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
}
.hl_page-creator--column:hover {
  border-color: #ff7402;
}
.hl_page-creator--column:hover > .hl_page-creator--actions {
  opacity: 1;
}
.hl_page-creator--column > .hl_page-creator--actions {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
.hl_page-creator--column:hover > .add-new-element {
  opacity: 1;
}
.hl_page-creator--row.active > .hl_page-creator--column {
  border-color: #188bf6;
}
.hl_page-creator--column > .hl_page-creator--actions .more-actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: -25px;
  right: -2px;
  z-index: 2;
}
.hl_page-creator--column > .hl_page-creator--actions .more-actions span {
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
  font-size: 0.75rem;
  background-color: #ff7402;
  color: #fff;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
.hl_page-creator--column > .add-new-element {
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
  background-color: #ff7402;
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
  bottom: -12px;
  z-index: 2;
  opacity: 0;
}
.hl_page-creator--column > .add-new-element:hover {
  background: #e86800;
}
.hl_page-creator--row .new-element-blank {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  background: rgba(255, 116, 2, 0.1);
  border: 1px solid rgba(255, 116, 2, 0.2);
  text-align: center;
  padding: 7px;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
</style>