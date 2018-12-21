
import React, { Component } from 'react'
import ReactDom from 'react-dom';
import * as _ from 'lodash';
import './index.less'

class App extends React.Component {
  render() {
    return <div>1</div>
  }
}
ReactDom.render(<App />, document.getElementById('app'))

if (module.hot) { module.hot.accept(); }//组件热更新

// interface ReturnString {
//   (): string;
// }
// let a: ReturnString = {
//   a: () => '1'
// }
// let a: ReturnString = () => '1'
// let overloaded: {
//   (foo: string): string;
//   (foo: number): number;
// };
// overloaded = function (a) {
//   if (typeof a === 'string') {
//     return 2
//   }
//   return a
// }

// function stringOrNumber(foo: number): number;
// function stringOrNumber(foo: string): string;
// function stringOrNumber(foo:any):any{
//   return 2
// }
// stringOrNumber(true);

// function overloaded(foo:string):string
// function overloaded(foo:number):number
// function overloaded<T>(a:T): T {
//   if(typeof a === 'string'){
//     return 2
//   }
//   return a
// }
// const b:number = overloaded(1);
// const c = overloaded('haha')

// let overloaded: {
//   (foo: string): string;
//   (foo: number): number;
// };
// overloaded = function (a) {
//   if (typeof a === 'string') {
//     return 2
//   }
//   return a
// }

enum Gender {
  Female, // 0
  Male // 1
}
// let key: keyof typeof Gender = "Male"
const v:Gender = 3