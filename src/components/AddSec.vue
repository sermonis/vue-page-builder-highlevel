<template>
  <div class="hl_page-creator--section">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span v-b-tooltip.hover title="Up">
          <font-awesome-icon icon="arrow-up" />
        </span>
        <span v-b-tooltip.hover title="Down">
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
        <span v-b-tooltip.hover title="Delete">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </div>
    </div>
    <span class="add-new-section" v-b-tooltip.hover title="Add New Section">
      <font-awesome-icon icon="plus" @click="add()" />
    </span>
    <div href="#" class="new-row-blank" v-if="(section.row < 1)">
      <b-btn variant="outline-primary" @click="trigRow()">Add New Row</b-btn>
    </div>

    <div v-for="(row, i) in section.row" :key="i">
      <AddRow :sectionData="row" :id='i' :secId="id" />
    </div>
  </div>
</template>
<script>
import RightBar from "./RightSideBar";
import AddRow from "./AddRow";
export default {
  components: {
    RightBar,
    AddRow
  },
  props: ["section", "id"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    add() {
      this.$store.commit("addSec");
    },
    trigRow() {
      this.$store.commit("secID", this.id);
    }
  }
};
</script>

<style>
.hl_page-creator--section > .add-new-section {
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
  background-color: #37ca37;
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
.hl_page-creator--section:hover > .add-new-section {
  opacity: 1;
}
.hl_page-creator--section > .new-row-blank {
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
.hl_page-creator--section > .hl_page-creator--actions {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
.hl_page-creator--section:hover > .hl_page-creator--actions {
  opacity: 1;
}
.hl_page-creator--section > .hl_page-creator--actions .move-actions {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.hl_page-creator--section > .hl_page-creator--actions .more-actions {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  height: 100%;
}
.hl_page-creator--section > .hl_page-creator--actions .move-actions span {
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
  background-color: #37ca37;
  color: #fff;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  font-size: 0.75rem;
  cursor: pointer;
}
.hl_page-creator--section > .hl_page-creator--actions .more-actions span {
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
  height: 25%;
  background-color: #37ca37;
  color: #fff;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  font-size: 0.75rem;
  cursor: pointer;
}
.hl_page-creator--section {
  padding: 30px;
  border: 2px solid transparent;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
.hl_page-creator--section:hover {
  border-color: #37ca37;
}
</style>