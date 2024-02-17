const TechSliderItem = ({svgContent, title, imgAlt}) => {
return (
    <div>
        <div className="tech-slider-item">
            <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            <span>{title}</span>
        </div>
    </div>
)
}

export default TechSliderItem;