const Links = () => {
    const items = [
        { english: "homepage", ukrainian: "Головна" },
        { english: "about", ukrainian: "Про мене" },
        { english: "services", ukrainian: "Послуги" },
        { english: "reviews", ukrainian: "Відгуки" },
        { english: "contacts", ukrainian: "Контакти" }
    ];

    return (
        <div className="links">
            {items.map((item, index) => (
                <a href={`#${item.english}`} key={index}>
                    {item.ukrainian}
                </a>
            ))}
        </div>
    );
};

export default Links;
