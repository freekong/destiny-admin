import NProgress from "nprogress";
import 'nprogress/nprogress.css';


NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickle: true,
  trickleSpeed: 100
})

export const start = () => {
  NProgress.start()
}

export const close = () => {
  NProgress.done()
}