const TechSliderItem = ({svgContent, title, imgAlt}) => {
return (
    <div className="slide">
        <div className="tech-slider-item">
            <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            <span>{title}</span>
        </div>
    </div>
)
}

export default TechSliderItem;