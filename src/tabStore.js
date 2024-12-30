// Keeps state for tabs
export default function tabStore() {
  return {
    init() {},
    globalTabContent: '',

    tabSelected: $persist(''),
    viewHtml: '',
    isLoading: true,
    mode: $persist('dark'),
    sideBar: $persist(true),

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
  }
}
