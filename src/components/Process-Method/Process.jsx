import '../Process-Method/Process.css'
function Process() {
    return (
        <>
            <section className="process-method">
                <div className="process-details">
                    <h2 className="process-title">
                        <span> Our Work Process </span>
                    </h2>
                    <p className="process-title-description">
                        Our work process is designed to provide you with a
                        stress-free painting experience, from start to finish.
                    </p>
                </div>
                <div className="process-icon-paint">
                    <i aria-hidden="true" className="fas fa-spin-pulse fa-paint-roller"></i>
                </div>
                <hr className="hr"/>
                <div className="process">
                    {[
    { step: "Step 1", description: "Cleaning", icon: "fa-broom", backText: "Rusting\nand more" },
    { step: "Step 2", description: "Powder Coating", icon: "fa-brush", backText: "Precision coating\nfor durability" },
    { step: "Step 3", description: "Heating", icon: "fa-fire-flame-curved", backText: "Oven method\nfor optimal results" },
    { step: "Step 4", description: "Quality Checking", icon: "fa-circle-check", backText: "Thorough inspection\nfor quality" },
    { step: "Step 5", description: "Packing", icon: "fa-boxes-packing", backText: "Secure packing\nfor safe delivery" }
].map((item, index) => (
                        <div key={index} className="process-step">
                            <div className="process-card">
                                <div className="process-front">
                                    <div className="process-icon">
                                        <span>
                                            <i className={`fa-solid fa-xl ${item.icon}`} />
                                        </span>
                                    </div>
                                    <div className="process-content">
                                        <div className="process-steps">
                                            <span>{item.step}</span>
                                        </div>
                                        <p className="process-description">{item.description}</p>
                                    </div>
                                </div>
                                <div className="process-back">
                                    <p>{item.backText.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br/></span>
                                    ))}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Process;
