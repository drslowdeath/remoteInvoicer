export default function sideBar() {
  return {
    sideBarButtons: [
      { id: 1, name: 'Clients' },
      { id: 2, name: 'Invoicing' },
      { id: 3, name: 'Editor' },
    ],

    async init() {
      // Ensure isLoading is initially set to true, then trigger content load
      await this.loadInitialContent()
      if (Alpine.tabStore.mode === 'dark') {
        document.documentElement.classList.add('dark')
      }
    },
    sideBarOpen() {
      Alpine.tabStore.sideBar = !Alpine.tabStore.sideBar
    },
    toggleTheme() {
      Alpine.tabStore.mode = Alpine.tabStore.mode === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle(
        'dark',
        Alpine.tabStore.mode === 'dark',
      )
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
        Alpine.tabStore.initTabComponent(globalTabName)
      })
    },
  }
}
