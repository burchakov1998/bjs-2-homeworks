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
   let sum = (a, b) => a + b;
function makeCounter(func,ms){
   wrapper.count = 0;
  wrapper.allcount = [];
   function wrapper(...args){
     setTimeout(function(){
        let savedThis = this;
       func.apply(savedThis, args);
     },ms)
     wrapper.count++;
     wrapper.allcount.push(wrapper.count);
    console.log (`Функция вызвана  ${wrapper.allcount.length}`);  
  // console.log (`count equals ${wrapper.count}`); 
    return func(...args)            
  }
  return wrapper;
}
let a = makeCounter(sum);
setTimeout( () => a(1,2), 100)
 setTimeout( () => a(1,2), 2000) 
