export interface Checkbox {
  id: number;
  parentId: number | null;
  name: string;
  checked: boolean;
}

export interface CheckboxesState {
  checkboxes: Checkbox[];
}