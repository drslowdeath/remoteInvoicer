
export default function tabManager() {
  return {
    
  }
}


/**
 * 
 tabSelected: 'clients',
    globalTabContent: '',
    isLoading: true, // Set initial loading state to true for animation at the start of the app
    mode: localStorage.getItem('theme') || 'light',
    svgCache: [],
    sideBar: JSON.parse(localStorage.getItem('sideBar')) || false,

    async init() {
      // Ensure isLoading is initially set to true, then trigger content load
      await this.loadInitialContent()
      if (this.mode === 'dark') {
        document.documentElement.classList.add('dark')
      }
    },
    sideBarOpen() {
      this.sideBar = !this.sideBar
      localStorage.setItem('sideBar', this.sideBar)
    },
    toggleTheme() {
      this.mode = this.mode === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', this.mode === 'dark')
      localStorage.setItem('theme', this.mode)
      console.log(this.mode)
    },
    async loadInitialContent() {
      // Load initial content
      await this.loadTabContent('clients')
      this.isLoading = false // Enter transition
    },

    async tabButtonClicked(globalTabName) {
      await this.changeTab(globalTabName)
    },

    tabContentActive(globalTabName) {
      return this.tabSelected === globalTabName
    },

    async changeTab(globalTabName) {
      this.isLoading = true // Trigger leave transition

      setTimeout(async () => {
        await this.loadTabContent(globalTabName)
        this.isLoading = false // Trigger enter transition
      }, 200) // Adjust timeout to match transition duration
    },

    async loadTabContent(globalTabName) {
      const response = await fetch(`/${globalTabName}.html`)
      const content = await response.text()
      this.tabSelected = globalTabName

      this.$nextTick(() => {
        this.globalTabContent = content
        this.initTabComponent(globalTabName)
        // Neeed to also call it inside the init statement of each
        // console.log('loading icons')
        // feather.replace()
      })
    },

    initTabComponent(globalTabName) {
      if (globalTabName === 'styles') {
        Alpine.data('stylesManager', stylesManager)
      } else if (globalTabName === 'clients') {
        Alpine.data('clientManager', clientManager)
      } else if (globalTabName === 'invoices') {
        Alpine.data('invoiceManager', invoiceManager)
      } else if (globalTabName === 'editor') {
        Alpine.data('editorManager', editorManager)
      }
    },
  }))

  Alpine.data('clientManager', clientManager)
  Alpine.data('stylesManager', stylesManager)
  Alpine.data('invoiceManager', invoiceManager)
  Alpine.data('editorManager', editorManager)
  Alpine.data('toastManager', toastManager)
 */