import type { App, Directive } from "vue";

const enterScope: Directive<HTMLElement, number[]> = {
  mounted(el, binding) {

    el.addEventListener("blur", function() {
      let value = binding.value
      let inputEl: HTMLInputElement = el.children[0].children[0].children[0].firstChild as HTMLInputElement

      if (Number(inputEl.value) < value[0]) {
        inputEl.value = value[0] + ''
        inputEl.dispatchEvent(new Event("input"))
      } else if (Number(inputEl.value) > value[1]) {
        inputEl.value = value[1] + ''
        inputEl.dispatchEvent(new Event("input"))
      }

    }, true)
  },
}

export function setupDirective(app: App) {
  app.directive('enter-scope', enterScope)
}