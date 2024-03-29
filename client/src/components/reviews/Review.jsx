import { useRef } from "react";
import "./review.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id: 1,
        icon: "./icon/about/profile.svg",
        img: "./img/about/about-1.webp",
        desc: "Ви заповнюєте анкету та ведете щоденник харчування протягом 3-5 днів."

    },
    {
        id: 2,
        icon: "./icon/about/consultation.svg",
        img: "./img/about/about-2.webp",
        desc: "Ми проводимо першу консультацію, де обговорюємо  історію вашого схуднення, оцінюємо рівень активності,  та фіксуємо цілі, бажання, тобто все те, що допоможе вам досягти бажаного без зусиль та заборон."

    },
    {
        id: 3,
        icon: "./icon/about/advice.svg",
        img: "./img/about/about-3.webp",
        desc: "Я розробляю вам рекомендації, які враховують ваші потреби, стан здоров'я та особливості життєвого стилю. Процес може зайняти 2-3 дні."

    },
    {
        id: 4,
        icon: "./icon/about/no-bads.svg",
        img: "./img/about/about-4.webp",
        desc: "Ніяких дієтичних добавок, БАДів та аналізів не призначаю, адже їх має призначати лише ваш лікар, не забороняю їсти улюблені продукти, солодке, їсти глютен, лактозу (якщо для цього не має рекомендацій від лікаря), не змушую рахувати калорії."

    },
    {
        id: 5,
        icon: "./icon/about/looking.svg",
        img: "./img/about/about-5.webp",
        desc: "Ви дотримуєтесь моїх рекомендацій, тренувального плану та скидаєте на перевірку звіти по харчуванню та тренуваннях. Ми розбираємо кожний незрозумілий момент і робимо корективи в процесі співпраці, аби досягти бажаного результату."

    },
    {
        id: 6,
        icon: "./icon/about/growth.svg",
        img: "./img/about/about-6.webp",
        desc: "Пам'ятайте, що результат на 99% залежить від вашої віддачі. Я не змушую вас їсти, звітувати і змінюватися, якщо ви цього самі не хочете."

    }
]


const Single = ({item, mainRef}) => {

    const ref = useRef(); 

    const {scrollYProgress} = useScroll(
        {
        container: mainRef,
        target: ref,
        layoutEffect: false,
    });

    const y = useTransform(scrollYProgress, [0,1 ], [-300, 300]) 

    return (
        <article id="reviews">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.id} />
                        
                    </div>
                    
                    <motion.div className="textContainer" style={{ y}}>
                        <img src={item.icon} alt={item.id}/>
                        <p>{item.desc}</p>
                    </motion.div>  
                </div>
            </div>
        </article>
    )
}

const Review = ({mainRef}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll(
        {
        container: mainRef,
        target: ref,
        layoutEffect: false,
        offset:["end end", "start start"]
    });

    const scaleX = useSpring( scrollYProgress, {
        stiffness: 100,
        damping: 30
    });


    return (
        <div className="review" ref={ref} > 
            <div className="progress">
                <h6>Як я працюю</h6>
                <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
            </div>
            
            {items.map(item => (
                <Single item={item} key={item.id} mainRef={mainRef}/>
            ))}
            
        </div>
    )
}

export default Review