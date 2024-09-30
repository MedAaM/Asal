import React from 'react';
import './reviews.css';
import Stars from '../../stars rate/Stars';

function ReviewsPage() {
  const comments = [
    {
      img : "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: 'أحمد بن علي',
      orders: '120 طلب',
      since: 'عميل منذ 12 يناير 2020',
      rating: 5,
      date: '12 فبراير 2023',
      comment: 'خدمة ممتازة ومنتجات عالية الجودة. سأوصي بها بالتأكيد! فريق العمل كان ودودًا جدًا واستجاب لكل استفساراتي بسرعة. الأسعار أيضًا معقولة، مقارنة بالجودة المقدمة. التجربة كانت سلسة من البداية إلى النهاية، ولم أواجه أي مشاكل في الشحن أو التسليم. هذا النوع من الخدمة يجعلني زبونًا دائمًا.'
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      name: 'خالد السعيد',
      orders: '90 طلب',
      since: 'عميل منذ 5 مارس 2021',
      rating: 4,
      date: '25 يونيو 2023',
      comment: 'تجربة رائعة بشكل عام، لكن يمكن تحسين سرعة التسليم. الشحنة وصلت متأخرة قليلاً عن المتوقع. ومع ذلك، جودة المنتجات كانت رائعة جدًا، ولم يكن هناك أي عيوب في التغليف. التواصل مع خدمة العملاء كان ممتازًا، وسأستمر في الشراء منهم مستقبلًا إذا تم تحسين سرعة التسليم.'
    },
    {
      img : "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      name: 'فاطمة الزهراء',
      orders: '200 طلب',
      since: 'عميل منذ 15 يوليو 2019',
      rating: 5,
      date: '30 أغسطس 2023',
      comment: 'تعامل احترافي وأسعار مناسبة جدًا! لقد كنت أتعامل معهم لسنوات ولم أواجه أي مشاكل تذكر. دائمًا ما تكون المنتجات على أعلى مستوى من الجودة، والشحن يتم بسرعة كبيرة. التواصل مع الفريق سهل وسلس. أوصي بهذه الشركة لكل من يبحث عن الجودة والخدمة الممتازة.'
    },
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCp_ByMCZW8m0s3KmAbIENDvR2Zc_HkBJyYw&s",
      name: 'محمد العبدلي',
      orders: '50 طلب',
      since: 'عميل منذ 2 أبريل 2022',
      rating: 3,
      date: '14 سبتمبر 2023',
      comment: 'الخدمة جيدة، ولكن بعض المنتجات لم تكن كما توقعت. كانت هناك بعض العيوب الصغيرة في المنتج، والتغليف كان غير محكم بالشكل المطلوب. على الرغم من ذلك، كانت عملية الشراء سهلة والتوصيل سريع. آمل أن يتم تحسين الجودة في المستقبل، وسأفكر في الشراء مرة أخرى.'
    },
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6K_0tuPMdpV7xHVEqo4TvfpWIk-GkEE5Tr34yZoOjo6mT42LIxUf0QCu2IH2xjfvOtt4&usqp=CAU",
      name: 'سارة المقرن',
      orders: '75 طلب',
      since: 'عميل منذ 10 أكتوبر 2020',
      rating: 4,
      date: '7 يوليو 2023',
      comment: 'سرعة الاستجابة والمنتجات ممتازة. بالتأكيد سأعود للشراء مرة أخرى. خدمة العملاء كانت رائعة، وساعدوني في اختيار المنتجات المناسبة لاحتياجاتي. الشحنة وصلت في وقت قياسي، والمنتجات كانت بنفس الوصف تمامًا. أتمنى أن يستمروا في تقديم هذا المستوى من الخدمة.'
    }
  ];
  
  return (
    <div className=" reviews">
      <div className="df-c ai-c ">

      <div className="df-c w-full section-card comments-upper !gap-6">
      <div className="bold-1">التقييمات</div>
      <div className="df w-full !gap-28 jc-c ai-stretch">
        <div className="df-c">
          <div className="bold-1">إجمالي التقييمات</div>
          <div>
            <div className="df">
              <div className="bold-1 text-4xl">10.0k</div> 
              <div className="comment-stats">10%</div>
            </div>
            <div className="text">النمو في التقييمات هذا العام</div>
          </div>
        </div>
        <div className="df-c bordered">
          <div className="bold-1">متوسط التقييمات</div>
          <div>
            <div className="df">
              <div className="bold-1 text-4xl">4</div> 
              <Stars number="4" />
            </div>
            <div className="text">النمو في التقييمات هذا العام</div>
          </div>
        </div>
        <div className="df-c">
          <div className="bold-1">إجمالي التقييمات</div>
          <div className="rev-cont">
            <div className="df avg-star-nbr ai-fe">
              <span className="nbr-indic">5</span> 
              <div className="review-line-container">
                <div className="line" style={{ width: '70%' }}></div>
              </div>
              <span>2.0k</span>
            </div>
            <div className="df avg-star-nbr ai-fe">
              <span className="nbr-indic">4</span> 
              <div className="review-line-container" style={{ background: 'var(--cyan-light)' }}>
                <div className="line" style={{ width: '60%', background: 'var(--cyan)' }}></div>
              </div>
              <span>1.5k</span>
            </div>
            <div className="df avg-star-nbr ai-fe">
              <span className="nbr-indic">3</span> 
              <div className="review-line-container" style={{ background: 'var(--purple-light)' }}>
                <div className="line" style={{ width: '40%', background: 'var(--purple)' }}></div>
              </div>
              <span>1.0k</span>
            </div>
            <div className="df avg-star-nbr ai-fe">
              <span className="nbr-indic">2</span> 
              <div className="review-line-container" style={{ background: 'var(--shipped-light)' }}>
                <div className="line" style={{ width: '25%', background: 'var(--shipped)' }}></div>
              </div>
              <span>150</span>
            </div>
            <div className="df avg-star-nbr ai-fe">
              <span className="nbr-indic">1</span> 
              <div className="review-line-container">
                <div className="line" style={{ width: '1%' }}></div>
              </div>
              <span>0.0k</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
      <div className="comments section-card">
        {comments.map((review, index) => (
          <div key={index} className="df comment ai-fs gap-8">
            <div className="df comment-user-img ai-stretch">
              <img
                src={review.img}
                alt="user"
              />
              <div className="df-c jc-sb flex-1">
                <div className="bold-1 text-lg">{review.name}</div>
                <div>
                  <div className="text">{review.orders}</div>
                  <div className="text">{review.since}</div>
                </div>
              </div>
            </div>
            <div className="comment-content df-c">
              <div className="text df text-xs">
                <Stars number={review.rating} /> {review.date}
              </div>
              <div className="text">{review.comment}</div>
              <div className="df header-btns">
                <div className="details-btn">عرض العميل</div>
                <div className="details-btn">الإبلاغ</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ReviewsPage;
