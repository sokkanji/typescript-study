// 1.
// function sum(a: number, b?: number): number {
//     return a + b;
// }

// 2.
// function sum(a: number, b = 100): number {
//     return a + b;
// }

// sum(10, undefined);
// sum(10);

// 3.
// interface Vue {
//     el: string;
//     count: number;
//     init(this: Vue): () => {};
// }

// let vm: Vue = {
//     el: '#app',
//     count: 10,
//     init: function(this: Vue) {
//         return () => {
//             return this.count;
//         }
//     }
// }

// let getCount = vm.init();
// let count = getCount();
// console.log(count);
