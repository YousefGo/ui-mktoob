
function Howworks() {
    return (
        <div className="container">
        <div className="row text-center">  <h1 className="m-4 w-100 text-center"> كيف يعمل مكتوب    </h1> </div>

    <div className="row">
        <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <img src="assets/images/left-image.png" className="rounded img-fluid d-block mx-auto" alt="App"/>
        </div>
        <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
            <ul>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s" className="col-md-12">
                    <img src="assets/images/wav-file-format-symbol.png" alt=""/>
                    <div className="text">
                        <h4>1-رفع الملف الصوتي  </h4>
                        <p>
                        يقوم المستخدم برفع ملف صوتي بصيغة wav 
                        ثم يقوم بالنقر على زر رفع الملف 		
                        </p>
                    </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s" className="col-md-12">
                    <img src="assets/images/process.png" alt=""/>
                    <div className="text">
                        <h4>2-  إجراء العمليات في الواجهة الخلفية  </h4>
                        <p>
                        
                                <span>تقسيم المقطع إلى مقاطع صغيرة </span>
                                <span> استخدام نموذج التعرف على الأصوات </span>
                                <span> معالجة النص الصادر </span>
                    
                        </p>
                    </div>
                </li>
                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s" className="col-md-12">
                    <img src="assets/images/website-content(1).png" alt=""/>
                    <div className="text">
                        <h4>3- عرض  الواجهات للمستخدم  </h4>
                        <p>
                            بعد معالجة البيانات يتم إرسال النص إلى المستخدم 
                        </p>
                    </div>
                </li>
                
                
                
                    
                
                
            </ul>
        </div>
    </div>
</div>
    );
  }
  
  export default Howworks;
  