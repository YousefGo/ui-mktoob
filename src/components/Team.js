


import OwlCarousel from 'react-owl-carousel';
function Team() {
    return (
        <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="center-heading">
                  <h2>
                    من   <em>نحن</em>
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                
                <OwlCarousel className='owl-theme' loop margin={10} nav>
     
        <div className="item service-item">
          <div className="author">
            <i>
              <img src="assets/images/leader.png" alt="Author One" />
            </i>
          </div>
          <div className="testimonial-content">
          <h4> د.عبدالرحمن العجمي  </h4>
                <p></p>
            <span> قائد الفريق    </span>
          </div>
        </div>

        <div className="item service-item">
          <div className="author">
            <i>
              <img src="assets/images/saad.png" alt="Author Third" />
            </i>
          </div>
          <div className="testimonial-content">
          <h4>  أ.سعد الدوسري   </h4>
            <p></p>
            <span> مؤسس الفريق    </span>
          </div>
        </div>

      


        <div className="item service-item">
            <div className="author">
                <i><img src="assets/images/0001.png" alt="Author Third"/></i>
            </div> 
            <div className="testimonial-content">
                
                <h4>  م.يوسف سركر  </h4>
                <p></p>
                <span>  مهندس برمجيات   </span>
            </div>
        </div>

        <div className="item service-item">
                <div className="author">
                    <i><img src="assets/images/femaleMember.png" alt="Author One"/></i>
                </div>
                <div className="testimonial-content">
                    
                    <h4>م . ندى الرويثي   </h4>
                    <p> </p>
                    <span> عالمة بيانات  </span>
                </div>
        </div>


        		
                    <div className="item service-item">
                            <div className="author">
                                <i><img src="assets/images/drSalaeh.png" alt="Author Third"/></i>
                            </div>
                            <div className="testimonial-content">
                                
                                <h4>  د.صالح بن فرحان </h4>
                                <p> </p>
                                <span> محلل بيانات   </span>
                            </div>
                    </div>
				
           </OwlCarousel>

                
              </div>
            </div>
          </div>
    );
  }
  
  export default Team;
  










