import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Đặt câu hỏi</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img src="/assets/ht.jpg" alt="" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Nội dung</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary mt-4 w-50">Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact