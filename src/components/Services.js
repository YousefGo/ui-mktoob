
function Services() {
    return (
  
        <div className="container mt-4">
        <div className="row text-center">  <h1 className="m-4 w-100 text-center"> الخدمات   </h1> </div>
       
           <div className="row" dir="rtl">
            
               <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                   data-scroll-reveal="enter left move 30px over 0.6s after 0.4s" >
                   <div className="features-item h-500" >
                       <div className="features-icon">
                           <h2>01</h2>
                           <img src="assets/images/voice-message.png" alt="" />
                           <h4> تفريغ البلاغ الصوتي </h4>
                           <p>
                               وهي خدمة تتيح للعاملين القيام بتفريغ البلاغات الصوتية إلى نصوص مكتوبة وذلك باستخدام خوارزميات في الذكاء الاصطناعي، 
                               لغرض تحليل تلك النصوص والاستفادة منها لرفع مستوى جودة عمل المركز الوطني للعمليات الأمنية
                           </p>
                          
                       </div>
                   </div>
               </div>
               
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                   data-scroll-reveal="enter right move 30px over 0.6s after 0.4s" >
                   <div className="features-item h-500" >
                       <div className="features-icon">
                           <h2>02</h2>
                           <img src="assets/images/people.png" alt=""/>
                           <h4>التعرف على المتحدثين   <br/>                         <span>speaker diarization</span>
</h4>
                           <p> 
                               خدمة تقوم على تنظيم البلاغات المفرغة في شكل محادثات وتقسيمها بحسب المتحدث، حتى يمكن تمييز النصوص
                               التي وردت من المبلغ وتلك التي تحدث بها مستلم البلاغ وذلك باستخدام خوارزميات حاسوبية متقدمة
                                
                           .</p>
                          
                       </div>
                   </div>
               </div>
               
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                   data-scroll-reveal="enter right move 30px over 0.6s after 0.4s" >
                   <div className="features-item h-500" >
                       <div className="features-icon">
                           <h2>03</h2>
                           <img src="assets/images/classification.png" alt=""/>
                           <h4> تصنيف البلاغ  </h4>
                           <p>
                               تهدف هذه الخدمة لمساعدة العاملين في المركز الوطني للعمليات الأمنية على تحديد نوع البلاغ بشكل آلي 
                               لغرض مقارنة النتيجة مع نوع البلاغ الفعلي الذي تم تصنيفه من قبل مستلم البلاغ، مما يساعد على معرفة جودة أداء العاملين في اختيار نوع البلاغ المناسب
                           </p>
                          
                       </div>
                   </div>
               </div>
               
               
           </div>
       </div>
    );
  }
  
  export default Services;
  