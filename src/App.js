// import "./App.css";

// 链表求和
(function () {
  // 618 ,312
  function cell(num) {
    this.value = num % 10;
    const temp = Math.floor(num / 10);
    if (temp) {
      this.parent = new cell(temp);
    } else {
      this.parent = null;
    }
    return this;
  }

  const firstNumber = new cell(433618);
  const secondNumber = new cell(312);

  function sum(a, b) {
    let result = null;
    let point = result;
    let remain = 0;
    while ((a && a.value) || (b && b.value) || remain) {
      if (point === null) {
        point = new cell(0);
        result = point;
      } else {
        point.parent = new cell(0);
        point = point.parent;
      }

      if (remain) {
        let temp = remain;
        if (a && a.value) {
          temp += a.value;
        }
        if (b && b.value) {
          temp += b.value;
        }
        remain = Math.floor(temp / 10);
        point.value = temp % 10;
        a = a && a.parent;
        b = b && b.parent;
      } else if (a && a.value && b && b.value) {
        let temp = remain;
        if (a && a.value) {
          temp += a.value;
        }
        if (b && b.value) {
          temp += b.value;
        }
        remain = Math.floor(temp / 10);
        point.value = temp % 10;
        a = a.parent;
        b = b.parent;
      } else if (a && a.value) {
        point.value += a.value;
        a = a.parent;
      } else if (b && b.value) {
        point.value += b.value;
        b = b.parent;
      }
    }

    return result;
  }

  const result = sum(firstNumber, secondNumber);
  console.log(result);
})();

// 二维寻路
// (function () {
//   const inputArr = [
//     [-2, -1, 0, -2],
//     [-2, -2, -2, -1],
//     [-2, -2, -2, -1],
//     [0, -1, -2, -2],
//   ];
// })();

// exam4
// (function() {
//     const line = '1 2 5 7 9 1 2 2'
// const arr = line.split(' ').map(i => parseInt(i))
// const len = arr.length
// console.log('arr', arr)
// let result = []
// for (let i=0;i<len;i++) {
//     let flag = false
//     checkSum(arr[i])
//     if (!flag) {
//         result.push(arr[i])
//     }
// }

// exam4
// (function() {
//     const line = '1 2 5 7 9 1 2 2'
// const arr = line.split(' ').map(i => parseInt(i))
// const len = arr.length
// console.log('arr', arr)

// let result = []
// for (let i=0;i<len;i++) {
//     let flag = false

//     checkSum(arr[i])

//     if (!flag) {
//         result.push(arr[i])
//     }
// }

// exam3
// (function() {
//     const line = '1 2 5 7 9 1 2 2'
// const arr = line.split(' ').map(i => parseInt(i))
// const len = arr.length
// console.log('arr', arr)

// let result = []
// for (let i=0;i<len;i++) {
//     let flag = false

//     checkSum(arr[i])

//     if (!flag) {
//         result.push(arr[i])
//     }
// }

// function checkSum(curr) {
//     let sum = 0
//     for (let j=result.length -1; j >= 0;j--) {
//         sum += result[j]
//         if (curr === sum) {
//             result = result.slice(0, j)
//             const res = 2*sum
//             if (!checkSum(res)) {
//                 result.push(res)
//             }
//             return true
//         }
//     }
//     return false
// }

// console.log(result.reverse().join(' '))
// })();

// exam2
// (function() {
//     const line = '1,-5,-6,4,3,6,-2'
// const arr = line.split(',').map(i => parseInt(i))
// console.log('arr', arr)
// const newArr = []

// for (let i=0; i<arr.length; i++) {
//     newArr.push(op(i));
// }
// console.log('newArr', newArr)

// // 判断操作
// function op(i) {
//     let result = 0
//     if (i === 0) {
//         if (arr[i] > 0) {
//             result = arr[i];
//         }
//     } else if (i < 3) {
//         if (newArr[i-1] + arr[i] > 0) {
//             result = arr[i];
//         }
//     } else {
//         if (newArr[i-1] + arr[i] > newArr[i-3]) {
//             result = newArr[i-1] + arr[i]
//         } else {
//             result = newArr[i-3]
//         }
//     }
//     return result
// }

// console.log(newArr[newArr.length - 1])
// })();

// exam1
// (function() {
//     console.log('start')

//     const line = '0 0 0 2 1'
//     const arr = line.split(' ')
//     printResult(arr)

//     function printResult(arr) {
//         const map = getMap(arr)
//         console.log(map.join(' '));
//     }

//     function getMap(arr) {
//         const k = getK(arr)
//         console.log('k', k)
//         const len = arr.length
//         const rMap = Array.from(Array(len)).map(() => 0)
//         let point = 0
//         for (let i=1;i<=k;i++) {
//             if (isSeven(i)) {
//                 rMap[(point)%len] += 1
//             }
//             point++
//         }
//         return rMap
//     }

//     // 求任意k
//     function getK(arr) {
//         const sum = arr.reduce((total, curr) => parseInt(total) + parseInt(curr))
//         let k
//         for (let i=1;i<=200;i++) {
//             if (sum === count(i)) {
//                 k = i
//                 break;
//             }
//         }
//         return k
//     }

//     // 计算“过”个数的方法
//     function count (k) {
//         let number = 0
//         for (let i=1;i<=k;i++) {
//             if (isSeven(i)) {
//                 number++
//             }
//         }
//         return number
//     }

//     function isSeven (num) {
//         return num%7 === 0 || parseInt(num).toString().includes('7')
//     }
// })();

// promise catch
// (function() {
//     try{
//         Promise.reject('11').catch(rErr => {
//             console.log('rErr', rErr)
//         })
//     }catch(err) {
//         console.log('err', err)
//     }
// })();

// replace
// (function() {
//     const sRGB = 'rgb(255,255,100)'
//     const reg = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/
//     const result = sRGB.replace(reg, (all, aa, bb, cc) => {
//         const r = Number(aa)
//         const g = Number(bb)
//         const b = Number(cc)
//         if (r>255 || g>255 || b>255) {
//             return all
//         }
//         return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
//     })
//     console.log('result', result)
// })();

// dom
// (function() {
//     // contains
// })();

// url
// (function() {
//     function getUrlParam(sUrl, sKey) {
//         const url = sUrl.split('#')[0]
//         const params = url.split('?')[1]
//         const arr = params.split('&')
//         const result = {}
//         arr.forEach(kv => {
//             const [key, value] = kv.split('=')
//             if (result[key] && typeof result[key] === 'object') {
//                 result[key].push(value)
//             } else if (result[key]) {
//                 result[key] = [result[key], value]
//             } else {
//                 result[key] = value
//             }
//         })
//         if (sKey) {
//             if (result[sKey]) {
//                 return result[sKey]
//             } else {
//                 return ''
//             }
//         }
//         return result
//     }
//     const res = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')
//     console.log('res', res)

// })();

// 数位进制
// (function() {
//     const number = '65'
//     const bit = number.toString(2)
//     const result = ('00000000' + bit).slice(-8)
//     console.log('result', result)
// })();

// 柯里化
// (function() {
//     function currying(fn) {
//         const args = Array.from(arguments).slice(1)
//         let allArgs = [...args]
//         return function curried() {
//             const args1 = Array.from(arguments)
//             allArgs = [...allArgs, ...args1]
//             if (allArgs.length >= fn.length) {
//                 return fn.apply(null, allArgs)
//             } else {
//                 return function () {
//                     const args2 = Array.from(arguments)
//                     return curried.apply(null, args2)
//                 }
//             }
//         }
//     }

//     function add (a, b, c) {
//         return a + b + c
//     }

//     const c1a = currying(add)
//     const c2a = currying(add)
//     const res = c1a(1,2,3)
//     console.log('res', res)
//     const ca1 = c2a(1)
//     const ca2 = ca1(2)
//     const result = ca2(3)
//     console.log('result', result)
// })();

function App() {
  return <div className="App">exam</div>;
}

export default App;
