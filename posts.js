const posts = [
   {
        category: "JS",
        title: "Разница между null и undefined в JavaScript",
        prevContent: "В языке программирования JavaScript термины null и undefined обозначают особые значения",
        content: `В языке программирования JavaScript термины null и undefined обозначают особые значения, 
                    которые используются для представления отсутствия значения или пустоты. 
                    Однако они имеют некоторые различия в своем поведении.
                    <br>
                    <b>undefined:</b><br>
                    <b>undefined</b> означает, что переменная существует, но ей не было присвоено значение. 
                    Это может произойти в следующих случаях:<br>
                    - Переменной была объявлена, но ей не было присвоено значение.<br>
                    - При доступе к несуществующему свойству объекта.<br>
                    - При вызове функции без возвращаемого значения.<br>
                    <br>
                    <b>null:</b><br>
                    <b>null</b> используется, чтобы явно указать, что значение отсутствует или не имеет смысла. 
                    Оно представляет отсутствие значения как пустую ссылку или ничто.<br>
                    Разница между ними:<br>
                    <b>undefined</b> указывает на то, что значение не определено или не было присвоено. <br>
                    <b>null</b> указывает на то, что значение отсутствует или не имеет смысла.`,
        date: '29.08.2023, 22:42:35' 
    },
    { 
        category: "JS",
        title: "Для чего используется оператор '&&'", 
        prevContent: "В языке JavaScript оператор && представляет логическое 'И' (AND) и используется для проверки нескольких условий.", 
        content: `В языке JavaScript оператор && представляет логическое "И" (AND) и используется для проверки нескольких условий. 
                Он работает следующим образом:<br>
                <b>выражение1 && выражение2</b><br>
                Оператор && возвращает true, если и оба выражение1 и выражение2 истинны (дают true). 
                В противном случае, если хотя бы одно из них ложно (даёт false), оператор вернет false.<br>
                Это позволяет программам принимать решения на основе нескольких условий и выполнять 
                код только при соблюдении всех условий.`,
        date: '29.08.2023, 23:17:04'
    },
    { 
        category: "JS",
        title: "Для чего используется оператор '||' в JavaScript", 
        prevContent: "В языке JavaScript оператор || представляет логическое 'ИЛИ' (OR) и используется для проверки нескольких условий.", 
        content: `В языке JavaScript оператор || представляет логическое 'ИЛИ' (OR) и 
                  используется для проверки нескольких условий. Он работает следующим образом:<br>
                  <b>выражение1 || выражение2</b><br>
                  Оператор || возвращает true, если хотя бы одно из выражение1 и выражение2 истинно (даёт true). 
                  Если оба выражения ложны (дают false), оператор вернет false.<br>
                  Это позволяет программам принимать решения на основе нескольких условий и выполнять код, 
                  если хотя бы одно из условий истинно.`,
        date: '29.08.2023, 23:29:06'
    },
    { 
        category: "JS",
        title: "Самый быстрый способ преобразования строки в число", 
        prevContent: "Использование унарного плюса (+) является одним из самых быстрых способов преобразования строки в число в JavaScript.", 
        content: `Использование унарного плюса (+) является одним из самых быстрых способов преобразования 
                строки в число в JavaScript. Унарный плюс выполняет преобразование операнда в числовой тип данных. 
                Если операнд - строка, то он попытается преобразовать её в числовое значение.<br>
                <b>
                let stringValue = "42";<br>
                let numericValue = +stringValue; // преобразование строки в число <br>
                console.log(typeof numericValue); // выведет "number"<br>
                </b><br>
                Однако, стоит учесть, что использование унарного плюса имеет ограничения. 
                Если строка содержит некорректное числовое значение (например, "abc"), 
                то результатом будет значение NaN (Not-a-Number).<br>
                Существует также альтернативные способы преобразования строки в число, такие как использование функции <b>parseInt()</b>, 
                которая позволяет более точно управлять преобразованием и игнорировать лишние символы:<br>
                <b>
                    let stringValue = "42";<br>
                    let numericValue = parseInt(stringValue); // преобразование строки в число<br>
                    console.log(typeof numericValue); // выведет "number"<br>
                </b><br>
                В большинстве случаев унарный плюс будет работать достаточно эффективно для преобразования строк в числа, 
                но если требуется более строгое контролирование преобразования, то можно рассмотреть альтернативные подходы.`,
        date: '29.08.2023, 23:36:30'
    },
    { 
        category: "JS",
        title: "Что такое DOM в JavaScript", 
        prevContent: "DOM расшифровывается как 'Document Object Model' (Модель объектов документа). ", 
        content: `DOM расшифровывается как "Document Object Model" (Модель объектов документа). 
                В контексте веб-разработки это представляет собой структуру, 
                с помощью которой браузер представляет веб-страницу или документ, позволяя программистам изменять содержимое, 
                структуру и стиль веб-страницы с помощью кода на JavaScript.<br><br>
                DOM представляет HTML (или XML) документ как дерево объектов, где каждый элемент, атрибут, 
                текстовое содержимое и другие части документа являются объектами. Эти объекты могут быть манипулированы 
                с помощью JavaScript, что позволяет динамически изменять содержимое и поведение веб-страницы без необходимости 
                перезагрузки страницы.<br><br>
                Важные концепции DOM:<br>
                1. Элементы: Элементы HTML (например теги: div, p, a) являются объектами DOM.<br>
                2. Атрибуты: Атрибуты HTML (например, class, id, src) также представлены как свойства объектов DOM.<br>
                3. Текстовое содержимое: Текст, который находится между открывающим и закрывающим тегами элемента, доступен как свойство объекта DOM.<br>
                4. Родительство и дочерние элементы: Элементы DOM могут иметь родительские и дочерние элементы, образуя древовидную структуру.<br>
                5. События: DOM поддерживает событийную модель, позволяя реагировать на действия пользователя или другие события.<br>`,
        date: '29.08.2023, 23:46:48'
    },
    { 
        category: "JS",
        title: "Распространение события Event Propogation", 
        prevContent: "Распространение события Event Propagation в контексте JavaScript означает процесс передачи события от элемента, на котором оно произошло, к его родительским и дочерним элементам в иерархии DOM.", 
        content: `Распространение события (Event Propagation) в контексте JavaScript означает процесс передачи события от 
                элемента, на котором оно произошло, к его родительским и дочерним элементам в иерархии DOM. 
                Это важный аспект модели событий DOM, который определяет порядок, в котором события обрабатываются при 
                взаимодействии пользователя с веб-страницей.<br><br>
                Существует два основных этапа распространения события:<br>
                1. Всплытие (Bubbling): При всплытии событие сначала обрабатывается на самом глубоком (внутреннем) элементе, 
                на котором оно произошло, затем поочередно передается вверх по иерархии DOM, до корневого элемента (обычно это document). 
                Это позволяет создать цепочку обработчиков событий, которые могут реагировать на событие на разных уровнях вложенности.<br>
                2. Погружение (Capturing): При погружении событие сначала обрабатывается на корневом элементе (document) и 
                поочередно передается вниз по иерархии DOM к элементу, на котором событие произошло. Однако погружение редко 
                используется и менее распространено, чем всплытие.<br>
                3. Порядок, в котором события всплывают или погружаются, может быть важным, когда на одном элементе установлено 
                несколько обработчиков событий. Обработчики событий могут быть вызваны в порядке, противоположном их 
                объявлению в коде.<br>`,
        date: '29.08.2023, 23:55:04'
    },
    { 
        category: "JS",
        title: "Разница между методами event.preventDefault() и event.stopPropagation()", 
        prevContent: "<b>event.preventDefault()</b> и <b>event.stopPropagation()</b> - это два различных метода для работы с событиями в JavaScript.", 
        content: `<b>event.preventDefault()</b> и <b>event.stopPropagation()</b> - это два различных метода для работы с событиями в JavaScript, 
                которые влияют на обработку событий и их распространение в DOM. Вот их различия:<br><br>
                1. <b>event.preventDefault()</b>:<br>
                Этот метод предотвращает стандартное поведение браузера по умолчанию в ответ на событие. 
                К примеру, если у вас есть ссылка (<a>), и вы хотите предотвратить переход по этой ссылке при клике, 
                вы можете использовать этот метод. Также, это может быть полезно для предотвращения отправки формы при 
                нажатии на кнопку "Submit".<br>
                2. <b>event.stopPropagation()</b>:<br>
                Этот метод предотвращает дальнейшее распространение события вверх по иерархии DOM или вниз от родительских 
                элементов к дочерним элементам. Это означает, что другие обработчики событий, связанные с этим элементом или 
                его родителями, не будут вызваны.       
        `,
        date: '30.08.2023, 00:04:21'
    },
];

/* Date: new Date().toLocaleString() */
