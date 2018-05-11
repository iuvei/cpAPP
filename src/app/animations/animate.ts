// 之后和平时使用动画差不多，在需要的地方引入相关的指令，接口什么的
import {
  trigger,  // 动画封装触发，外部的触发器
  state, // 转场状态控制
  style, // 用来书写基本的样式
  transition, // 用来实现css3的 transition
  animate, // 用来实现css3的animations
  keyframes // 用来实现css3 keyframes的
} from '@angular/animations';
export const animatejs = trigger('animatejs', [
  state('in', style({transform: 'translate(0)'})), // 默认平移0

  transition('void => *', [ // 进场动画
    animate(300, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [ // 离场动画
    animate(300, keyframes([
      style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
      style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
      style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
    ]))
  ])

]);
export const aaa = trigger('aaa', [
    state('in', style({transform: 'translate(0)'})), // 默认平移0
    transition('void => *', [ // 进场动画
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(125px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [ // 离场动画
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-125px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]);


  // 投注页面头部点击动画
  export const headAnimate = trigger('headAnimate', [
    // 定义一个状态hide
    state('hide', style({ 'height': 0, 'display': 'none', '-webkit-transition': 'height 10s' })),
    // 定义另外一个状态show
    state('show', style({ 'height': '100%', 'display': 'block', '-webkit-transition': 'height 10s'})),
    // 定义运动过程(从hide到show状态)
    transition('hide=>show', [
        style({ 'height': 0, 'display': 'none' }),
        style({ 'height': '10%', 'display': 'block'}),
        style({ 'height': '20%', 'display': 'block' }),
        style({ 'height': '30%', 'display': 'block' }),
        style({ 'height': '40%', 'display': 'block' }),
        style({ 'height': '50%', 'display': 'block' }),
        style({ 'height': '60%', 'display': 'block' }),
        style({ 'height': '70%', 'display': 'block' }),
        style({ 'height': '80%', 'display': 'block' }),
        style({ 'height': '90%', 'display': 'block' }),
        style({ 'height': '100%', 'display': 'block' }),
    ]),
    // 定义运动过程(从show到hide)
    transition('show=>hide', [
        style({ 'height': '100%', 'display': 'block' }),
        style({ 'height': '90%', 'display': 'block' }),
        style({ 'height': '80%', 'display': 'block' }),
        style({ 'height': '70%', 'display': 'block' }),
        style({ 'height': '60%', 'display': 'block' }),
        style({ 'height': '50%', 'display': 'block' }),
        style({ 'height': '40%', 'display': 'block' }),
        style({ 'height': '30%', 'display': 'block' }),
        style({ 'height': '20%', 'display': 'block' }),
        style({ 'height': '10%', 'display': 'block'}),
        style({ 'height': 0, 'display': 'block' }),
    ]),
]);

export const boxAnimate = trigger('box', [
    // 定义一个状态left
    state('left', style({ 'background-color': '#360', transform: 'translate3d(0,0,0)' })),
    // 定义另外一个状态right
    state('right', style({ 'background-color': '#630', transform: 'translate3d(500px,0,0)' })),
    // 定义运动过程(从left到right状态)
    transition('left=>right', animate(5000, keyframes([
        style({ transform: 'translate3d(10%,0,0)' }),
        style({ transform: 'translate3d(20%,0,0)' }),
        style({ transform: 'translate3d(40%,0,0)' }),
        style({ transform: 'translate3d(50%,0,0)' }),
        style({ transform: 'translate3d(60%,0,0)' }),
        style({ transform: 'translate3d(70%,0,0)' }),
        style({ transform: 'translate3d(80%,0,0)' }),
        style({ transform: 'translate3d(90%,0,0)' }),
        style({ transform: 'translate3d(100%,0,0)' }),
    ]))),
    // 定义运动过程(从right到left)
    transition('right=>left', animate(5000, keyframes([
        style({ transform: 'translate3d(100%,0,0)' }),
        style({ transform: 'translate3d(80%,0,0)' }),
        style({ transform: 'translate3d(70%,0,0)' }),
        style({ transform: 'translate3d(40%,0,0)' }),
        style({ transform: 'translate3d(30%,0,0)' }),
        style({ transform: 'translate3d(0%,0,0)' })
    ]))),
]);
