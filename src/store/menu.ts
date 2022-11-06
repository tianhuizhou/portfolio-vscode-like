import { ref } from 'vue'

interface MenuItem {
  name: string
  path: string
  icon: string
}

class SideBarMenu {
  readonly name: string
  private show_sub_menu = ref<boolean>(false)

  private selected_menu_items = ref<MenuItem[]>([])

  private static instance: SideBarMenu
  private constructor(name: string) {
    this.name = name
  }

  static getInstance() {
    if (SideBarMenu.instance) {
      return this.instance
    }
    this.instance = new SideBarMenu('side_bar_menu')
    return this.instance
  }

  set sub_menu_state(value: boolean) {
    this.show_sub_menu.value = value
    this.changeAppLayout(value)
  }

  get sub_menu_state() {
    return this.show_sub_menu.value
  }

  private changeAppLayout(display: boolean): void {
    const elem = document.getElementById('app-container')
    if (!display) elem!.classList.add('side-menu-collapsed')
    else elem!.classList.remove('side-menu-collapsed')
  }

  get isCollapsed(): boolean {
    return !this.show_sub_menu.value
  }

  get selected_items(): MenuItem[] {
    return this.selected_menu_items.value
  }

  set addTab(tab: MenuItem) {
    if (this.selected_menu_items.value.some((item) => item.path === tab.path)) return
    this.selected_menu_items.value.push(tab)
  }

  set removeTab(tab_idx: number) {
    this.selected_menu_items.value.splice(tab_idx, 1)
  }
}

export { SideBarMenu }
