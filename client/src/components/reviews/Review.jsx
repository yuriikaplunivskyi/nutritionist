import { useRef } from "react";
import "./review.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Я сертифікований фітнес-тренер та нутриціолог, health-coach",
        img: "/expr.jpg",
        desc: "Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров'я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми"

    },
    {
        id: 2,
        title: "",
        img: "/whoami.jpg",
        desc: "Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."

    },
    {
        id: 3,
        title: "",
        img: "/paper.jpg",
        desc: "Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."

    },
    {
        id: 4,
        title: "",
        img: "/paper.jpg",
        desc: "Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні. "

    },
    {
        id: 5,
        title: "",
        img: "/paper.jpg",
        desc: "Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."

    },
    {
        id: 6,
        title: "",
        img: "/paper.jpg",
        desc: "Ви дотримуєтесь моїх рекомендацій, скидаєте на перевірку звіти по харчуванню. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату. Паралельно ви отримуєте знання про харчування, які в подальшому допоможуть вам самостійно керувати своїм раціоном. "

    },
    {
        id: 7,
        title: "",
        img: "/paper.jpg",
        desc: "Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете. "

    }
]


const Single = ({item}) => {

    const ref = useRef(); 

    const {scrollYProgress} = useScroll(
        {
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1 ], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y}}>
                        <h2>{item.title}</h2>
                        <p>{item.id}.{item.desc}</p>{/* 
                        <button>Глянути</button> */}
                    </motion.div>  
                </div>
            </div>
        </section>
    )
}

const Review = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll(
        {
        target: ref,
        offset:["end end", "start start"]
    });

    const scaleX = useSpring( scrollYProgress, {
        stiffness: 100,
        damping: 30
    });


    return (
        <div className="review" ref={ref} > 
            <div className="progress">
                <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
            </div>
            
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
            
        </div>
    )
}

export default Review