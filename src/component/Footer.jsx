import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <div className="card bg-dark text-black boder-0">
                <img src="/assets/background.jpg" className="card-img" alt="Background" height="300px"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title fw-bolder py-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div> */}

            <footer class="text-center text-lg-start bg-light text-muted">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="d-lg-block">
                        <h5 className='mb-2 px-1'>Kết nối với chúng tôi</h5>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-github"></i>
                        </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fa fa-gem me-3"></i>SHUSHU
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
                                <p><i class="fa fa-home me-3"></i> Đà Nẵng</p>
                                <p>
                                    <i class="fa fa-envelope me-3"></i>
                                    shushu@example.com
                                </p>
                                <p><i class="fa fa-phone me-3"></i> + 09 0909 0909</p>
                                <p><i class="fa fa-print me-3"></i> + 01 2343 2342</p>
                            </div>

                        </div>

                    </div>
                </section>

            </footer>

        </div>
    )
    
}

export default Footer