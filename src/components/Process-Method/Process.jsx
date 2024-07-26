import '../Process-Method/Process.css'
function Process() {
    return (
        <>
            {/* process */}
            <section className="process-method">
                <div class="process-details">
                    {/* <!-- title  --> */}
                    <h2 class="process-title">
                        <span> Our Work Process </span>
                    </h2>
                    {/* <!-- description  --> */}
                    <p class="process-title-description">
                        Our work process is designed to provide you with a
                        stress-free painting experience, from start to finish.
                    </p>
                </div>
                {/* <!-- icon  --> */}
                <div class="process-icon-paint">
                    <i aria-hidden="true" class="fas fa-spin-pulse fa-paint-roller"></i>
                </div>
                <hr class="hr"/>
                    {/* process  */}
                    <div className="process">
                        {/* 1 */}
                        <div className="process-step">
                            <div className="process-icon">
                                <span>
                                    <i className="fa-solid fa-xl fa-broom" />
                                </span>
                            </div>
                            <div className="process-content">
                                <div className="process-steps">
                                    <span> Step 1 </span>
                                </div>
                                <p className="process-description">Cleaning</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="process-step">
                            <div className="process-icon">
                                <span>
                                    <i className="fa-solid fa-xl fa-brush" />
                                </span>
                            </div>
                            <div className="process-content">
                                <div className="process-steps">
                                    <span> Step 2 </span>
                                </div>
                                <p className="process-description">Powder Coating</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="process-step">
                            <div className="process-icon">
                                <span>
                                    <i className="fa-solid fa-xl fa-fire-flame-curved" />
                                </span>
                            </div>
                            <div className="process-content">
                                <div className="process-steps">
                                    <span> Step 3 </span>
                                </div>
                                <p className="process-description">Heating</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="process-step">
                            <div className="process-icon">
                                <span>
                                    <i className="fa-solid fa-xl fa-circle-check" />
                                </span>
                            </div>
                            <div className="process-content">
                                <div className="process-steps">
                                    <span> Step 4 </span>
                                </div>
                                <p className="process-description">Quality Checking</p>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="process-step">
                            <div className="process-icon">
                                <span>
                                    <i className="fa-solid fa-xl fa-boxes-packing" />
                                </span>
                            </div>
                            <div className="process-content">
                                <div className="process-steps">
                                    <span> Step 5 </span>
                                </div>
                                <p className="process-description">Packing</p>
                            </div>
                        </div>
                    </div>
            </section>
        </>

    );
}

export default Process;