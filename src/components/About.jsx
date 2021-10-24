import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
      <div className="container py-5 my-5">
          <div className="row">
              <div className="col-md-6">
                  <h1 className='text-primary fw-bold mb-4'>About US</h1>
                  <p className="lead mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic quae eligendi eum quaerat illum ullam repellat tenetur nam reprehenderit. Suscipit porro exercitationem obcaecati eius quam minus atque nam sed!
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit molestiae doloribus sit modi ducimus? Explicabo est aliquid quo fuga nesciunt! Excepturi quasi odio veritatis adipisci delectus ullam, quisquam harum reiciendis!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat laboriosam consequatur nihil quae modi numquam ipsam natus omnis neque, odio dolore quidem consequuntur consectetur commodi, accusamus porro inventore labore?
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae enim reiciendis distinctio sed dolores consequatur, fugit quisquam magnam sit labore quo beatae temporibus laboriosam doloremque ut quam explicabo aliquam.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, tenetur voluptates unde iusto dolores corrupti saepe sit numquam molestias. Tempore suscipit aliquid cupiditate minima laborum atque voluptatibus facere explicabo quaerat.
                  </p>
                  <Link to="/contact" className='btn btn-outline-primary px-3'>Contact Us</Link>
              </div>
              <div className="col-md-6 d-flex justify-content-center ">
                  <img src="/assets/images/about.png" alt="about" height="400px" width="400px" />
              </div>
          </div>
      </div>
        </div>
    )
}

export default About
