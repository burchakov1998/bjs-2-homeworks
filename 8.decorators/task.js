function cachingDecoratorNew(func) {
  let cache = [];

<<<<<<< HEAD
  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
      console.log(md5("Из кэша: " + cache[idx].result)); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log(md5("Вычисляем: " + result));
    return "Вычисляем: " + result;
=======
function wrapper(...args) {
  let count = 0;

  //  wrapper.history.push(args);
  //  count += 1;
  //  wrapper.Allcount = wrapper.history.length;

    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item)=> item.hash === hash ); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        console.log(md5("Из кэша: " + cache[idx].result)); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log(md5("Вычисляем: " + result));
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func, ms) {  
  let timerId = null;
  wrapper.count = 0;
  function wrapper (...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
    wrapper.count++;
>>>>>>> 630c04b7a44e7387745ad7bdb393de87c85678c3
  }

  return wrapper;
<<<<<<< HEAD

}


let sum = (a, b) => a + b;

function debounceDecoratorNew(foo, delay) {
  let timeout = null;
  wrapper1.count = 0;
 // wrapper1.allCount =  wrapper1.count;
  wrapper1.allCount = [];
  
  function wrapper1(...args) {
    
    if(timeout){
      console.log('Удалили текущий таймаут')
    clearTimeout(timeout)
    }
    console.log('создаем новый таймаут')
   timeout= setTimeout( ()=> {
      let savedThis = this;
      foo.apply(savedThis, args);
      console.log('вызвали колбек');
    }, delay)
  
    
  
      wrapper1.count++;
      wrapper1.allCount.push(wrapper1.count);

    
  //  console.log(`Функция вызвана  ${wrapper1.allCount.length}`);
    // console.log (`Функция вызвана  ${wrapper1.count}`); 
    return foo(...args)
  }

  return wrapper1;
}
// const decorator = debounceDecoratorNew(sum);
// setTimeout(() => decorator(1, 2), 0)
// setTimeout(() => decorator(1, 2), 2000)
// decorator(1, 2)
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)
=======
} 


//  const a = debounceDecoratorNew(cachingDecoratorNew,1000);
//  console.time('time')
//  setTimeout(()=>a(10,5));
//  setTimeout(()=>a(20,10),980);
//  setTimeout(()=>a(30,30),980);
// const sum = (a, b) => a + b;

// function decoration (fun) {
//  let count = 0;
//  function wrapper (...args) {
//    wrapper.history.push(args);
//    count += 1;
//    wrapper.Allcount = wrapper.history.length;
//    console.log(fun(...args));
//    console.log(`Функция вызывалась ${count} раз`);
//    return fun (...args);
//  }
//  wrapper.history = [];
//  wrapper.Allcount = 0;
//  return wrapper;
// }

// const foo = decoration(sum);
// foo(5, 6);
// foo(6, 6);
// foo(5, 7);
// foo(1, 2);
// foo(45, 59);

// console.log(foo.history);
// console.log(`Общее количество вызовов ${foo.Allcount} раз`);
>>>>>>> 630c04b7a44e7387745ad7bdb393de87c85678c3
