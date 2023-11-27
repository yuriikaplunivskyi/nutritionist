import{r,j as i,o as j,m as s}from"./index-13386199.js";const m=({data:o})=>{const[e,c]=r.useState(null),a=n=>{c(n===e?null:n)};return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"accordion",children:[i.jsxs("h2",{className:"accordion-header",children:[i.jsx("span",{children:"✓"}),"Кому підходить?"]}),o.length?o.map(n=>i.jsxs("div",{className:"accordion-item",children:[i.jsxs("div",{className:"accordion-title",onClick:()=>a(n.id),children:[i.jsx("div",{children:n.title}),i.jsx("button",{className:"accordion-btn",children:n.id===e?"➖":"➕"})]}),i.jsx("div",{className:"accordion-content",style:{maxHeight:n.id===e?"300px":"0"},children:i.jsx("p",{children:n.content})})]},n.id)):console.log("error data accordions")]})})},g=({onClose:o,item:e})=>{const[c,a]=r.useState(0),n=r.useRef(null);r.useEffect(()=>{const t=n.current;if(t){const p=()=>{const x=t.scrollTop,h=t.scrollHeight-t.clientHeight,u=x/h*100;a(u)};return t.addEventListener("scroll",p),()=>{t.removeEventListener("scroll",p)}}},[n]);const l=t=>{t.target.classList.contains("popup-container")&&o()};return i.jsx("div",{className:"popup-container",onClick:l,children:i.jsxs("div",{ref:n,className:"popup",children:[i.jsxs("div",{className:"popup-textContainer",children:[i.jsx("h2",{className:"popup-title",children:e.title}),i.jsx("p",{className:"popup-text",children:e.content}),i.jsxs("ol",{children:[" ",i.jsx("span",{children:"Як проходить"}),e.passing.length?e.passing.map(t=>i.jsx("li",{children:t.option},t.id)):console.log("error data accordions")]}),i.jsxs("ul",{children:[i.jsx("span",{className:"popup-price-title",children:" Вартість: "}),e.prices.length?e.prices.map(t=>i.jsx("li",{className:"popup-price",children:t.price},t.id)):console.log("error data accordions")]})]}),c<50&&i.jsx("button",{className:"scroll-button",onClick:()=>n.current.scrollBy(0,50),children:"⬇️"}),c>=50&&i.jsx("button",{className:"scroll-button",onClick:()=>n.current.scrollBy(0,-50),children:"⬆️"}),i.jsx(m,{data:e.warnings}),i.jsx("button",{className:"popup-btn_close",onClick:o,children:"❌"})]})})},d={initial:{x:-500,y:100,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.1}}},v=[{title:"Разова консультація",id:1,content:"Якщо ви шукаєте кваліфікованого спеціаліста з харчування,, який допоможе вам покращити своє харчування та здоров’я, то ви звернулися за адресою. Консультація зі мною - це не про надання плану харчування, а розробка персональних рекомендацій, плану дій, щодо зміни харчових звичок та їх втілення в ваше життя зручним способом та  навчання вас, як робити правильні вибори, як подолати перешкоди та як насолоджуватися їжею без відчуття провини. Я маю багато досвіду роботи з різними клієнтами та знаю, як адаптувати свої поради до ваших потреб, уподобань та очікувань. Консультація зі мною - це ваша інвестиція в своє майбутнє здоров’я, самопочуття та якість життя",passing:[{option:`аналіз вашої анкети та щоденнику харчування (заповненого протягом 5 днів)
                вступний дзвінок-знайомство з детальним обговоренням ваших запитів, побажань, скарг, цілей`,id:1},{option:"Pозробка письмових  рекомендації у PDF форматі протягом 3-5 днів на основі аналізу вашого способу, стилю життя та графіку роботи, поради, помилки, та послідовність кроків, щоб дійти до мети",id:2},{option:`Повторний дзвінок з обговоренням, узгодженням та фіналізацією рекомендацій
                2 тижні підтримки в форматі запитання-відповідь`,id:3}],prices:[{price:"1000 грн",id:1}],warnings:[{title:"Знання про харчування",id:1,content:`Ви вже маєте певні знання про харчування, але хочете їх розширити та покращити/ви стикаєтеся з окремими проблемами зі своїм травленням.
                Ви мало що знаєте з харчування та хочете дізнатися основи того, як складати свій раціон грамотно. У вас немає жодних скарг на своє здоров’я, емоційних переїдань, труднощів з дотриманням збалансованого харчування. Ви відчуваєте себе сильними та впевненими в тому, що зможете втілити всі зміни самостійно.
                `}]},{title:"Місячний супровід з харчування",id:2,content:"Якщо ви мрієте про здорове та гармонійне харчування, то мій супровід - це те, що вам потрібно. Супровід - це не просто місяць нашого спілкування, а й ваша нагода отримати від мене все необхідне для досягнення вашої мети. Супровід - це ваша візитівка до нового рівня життя, де ви будете їсти не тільки для того, щоб жити, а й для того, щоб насолоджуватися. <b>Супровід</b> - це ваш шанс стати тим, ким ви хочете бути.",passing:[{option:"Aналіз вашої анкети та щоденнику харчування (заповненого протягом 3-5 днів)",id:1},{option:"Kонсультація, де ми обговорюємо та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без дієт та заборон.",id:2},{option:`Розробка персональних рекомендацій
                розробка унікальних гайдів/підбір продуктів конкретно під ваші потреби`,id:3},{option:"4 тижні активної та комплексної роботи, поетапного формування нових харчових навичок",id:4},{option:"Щотижневе обговорення ваших успіхів, прогресу, складнощів, цілей (формат дзвінку або чату в телеграм)",id:5},{option:"Mоя щоденна підтримка в телеграмі, відповіді на всі питання з пн-сб з 9-21",id:6}],prices:[{price:"2500 грн/ 4 тижні",id:1},{price:"1500 грн/2 тижні",id:2}],warnings:[{title:"Маєте на меті покращити свій раціон",id:1,content:"Ви маєте на меті покращити свій раціон, готові до змі та плідної роботи але відчуваєте потребу в підтримці спеціаліста. Ви готові до великих змін у своєму раціоні та відчуваєте в собі енергію для самостійної роботи, але вам важлива постійна підтримка та регулярний зворотний зв'язок від спеціаліста впродовж вашого шляху до покращення"},{title:"Вам важливо досягти результатів",id:2,content:"Ви маєте бажання поліпшити свій раціон, проте відчуваєте, що це може бути викликом для вас. Готові до змін, але одночасно хвилюєтеся, що не впораєтеся, або що це буде вимагати багато часу на готування та призведе до обмеженого харчування без різноманіття. Вам важливо досягти результатів, і ви шукаєте постійну підтримку та щоденний зворотний зв'язок від спеціаліста."}]},{title:"Супровід з тренувань",id:3,content:"Супровід з тренувань  у режимі онлайн - це індивідуальна програма тренувань спрямована на досягнення ваших цілей. Я як фітнес-тренерка надаю вам персональні рекомендації  та розробляю для вас програму тренувань та підтримую вас, допомагаючи вам крок за кроком досягти бажаного результату. Важливою частиною цього супроводу є постійна підтримка та зворотній зв'язок для досягнення успіху у вашій меті.",passing:[{option:"Я надсилаю анкету з питаннями про Вас(стан здоров'я, спосіб життя, мета та обладнання залу)",id:1},{option:"На основі даних з анкети я розробляю персональну програму тренувань",id:2},{option:"Програма тренувань нова на кожен тиждень, з урахуванням вашого самопочуття",id:3},{option:"Далі впродовж 4 тижнів ми спілкуємося через Telegram, ви надсилаєте мені відео з технікою і я даю зворотній зв'язок",id:4}],prices:[{price:"3000 грн/ 4 тижні",id:1}],warnings:[{title:"Не маєте фіксованого часу",id:1,content:`Ви не маєте фіксованого часу для занять з тренером, онлайн-супровід дає гнучкість у виборі часу для фізичної активності, що особливо корисно для тих, хто має зайнятий графік
                `},{title:"Індивідуальний підхід",id:2,content:`Ви шукаєте індивідуальний підхід, на супроводі створюється індивідуальна програма, яка повністю враховує ваші цілі та потреби і змінюється щотижнево, що в результаті швидше приведе вас до бажаного результату
                `},{title:"Шукаєте альтернативу фітнес-залу",id:3,content:`Ви шукаєте альтернативу фітнес-залу, онлайн-супровід дає можливість виконувати вправи у комфортному середовищі свого дому або в іншому місці, що підходить саме вам
                `}]},{title:"КОУЧИНГ",id:4,content:"Коучинг зі мною  - це індивідуальний підхід до кожного клієнта, який включає в себе персональні тренування, розробку особистих рекомендацій з харчування, щоденний контроль харчування з онлайн-підтримкою, рекомендації та консультації, щотижневу аналітику результатів в особистому чаті.. Коучинг  допоможе вам досягти бажаного результату, зберігаючи здоров’я та енергію. Якщо ви готові до змін, я буду рада допомогти вам на цьому шляху.",passing:[{option:"Аналіз вашої анкети(стан здоров'я, спосіб життя, мета та обладнання залу) та щоденнику харчування (заповненого протягом 3-5 днів)",id:1},{option:"Консультація, де ми обговорюємо та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без дієт та заборон та тренуваннями, які приноситимуть вам задоволення",id:2},{option:"Розробка персональних рекомендацій, плану тренувань",id:3},{option:"Розробка унікальних гайдів//підбір продуктів конкретно під ваші потреби",id:4},{option:"4 тижні активної та комплексної роботи з втілення нових харчових звичок та з тренувань",id:5},{option:"Програма тренувань нова на кожен тиждень, з урахуванням вашого самопочуття",id:6},{option:"Далі впродовж 4 тижнів ми спілкуємося через Telegram, ви надсилаєте мені відео з технікою, фото ваших тарілок і я даю вам зворотній зв'язок",id:7}],prices:[{price:"5000 грн/4 тижні",id:1}],warnings:[{title:"Раціон",id:1,content:"Ви маєте бажання поліпшити свій раціон, проте відчуваєте, що це може бути викликом для вас. Готові до змін, але одночасно хвилюєтеся, що не впораєтеся, або що це буде вимагати багато часу на готування та призведе до обмеженого харчування без різноманіття. Вам важливо досягти результатів, і ви шукаєте постійну підтримку та щоденний зворотний зв'язок від спеціаліст"},{title:"Не маєте фіксованого часу для занять",id:2,content:"Ви не маєте фіксованого часу для занять з тренером, коучинг дає гнучкість у виборі часу для фізичної активності, що особливо корисно для тих, хто має зайнятий графіку, на  коучингу  створюється індивідуальна програма, яка повністю враховує ваші цілі та потреби і змінюється щотижнево, що в результаті швидше приведе вас до бажаного результату"}]},{title:"ОНЛАЙН ТРЕНУВАННЯ",id:5,content:"Онлайн-тренування зі мною - це зручний і ефективний спосіб досягнути ваших фітнес-цілей без потреби відвідувати фітнес-зал, але за бажанням і з відвідуванням, бо тренування може бути будь-де. Ми розробляємо для вас персональну програму тренувань, враховуючи ваші потреби та стан здоров’я, і проводимо їх через відеозв'язок. Цей інтерактивний підхід дозволяє вам досягати результатів, зберігаючи комфорт свого дому і гнучкий графік.",passing:[{option:"Я надсилаю анкету про стан здоров’я, спосіб життя та мету.",id:1},{option:"Складаю для вас план тренувань.",id:2},{option:"Ми обговорюємо зручний графік для вас, щоб тренування легко вписувалися у ваш день",id:3},{option:"Ми зідзвонюємося в ZOOM  або  GOOGLE MEETS.",id:4},{option:"Під час тренувань ви отримуєте вказівки, корекцію техніки та мотивацію у режимі реального часу.",id:5},{option:"Оплата проводить на тиждень вперед, щоб у вас була додаткова мотивація не пропускати тренування",id:6}],prices:[{price:"400 грн/1 тренування",id:1}],warnings:[{title:"Підтримка",id:1,content:`Ви хочете та готові розпочати займатися в тренажерній залі але не знаєте як це зробити і потребуєте підтримки тренера, персональної програми та індивідуального підходу 
                `},{title:"Комфорт",id:2,content:`Ви хочете займатися в залі, але не можете собі обрати тренера, який вам подобається та тренуватися бажаєте індивідуально, за присутності тренера - відеозв’язок- це те, що вам потрібно.
                `},{title:"Проблема з мотивацією",id:3,content:`Ви готові займатися вдома але не знаєте, що робити та як себе мотивувати на це, онлайн-тренування за присутності тренера - це про індивідуальний підхід, мотивацію та вправи, які підходять саме вам.
                `}]}],b=()=>{const o=r.useRef();j(o,{margin:"-50px"});const[e,c]=r.useState(null),a=l=>{c(l),document.body.classList.add("popup-open")},n=()=>{c(null),document.body.classList.remove("popup-open")};return i.jsxs(s.div,{className:"services",variants:d,animate:"animate",initial:"initial",ref:o,children:[i.jsxs(s.div,{className:"textContainer",variants:d,children:[i.jsxs(s.p,{children:["Я фокусуюся на підтримці в досягненні",i.jsx("br",{}),"  ваших цілей. "]}),i.jsx(s.hr,{})]}),i.jsxs(s.div,{className:"titleContainer",variants:d,children:[i.jsxs("div",{className:"title",children:[i.jsx("img",{src:"./banana.JPG",alt:"people"}),i.jsxs("h2",{children:[i.jsx(s.b,{whileHover:{color:"white"},children:"Унікальні"})," ідеї"]})]}),i.jsxs("div",{className:"title",children:[i.jsxs("h2",{children:[i.jsx(s.b,{whileHover:{color:"white"},children:"для вашого"})," здоров'я"]}),i.jsx("button",{children:"Що робимо?"})]})]}),i.jsx(s.div,{className:"listContainer",variants:d,children:v.map(l=>i.jsxs(s.div,{className:"box",children:[i.jsx("h2",{className:"box-title",children:l.title}),i.jsxs("button",{className:"learn-more",onClick:()=>a(l),children:[i.jsx("span",{className:"circle","aria-hidden":"true",children:i.jsx("span",{className:"icon arrow"})}),i.jsx("span",{className:"button-text",children:"Переглянути"})]}),e&&i.jsx(g,{item:e,onClose:n})]},l.id))})]})};export{b as default};
