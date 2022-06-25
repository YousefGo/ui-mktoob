import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Welcome from './components/welcome';
import Services from './components/Services';
import Howworks from './components/Howworks';
import Team from './components/Team';
import Footer from './components/Footer';
import ApexChart from './components/chart';
import Bar from './components/bar';
import Agent10 from './components/topAgent';
import DownAgent from './components/downAgent';







import React from 'react';
import axios from "axios";

function App() {

  

    const [file,setFile] = React.useState("");
    const [list,setList] = React.useState("");
    const [topic,setTopic] = React.useState("");
    const [script,setScript] = React.useState(false);
    const [spanner,setSpanner] = React.useState(false);





    
    
    
      const  handleOnFileChange = (e) => {
          let file = e.target.files[0];
          setFile(file)
      }

      

      const  handleSubmit = (e) => {
         e.preventDefault();
         const formData  = new FormData();
         formData.append('file', file);
         setSpanner(true);
         try {
            const response =  axios({
              method: "post",
              url: "http://35.171.3.32:8008/uploade2",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
              body:formData
            }).then(res => {
                console.log('test');
                const list = res.data.list;
              
                const topic = res.data.topic;
                setList({list});
                setTopic({topic})
                setScript(true)
                setSpanner(false);
              });
          } catch(error) {
            console.log(error)
          }
         
        };



      

    

     
         
          
 
  return (
    <div className="App">
    

    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

    
    <header className="header-area header-sticky" >
        <div className="container">
            <div className="row">
                <div className="col-12" dir="rtl">
                    <nav className="main-nav " >
                    
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#welcome" className="menu-item">عن مكتوب </a></li>
                            <li className="scroll-to-section"><a href="#services" className="menu-item">خدمات مكتوب  </a></li>
                            <li className="scroll-to-section"><a href="#promotion" className="menu-item">كيف يعمل مكتوب  </a>
                            </li>
                            <li> <a href="#tryit" className="menu-item">جرب الآن   </a></li>
                            <li className="scroll-to-section"><a href="#testimonials" className="menu-item">فريق العمل  </a></li>
                           
                        </ul>
						 <a href="index.html" className="logo ml-4" >
                            مكتوب 
                        </a>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
     </header>


        <div className="welcome-area " id="welcome">
          <Welcome/>
        </div>


        
  
        <section className="section" id="services">
         <Services/>
        </section>

     
            <div className="left-image-decor"></div>

            <section className="section" id="promotion">
              <Howworks/>
           </section>


<section className="section" id="tryit">
	       <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-form">
						 <div className="row">  
						  <h2 className="w-100 text-center mb-2"> جرب الآن    </h2> 
						 </div>
                         <form >
                                <div className="row">
								  
                                    <div className="col-md-12 col-sm-12">
                                        <fieldset>
										<label className="form-label" htmlFor="customFile">  wav قم برفع ملف صوتي بصيغة   </label>
                                            <input name="file" type="file" id="name" placeholder="wav File"  required=""
                                                className="form-control form-control-lg bg-color2" onChange={handleOnFileChange} />
												
                                        </fieldset>
                                    </div>
                                  
                                  
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-button" onClick={handleSubmit}> رفع الملف </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
         
        </div>
    </section>

    <section className="section mt-4  " >
        <div className="container">
        <div className="footer-content">
        <div className="contact-form">
            <div className="row">
            {
                    spanner? 
                    <div className="row width100">
                    <div className="spinner-border centerSpnner text-success" role="status">
                    <span className="sr-only">جاري المعالجة </span>
                    </div>
                    </div>
                    :null
            }
            
            
                <div className="col-lg-12 col-md-12 col-sm-12">
                {
                    script? 
                    <div className="row"> 
                    
                            <div className="col-md-12">
                            <h3 className="w-100 text-center mb-2 colorMain">التصنيف -  {topic.topic}   </h3> 
                            </div> 
                            <div className="col-md-12">
                            <ul className="text-right">
                            {list.list.map((value, index) => {
                                
                                let x= 1
                                if(index%2==1){
                                    x=2                                                    
                                }
                                let speaker="متحدث"
                                console.log(index)
                                if(index==list.list.length-1) {
                                    return  ;
                                    }
                            return  <li key={index}> {speaker.concat(x).concat('-').concat('\t').concat(value)}</li>
                        
                            })}
                                </ul>
                            </div> 
                        
                    </div>
                        :null           
                    }
                
                    
                </div>
                
            </div>
            </div>
        </div>

    </div>
</section>
<section className="section mt-4  " >
<div className="container">
<div className="contact-form">

<div class="row">
    <h2 class="text-center"> </h2>
    <div class="col-md-6">
    <ApexChart/>
    </div>
    <div class="col-md-6">
    <Bar/>
    </div>
    <div class="col-md-6">
  <DownAgent/>
  </div>
  
  <div class="col-md-6">
  <Agent10/>
  </div>
 
</div>    
</div>
</div>
</section>
<section className="section" id="testimonials">

    <Team/>
</section>
<footer id="contact-us">
    <Footer/>
</footer>
    </div>
  );
}

export default App;
