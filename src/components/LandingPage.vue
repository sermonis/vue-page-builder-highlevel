<template>
  <div>
    <section>
      <div class="hl_page-creator--menu">
        <div class="menu--left">
          <b-button variant="light">
            <font-awesome-icon icon="arrow-left" />
          </b-button>
          <b-button-group>
            <b-button variant="light">
              <font-awesome-icon icon="desktop" />
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="mobile-alt" />
            </b-button>
          </b-button-group>
          <b-button-group>
            <b-button variant="light">
              <font-awesome-icon icon="plug" />
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="cogs" />Settings
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="external-link-alt" />
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="undo" />
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="redo" />
            </b-button>
          </b-button-group>
        </div>
        <div class="menu--right">
          <b-button-group>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <b-button variant="light">
                  <font-awesome-icon icon="expand" />
                </b-button>
              </template>
              <b-dropdown-item>Add Section</b-dropdown-item>
              <b-dropdown-item>Manage</b-dropdown-item>
            </b-dropdown>

            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <b-button variant="light">
                  <font-awesome-icon icon="bars" />
                </b-button>
              </template>
              <b-dropdown-item @click="trigRow()">Add Row</b-dropdown-item>
              <b-dropdown-item>Manage</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <b-button variant="light">
                  <font-awesome-icon icon="columns" />
                </b-button>
              </template>
              <b-dropdown-item>Add Column</b-dropdown-item>
              <b-dropdown-item>Manage</b-dropdown-item>
            </b-dropdown>

            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
              <template slot="button-content">
                <b-button variant="light">
                  <font-awesome-icon icon="code" />
                </b-button>
              </template>
              <b-dropdown-item @click="trigElement()">Add Element</b-dropdown-item>
              <b-dropdown-item>Manage</b-dropdown-item>
            </b-dropdown>
          </b-button-group>

          <b-button-group>
            <b-button variant="light">
              <font-awesome-icon icon="eye" />
            </b-button>
            <b-button variant="light">
              <font-awesome-icon icon="save" />
            </b-button>
          </b-button-group>
        </div>
      </div>
      <div class="hl_page-creator--content">
        <div v-for="(sec,i) in secNum" :key="i">
          <AddSec :section="sec" :id="i"/>
        </div>
      </div>
    </section>

    <RightBar :activate="isActive" />
    <ElementBar :activate="isElement" />
    <ElementSettings :activate="isElementSettings" />
  </div>
</template>
<script>
import AddSec from "./AddSec";
import RightBar from "./RightSideBar";
import ElementBar from "./ElementBar";
import ElementSettings from "./ElementSettings";
export default {
  components: {
    AddSec,
    RightBar,
    ElementBar,
    ElementSettings
  },
  mounted() {
    if (this.$store.state.ElementMod.secCount.length < 1) {
      this.$store.commit("addSec");
    }
  },
  methods: {
    trigElement() {
      this.$store.commit("elementBar");
    },
    trigRow() {
      this.$store.commit("rowBar", { section: this.section, id: 0 });
    }
  },
  computed: {
    secNum() {
      console.log('asd')
      return this.$store.getters.getSec;
    },
    isElement() {
      return this.$store.state.ElementMod.isElement;
    },
    isActive() {
      return this.$store.state.ElementMod.isActive;
    },
    isElementSettings() {
      return this.$store.state.ElementMod.isElementSettings;
    }
  }
};
</script>
<style>
.hl_page-creator--menu {
  background-color: #ddeefe;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
.hl_page-creator--menu > .menu--left > * {
  margin-right: 10px;
  margin-bottom: 15px;
}
.hl_page-creator--menu > .menu--right > * {
  margin-right: 10px;
}
.hl_page-creator--menu .btn-group > *:not(:last-child) {
  border-right: 1px solid #e0ecf3;
  margin-right: 1px !important;
}
</style>    