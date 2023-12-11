import { useState, useEffect } from 'react';

const fakeServiceData = [
    {
        title: 'Разова консультація',
        id: 1,
        content: ' Консультація зі мною - це не про надання плану харчування, а розробка персональних рекомендацій, плану дій, щодо зміни харчових звичок та їх втілення в ваше життя зручним способом та  навчання вас, як робити правильні вибори, як подолати перешкоди та як насолоджуватися їжею без відчуття провини. Я маю багато досвіду роботи з різними клієнтами та знаю, як адаптувати свої поради до ваших потреб, уподобань та очікувань. ',
        passing: [
            {
                option: `аналіз вашої анкети та щоденнику харчування (заповненого протягом 5 днів)
                вступний дзвінок-знайомство з детальним обговоренням ваших запитів, побажань, скарг, цілей`,
                id: 1
            },
            {
                option: `Pозробка письмових  рекомендації у PDF форматі протягом 3-5 днів на основі аналізу вашого способу, стилю життя та графіку роботи, поради, помилки, та послідовність кроків, щоб дійти до мети`,
                id: 2
            },{
                option: `Повторний дзвінок з обговоренням, узгодженням та фіналізацією рекомендацій
                2 тижні підтримки в форматі запитання-відповідь`,
                id: 3
            },
        ],
        prices: [
            {
                price: '1000 грн',
                id: 1,
            }
        ],
        warnings: [
            {
                title: 'Знання про харчування',
                id: 1,
                content: `Ви вже маєте певні знання про харчування, але хочете їх розширити та покращити/ви стикаєтеся з окремими проблемами зі своїм травленням.
                Ви мало що знаєте з харчування та хочете дізнатися основи того, як складати свій раціон грамотно. У вас немає жодних скарг на своє здоров’я, емоційних переїдань, труднощів з дотриманням збалансованого харчування. Ви відчуваєте себе сильними та впевненими в тому, що зможете втілити всі зміни самостійно.
                `
            }
        ],
        path: "service_consultation",
        icon: "./img/services/consultation.svg"
    },
    {
        title: 'Місячний супровід з харчування',
        id: 2,
        content: `Якщо ви мрієте про здорове та гармонійне харчування, то мій супровід - це те, що вам потрібно. Супровід - це не просто місяць нашого спілкування, а й ваша нагода отримати від мене все необхідне для досягнення вашої мети. Супровід - це ваша візитівка до нового рівня життя, де ви будете їсти не тільки для того, щоб жити, а й для того, щоб насолоджуватися. Супровід - це ваш шанс стати тим, ким ви хочете бути.`,
        passing: [
            {
                option: `Aналіз вашої анкети та щоденнику харчування (заповненого протягом 3-5 днів)`,
                id: 1
            },
            {
                option: `Kонсультація, де ми обговорюємо та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без дієт та заборон.`,
                id: 2
            },
            {
                option: `Розробка персональних рекомендацій
                розробка унікальних гайдів/підбір продуктів конкретно під ваші потреби`,
                id: 3
            },
            {
                option: `4 тижні активної та комплексної роботи, поетапного формування нових харчових навичок`,
                id: 4
            },
            {
                option: `Щотижневе обговорення ваших успіхів, прогресу, складнощів, цілей (формат дзвінку або чату в телеграм)`,
                id: 5
            },
            {
                option: `Mоя щоденна підтримка в телеграмі, відповіді на всі питання з пн-сб з 9-21`,
                id: 6
            },
        ],
        prices: [
            {
                price: '2500 грн/ 4 тижні',
                id: 1,
            },
            {
                price:'1500 грн/2 тижні',
                id:2,
            },
        ],
        warnings: [
            {
                title: 'Маєте на меті покращити свій раціон',
                id: 1,
                content: `Ви маєте на меті покращити свій раціон, готові до змі та плідної роботи але відчуваєте потребу в підтримці спеціаліста. Ви готові до великих змін у своєму раціоні та відчуваєте в собі енергію для самостійної роботи, але вам важлива постійна підтримка та регулярний зворотний зв'язок від спеціаліста впродовж вашого шляху до покращення`
            },
            {
                title: 'Вам важливо досягти результатів',
                id: 2,
                content: `Ви маєте бажання поліпшити свій раціон, проте відчуваєте, що це може бути викликом для вас. Готові до змін, але одночасно хвилюєтеся, що не впораєтеся, або що це буде вимагати багато часу на готування та призведе до обмеженого харчування без різноманіття. Вам важливо досягти результатів, і ви шукаєте постійну підтримку та щоденний зворотний зв'язок від спеціаліста.`
            }
        ],
        path: "service_monthly_nutrition_support ",
        icon: "./img/services/nutrition-support.svg"
    },
    {
        title: 'Супровід з тренувань',
        id: 3,
        content: `Супровід з тренувань  у режимі онлайн - це індивідуальна програма тренувань спрямована на досягнення ваших цілей. Я як фітнес-тренерка надаю вам персональні рекомендації  та розробляю для вас програму тренувань та підтримую вас, допомагаючи вам крок за кроком досягти бажаного результату. Важливою частиною цього супроводу є постійна підтримка та зворотній зв'язок для досягнення успіху у вашій меті.`,
        passing: [
            {
                option: `Я надсилаю анкету з питаннями про Вас(стан здоров'я, спосіб життя, мета та обладнання залу)`,
                id: 1
            },
            {
                option: `На основі даних з анкети я розробляю персональну програму тренувань`,
                id: 2
            },
            {
                option: `Програма тренувань нова на кожен тиждень, з урахуванням вашого самопочуття`,
                id: 3
            },
            {
                option: `Далі впродовж 4 тижнів ми спілкуємося через Telegram, ви надсилаєте мені відео з технікою і я даю зворотній зв'язок`,
                id: 4
            }
        ],
        prices: [
            {
                price: '3000 грн/ 4 тижні',
                id: 1,
            }
        ],
        warnings: [
            {
                title: 'Не маєте фіксованого часу',
                id: 1,
                content: `Ви не маєте фіксованого часу для занять з тренером, онлайн-супровід дає гнучкість у виборі часу для фізичної активності, що особливо корисно для тих, хто має зайнятий графік
                `
            },
            {
                title: 'Індивідуальний підхід',
                id: 2,
                content: `Ви шукаєте індивідуальний підхід, на супроводі створюється індивідуальна програма, яка повністю враховує ваші цілі та потреби і змінюється щотижнево, що в результаті швидше приведе вас до бажаного результату
                `
            },
            {
                title: 'Шукаєте альтернативу фітнес-залу',
                id: 3,
                content: `Ви шукаєте альтернативу фітнес-залу, онлайн-супровід дає можливість виконувати вправи у комфортному середовищі свого дому або в іншому місці, що підходить саме вам
                `
            }
        ],
        path: "service_training_support",
        icon: "./img/services/training.svg"
    },
    {
        title: 'КОУЧИНГ',
        id: 4,
        content: `Коучинг зі мною  - це індивідуальний підхід до кожного клієнта, який включає в себе персональні тренування, розробку особистих рекомендацій з харчування, щоденний контроль харчування з онлайн-підтримкою, рекомендації та консультації, щотижневу аналітику результатів в особистому чаті.. Коучинг  допоможе вам досягти бажаного результату, зберігаючи здоров’я та енергію. Якщо ви готові до змін, я буду рада допомогти вам на цьому шляху.`,
        passing: [
            {
                option: `Аналіз вашої анкети(стан здоров'я, спосіб життя, мета та обладнання залу) та щоденнику харчування (заповненого протягом 3-5 днів)`,
                id: 1
            },
            {
                option: `Консультація, де ми обговорюємо та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без дієт та заборон та тренуваннями, які приноситимуть вам задоволення`,
                id: 2
            },
            {
                option: `Розробка персональних рекомендацій, плану тренувань`,
                id: 3
            },
            {
                option: `Розробка унікальних гайдів//підбір продуктів конкретно під ваші потреби`,
                id: 4
            },
            {
                option: `4 тижні активної та комплексної роботи з втілення нових харчових звичок та з тренувань`,
                id: 5
            },
            {
                option: `Програма тренувань нова на кожен тиждень, з урахуванням вашого самопочуття`,
                id: 6
            },
            {
                option: `Далі впродовж 4 тижнів ми спілкуємося через Telegram, ви надсилаєте мені відео з технікою, фото ваших тарілок і я даю вам зворотній зв'язок`,
                id: 7
            }
        ],
        prices: [
            {
                price: '5000 грн/4 тижні',
                id: 1,
            },
        ],
        warnings: [
            {
                title: 'Раціон',
                id: 1,
                content: `Ви маєте бажання поліпшити свій раціон, проте відчуваєте, що це може бути викликом для вас. Готові до змін, але одночасно хвилюєтеся, що не впораєтеся, або що це буде вимагати багато часу на готування та призведе до обмеженого харчування без різноманіття. Вам важливо досягти результатів, і ви шукаєте постійну підтримку та щоденний зворотний зв'язок від спеціаліст`
            },
            {
                title: 'Не маєте фіксованого часу для занять',
                id: 2,
                content: `Ви не маєте фіксованого часу для занять з тренером, коучинг дає гнучкість у виборі часу для фізичної активності, що особливо корисно для тих, хто має зайнятий графіку, на  коучингу  створюється індивідуальна програма, яка повністю враховує ваші цілі та потреби і змінюється щотижнево, що в результаті швидше приведе вас до бажаного результату`
            }
        ],
        path: "service_coaching",
        icon: "./img/services/coaching.svg"
        
    },
    {
        title: 'ОНЛАЙН ТРЕНУВАННЯ',
        id: 5 ,
        content: `Онлайн-тренування зі мною - це зручний і ефективний спосіб досягнути ваших фітнес-цілей без потреби відвідувати фітнес-зал, але за бажанням і з відвідуванням, бо тренування може бути будь-де. Ми розробляємо для вас персональну програму тренувань, враховуючи ваші потреби та стан здоров’я, і проводимо їх через відеозв'язок. Цей інтерактивний підхід дозволяє вам досягати результатів, зберігаючи комфорт свого дому і гнучкий графік.`,
        passing: [
            {
                option: `Я надсилаю анкету про стан здоров’я, спосіб життя та мету.`,
                id: 1
            },
            {
                option: `Складаю для вас план тренувань.`,
                id: 2
            },
            {
                option: `Ми обговорюємо зручний графік для вас, щоб тренування легко вписувалися у ваш день`,
                id: 3
            },
            {
                option: `Ми зідзвонюємося в ZOOM  або  GOOGLE MEETS.`,
                id: 4
            },
            {
                option: `Під час тренувань ви отримуєте вказівки, корекцію техніки та мотивацію у режимі реального часу.`,
                id: 5
            },
            {
                option: `Оплата проводить на тиждень вперед, щоб у вас була додаткова мотивація не пропускати тренування`,
                id: 6
            },
        ],
        prices: [
            {
                price: '400 грн/1 тренування',
                id: 1,
            }
        ],
        warnings: [
            {
                title: 'Підтримка',
                id: 1,
                content: `Ви хочете та готові розпочати займатися в тренажерній залі але не знаєте як це зробити і потребуєте підтримки тренера, персональної програми та індивідуального підходу 
                `
            },
            {
                title: 'Комфорт',
                id: 2,
                content: `Ви хочете займатися в залі, але не можете собі обрати тренера, який вам подобається та тренуватися бажаєте індивідуально, за присутності тренера - відеозв’язок- це те, що вам потрібно.
                `
            },
            {
                title: 'Проблема з мотивацією',
                id: 3,
                content: `Ви готові займатися вдома але не знаєте, що робити та як себе мотивувати на це, онлайн-тренування за присутності тренера - це про індивідуальний підхід, мотивацію та вправи, які підходять саме вам.
                `
            }
        ],
        path: "service_online_training",
        icon: "./img/services/online_training.svg"
    },
];

const useServiceData = () => {
    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await fetch('URL_ДО_API');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setServiceData(data);
                } else {
                    console.error('Invalid JSON response:', data);
                    setServiceData(fakeServiceData);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching service data:', error);
                setServiceData(fakeServiceData);
                setLoading(false);
            }
        };

        fetchServiceData();
    }, []);

    return { serviceData, loading };
};

export default useServiceData;
