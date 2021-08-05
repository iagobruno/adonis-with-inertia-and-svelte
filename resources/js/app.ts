import '../css/app.css'
import { createInertiaApp } from '@inertiajs/inertia-svelte'

createInertiaApp({
  resolve: (name) => import(`./${name}.svelte`),
  setup({ el, App, props }) {
    new App({
      target: el,
      props
    })
  },
})
