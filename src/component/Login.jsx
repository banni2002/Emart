import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className="card bg-dark text-black boder-0">
                <img className="card-img" src="./assets/bbgg.jpg" alt="" height='550px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container bg-white col-md-4">
                        <form className="">
                            <h3 className='text-center text-uppercase h3 py-2'>Đăng nhập</h3>
                            
                            <div className="form-group py-2">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập email" />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu" />
                            </div>
                            <div className="form-group form-check py-2">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Nhớ mật khẩu</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary mb-2 w-100">Đăng nhập</button>
                            <div className="btn-group">
                            <button className='btn btn-outline-primary w-100 mb-2'><i className="fa fa-google me-2"></i>Đăng nhập bằng Google</button>
                            <button className='btn btn-outline-primary w-100 mb-2'><i className="fa fa-facebook me-2"></i>Đăng nhập bằng Facebook</button>
                            </div>
                            <div className="form-group text-black mb-2 py-2">
                            <NavLink to="/register" className="mb-2"> Bạn chưa có tài khoản? Đăng ký ngay</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login