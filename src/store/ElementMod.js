import Vue from 'vue'

// initial state
const state = {
  secCount: [],
  isElement: false,
  isActive: false,
  isElementSettings: false,
  sec: 0,
  id: 0,
  row: 0,
  col: 0,
  elemType: ""
};

const getters = {
  getSec(state) {
    return state.secCount;
  }
};

// mutations
const mutations ={
  addRow(state) {
    let row = {
      component: "AddRow",
      col: []
    };
    state.rowCount.push(row);
  },
  addCol(state, payload) {
    let tempSec = state.secCount;
    let row = {
      component: "AddRow",
      col: []
    };
    for (let i = 0; i < payload; i++) {
      let col = {
        component: "AddCol",
        elem: {}
      };
      row.col.push(col);
    }
    tempSec[state.sec].row.push(row);
    state.secCount = [...tempSec];
    state.isActive = false;
  },
  addSec(state) {
    let tempSec = [...state.secCount];
    let sec = {
      component: "AddSec",
      row: []
    };
    tempSec.push(sec);
    state.secCount = [...tempSec];
  },
  elementBar(state, payload) {
    state.col = payload.col;
    state.row = payload.row;
    state.isElement = !state.isElement;
  },
  secID(state, payload) {
    state.isActive = !state.isActive;
    if (payload !== undefined) {
      state.sec = payload;
    }
  },
  rowId(state, payload) {
    state.sec = payload.sec;
    state.row = payload.row;
  },
  addElem(state, payload) {
    let tempSec = state.secCount;
    let newEl = "";
    switch (payload) {
      case 1:
        newEl = document.createElement("h1");
        newEl.innerText = "Hello World";
        break;
      case 5:
        newEl = document.createElement("img");
        newEl.src = "";
        newEl.alt = "Image";
        break;
    }
    tempSec[state.sec].row[state.row].col[state.col].elem = newEl;
    state.isElement = false;
    state.secCount = [...tempSec];
  },
  elementSettings(state, payload) {
    state.col = payload.id;
    state.elemType = payload.type;
    state.isElementSettings = !state.isElementSettings;
  },
  editText(state, payload) {
    let newEl = "";
    switch (state.elemType) {
      case "H1":
        newEl = document.createElement("h1");
        newEl.innerText = payload;
        break;
      case "IMG":
        newEl = document.createElement("img");
        newEl.src = URL.createObjectURL(payload);
        newEl.alt = "Image";
        break;
    }

    let tempSec = state.secCount;
    tempSec[state.sec].row[state.row].col[state.col].elem = newEl;
    state.secCount = [...tempSec];
    state.isElementSettings = false;
  },

  upRow(state, payload) {
    if (payload.row < 1) return;
    let tempSec = [...state.secCount];
    let temp = {...tempSec[payload.sec].row[payload.row]};
    tempSec[payload.sec].row.splice(payload.row, 1, tempSec[payload.sec].row[payload.row - 1])
    tempSec[payload.sec].row.splice(payload.row-1, 1, temp)
  },

  upDown(state, payload) {
    let tempSec = state.secCount;
    if (tempSec[payload.sec].row.length === payload.row + 1) return;
    let temp = {...tempSec[payload.sec].row[payload.row]};
    tempSec[payload.sec].row.splice(payload.row, 1, tempSec[payload.sec].row[payload.row + 1])
    tempSec[payload.sec].row.splice(payload.row + 1, 1, temp)
  }
};

export default {
  state,
  getters,
  mutations
};
