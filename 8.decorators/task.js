function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
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
 const sum = (a, b) => a + b;
function debounceDecoratorNew(func, ms) {  
  let timerId = null;
  wrapper.count = 0;
  wrapper.allcount = [];
  function wrapper (...args){
    
    wrapper.count++;
      func(...args);
    
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
    
  }
  return wrapper;
} 
const a = debounceDecoratorNew(sum);
console.log(debounceDecoratorNew.history);
console.log(`Общее количество вызовов ${debounceDecoratorNew.Allcount} раз`);
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