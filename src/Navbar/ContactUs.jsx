import React, { useState } from 'react'

const dataValue = {
  fullName: "",
  email: "",
  contact: "",
  message: "",
  terms: "",
}

const ContactUs = () => {

  const [data, setData] = useState(dataValue)


  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]: value})
  }

  const submitFunction = (e)=>{
    e.preventDefault();
    alert(`Name is ${data.fullName}`)
  }

  return (
    <>
      <section className="m-5">
        <div className=" text-center mt-5">
          <h3>Contact Us</h3>
        </div>
        <div className="row justify-content-center">
          <form >
            <div className="row flex-column align-items-center form-group">
              <div className="col-md-4 mb-3">
                <label htmlFor=" " className="fw-bold  mb-2">Full name</label>
                <input name="fullName" type="text" className="form-control " id="fullName" placeholder="First name" value={data.fullName} onChange={handleInput} required />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor=" " className="fw-bold  mb-2">Email Address</label>
                <div className="input-group">
                  <input name="email" type="email" className="form-control" id="email" placeholder="Enter email" value={data.email} onChange={handleInput} required />
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor=" " className="fw-bold  mb-2">Phone</label>
                <input name="contact" type="number" className="form-control " id="" placeholder="" value={data.contact} onChange={handleInput} required />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor=" " className="fw-bold  mb-2">Message</label>
                <textarea className="form-control" name="message" id="" rows="3" value={data.message} onChange={handleInput} required ></textarea>
              </div>
              <div className="col-md-4 mb-3">
                <input className="form-check-input" type="checkbox" name="terms" value={data.terms} id="invalidCheck3" onChange={handleInput} required />
                <label className="form-check-label ms-3" htmlFor="">
                  Agree to terms and conditions
                </label>
              </div>
              <div className='col-md-4 mb-3 '>
                <button className="btn btn-outline-primary mt-3 " onClick={submitFunction} type="submit">Submit form</button>
              </div>
            </div>

          </form>
        </div>

      </section >
    </>
  )
}

export default ContactUs