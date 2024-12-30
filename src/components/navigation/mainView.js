export default function mainScreen() {
  return {
    tab: 'Hello',
    init() {
      console.log(this.tab)
    },
  }
}
