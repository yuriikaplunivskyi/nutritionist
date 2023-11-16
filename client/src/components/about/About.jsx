import "./about.scss";
import Slider from "../slider/Slider";

const slides = [
    {
      id: 1, 
      img: "/certificates/noDiet-nutritionists.jpg",
      school: "Nodiet school",
      title: "Нутриціологія"
    },
    {
      id: 2, 
      img: "/certificates/iFit-group-fit.png",
      school: "iFIT",
      title: "Інструктор групових занять"
    },
    {
      id: 3, 
      img: "/certificates/fa-bodyMobility.png",
      school: "Fitness academy",
      title: "Body Mobility"
    },
    {
      id: 4, 
      img: "/certificates/fa-dprpm.png",
      school: "Fitness academy",
      title: "Діагностика, профілактика та вирішення проблеми м'язового дисбалансу"
    },
    {
      id: 5, 
      img: "/certificates/fa-func_training.png",
      school: "Fitness academy",
      title: "Функціональний тренінг/НІІТ"
    },
    {
      id: 6, 
      img: "/certificates/fa-pumpIt.png",
      school: "Fitness academy",
      title: "Силове тренування PUMP IT UP & TABS"
    },
    {
      id: 7, 
      img: "/certificates/fa-master-trainer_2l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІ)"
    },
    {
      id: 8, 
      img: "/certificates/fa-master-trainer_3l.png",
      school: "Fitness academy",
      title: "Майстер тренер тренажерної зали (рівень ІІІ)"
    }
    ];

const About = () => {
    return (
        <div className="about">
            <div className="about-imgContainer">
                <img src="/whoami.jpg" alt="eee" />
            </div>
            <Slider slides={slides}/>
            <h3 className="about-title">Я сертифікований фітнес-тренер та нутриціолог, health-coach</h3>
            <p className="about-text">Вже більше 2-х років я прививаю любов до спорту та збалансованого харчуванню своїм клієнтам. допомагаю людям робити здоровий вибір у харчуванні та житті, набувати фігури мрії, повертати енергію та значно покращувати здоров&apos;я. Я можу вам показати великі можливості збалансованого харчування, а не обмеження, привити любов до фізичної активності без болей і втоми</p>
            <div className="block-none"></div>
        </div>
    )
}

export default About;