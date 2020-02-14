import {Checkbox, CheckboxesState} from "@/checkbox";

const testData: Checkbox[] = [
  {id: 10, parentId: 1, name: "Checkbox 2", checked: true},
  {id: 1, parentId: null, name: "Checkbox 1", checked: true},
  {id: 3, parentId: 1, name: "Checkbox 3", checked: false},
  {id: 4, parentId: 10, name: "Checkbox 4", checked: false},
];

export default {
  state: {
    checkboxes: Array<Checkbox>()
  },
  actions: {
    async fetchCheckboxes({commit}: any) {
      const data = await new Promise(resolve => setTimeout(() => {
        resolve(testData)
      }, 100));

      commit('updateCheckboxes', data)
    }
  },
  mutations: {
    updateCheckboxes(state: CheckboxesState, checkboxes: Checkbox[]) {
      state.checkboxes = checkboxes
    }
  },
  getters: {
    getCheckboxes(state: CheckboxesState): Checkbox[] {
      return state.checkboxes
    },
    checkboxesByParentId: (state: CheckboxesState) => (id: number | null) => {
      return state.checkboxes.filter((el => el.parentId === id))
    }
  }
}