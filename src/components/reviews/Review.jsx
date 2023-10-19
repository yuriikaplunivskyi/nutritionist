import { useRef } from "react";
import "./review.scss";
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id: 1,
        title: "Review Title 1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nam molestiae, harum, sapiente deserunt architecto eos sunt saepe doloremque veniam, quod quaerat autem laborum at reprehenderit soluta ducimus hic inventore."

    },
    {
        id: 2,
        title: "Review Title 2",
        img: "https://images.pexels.com/photos/17697824/pexels-photo-17697824.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nam molestiae, harum, sapiente deserunt architecto eos sunt saepe doloremque veniam, quod quaerat autem laborum at reprehenderit soluta ducimus hic inventore."

    },
    {
        id: 3,
        title: "Review Title 3",
        img: "https://images.pexels.com/photos/16991411/pexels-photo-16991411.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nam molestiae, harum, sapiente deserunt architecto eos sunt saepe doloremque veniam, quod quaerat autem laborum at reprehenderit soluta ducimus hic inventore."

    },
    {
        id: 4,
        title: "Review Title 4",
        img: "https://images.pexels.com/photos/14723477/pexels-photo-14723477.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nam molestiae, harum, sapiente deserunt architecto eos sunt saepe doloremque veniam, quod quaerat autem laborum at reprehenderit soluta ducimus hic inventore."

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
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Глянути</button>
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
        <div className="review" ref={ref}> 
            <div className="progress">
                <h1> Відгуки про співпрацю</h1>
                <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Review