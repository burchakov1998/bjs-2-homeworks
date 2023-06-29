function cachingDecoratorNew(func) {
  let cache = [];
  let count = 0;
  let allCount ;

  const wrapper = (...args) => {
 
    let result = func(...args);
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
     // console.log(md5("Из кэша: " + cache[idx].result)); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
    return "Из кэша: " + cache[idx].result;
    }
     // в кэше результата нет - придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    //console.log(md5("Вычисляем: " + result));
    return "Вычисляем: " + result;
    
  }
    count =count+1 ;
    alert(count);
return  wrapper;
}
const showCoords = (x,y) => console.log(`Клик:(${x},${y})`);

function debounceDecoratorNew(f,ms){
  let timeout;

  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(()=> {
      f.apply(this, args);
     
    }
    ,ms)

  
  };
}

const a = debounceDecoratorNew(cachingDecoratorNew,1000);
console.time('time')
setTimeout(()=>a(10,5));
setTimeout(()=>a(20,10),980);
setTimeout(()=>a(30,30),980);
