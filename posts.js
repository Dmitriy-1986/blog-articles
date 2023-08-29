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
        title: "Прототипы объектов", 
        prevContent: "Прототипы - это механизм, с помощью которого объекты JavaScript наследуют", 
        content: `Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга. 
        В этой статье мы объясним, как работают цепочки прототипов, и рассмотрим, как свойство prototype можно использовать 
        для добавления методов к существующим конструкторам.`,
        date: '29.08.2023, 22:42:35'
    },
    { 
        category: "Git",
        title: "Наследование в JavaScript", 
        prevContent: "Теперь, когда объясняется большая часть подробностей OOJS", 
        content: `Теперь, когда объясняется большая часть подробностей OOJS, эта статья показывает, 
        как создавать «дочерние» классы объектов (конструкторы), которые наследуют признаки из своих «родительских» классов. Кроме того, мы дадим некоторые советы о том, когда и где вы можете использовать OOJS , и посмотрим, как классы рассматриваются в современном синтаксисе ECMAScript.`,
        date: '29.08.2023, 22:42:35'
    },
    { 
        category: "JS",
        title: "Практика построения объектов", 
        prevContent: "В предыдущих статьях мы рассмотрели всю существенную теорию объектов JavaScript", 
        content: `В предыдущих статьях мы рассмотрели всю существенную теорию объектов JavaScript и детали синтаксиса, давая вам прочную основу для начала. В этой статье мы погружаемся в практическое упражнение, давая вам больше практики в создании пользовательских объектов JavaScript, с весёлым и красочным результатом.`,
        date: '29.08.2023, 22:42:35'
    },
    { 
        category: "JS",
        title: "Асинхронный JavaScript", 
        prevContent: "В этом модуле мы рассмотрим asynchronous JavaScript, почему это важно", 
        content: `В этом модуле мы рассмотрим asynchronous JavaScript, почему это важно, и как это поможет эффективно справляться с потенциальной блокировкой операций, таких как получение ресурсов с сервера или запись в файл.`,
        date: '29.08.2023, 22:42:35'
    },
    { 
        category: "JS",
        title: "Введение в асинхронный JavaScript", 
        prevContent: "В этой статье мы кратко остановимся на проблемах, связанных с синхронным Javascript", 
        content: `В этой статье мы кратко остановимся на проблемах, связанных с синхронным Javascript, а также ознакомимся с несколькими асинхронными методами, демонстрирующими как они могут помочь нам подобные проблемы решить.`,
        date: '29.08.2023, 22:42:35'
    },
];

/* Date: new Date().toLocaleString() */
