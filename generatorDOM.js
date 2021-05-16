 $(document).ready(function(){
var key2=0;
var key3=0;
var key4=0;
 dataGlb.results.forEach(function(item, i, arr) {
console.log(item);
 $('.result-area').html($('.result-area').html()+ '<div class="result">'+
                                    '<div class="img-student">'+
                                        '<img src="'+item.фотография+'">'+
                                  '</div>'+
                                  '<div class="result-student">'+
                                     item.результат+
                                  '</div>'+
                                  '<div class="name-student">'+
                                      item.имя+
                                  '</div>'+
                                  '<div class="cert-student">'+
                                      '<img src="'+item.сертификат+'">'+
                                 ' </div>  </div>')


   $('.results-row-adaptive').html($('.results-row-adaptive').html()+ '<div class="result">'+
                                    '<div class="img-student">'+
                                        '<img src="'+item.фотография+'">'+
                                  '</div>'+
                                  '<div class="result-student">'+
                                     item.результат+
                                  '</div>'+
                                  '<div class="name-student">'+
                                      item.имя+
                                  '</div>'+
                                  '<div class="cert-student">'+
                                      '<img src="'+item.сертификат+'">'+
                                 ' </div>  </div>')


    if(key2==0)
    $('.result-wrapper').html($('.result-wrapper').html()+'<div class="results-row">'+
    '<div class="result">'+
                                    '<div class="img-student">'+
                                        '<img src="'+item.фотография+'">'+
                                  '</div>'+
                                  '<div class="result-student">'+
                                     item.результат+
                                  '</div>'+
                                  '<div class="name-student">'+
                                      item.имя+
                                  '</div>'+
                                  '<div class="cert-student">'+
                                      '<img src="'+item.сертификат+'">'+
                                 ' </div>  </div>'+ 

      '</div>')
    else{
   
            $('.result-wrapper ').children().last().html($('.result-wrapper').children().last().html()+'<div class="result">'+
                                    '<div class="img-student">'+
                                        '<img src="'+item.фотография+'">'+
                                  '</div>'+
                                  '<div class="result-student">'+
                                     item.результат+
                                  '</div>'+
                                  '<div class="name-student">'+
                                      item.имя+
                                  '</div>'+
                                  '<div class="cert-student">'+
                                      '<img src="'+item.сертификат+'">'+
                                 ' </div>  </div>')
    }

    key2++;
        if(key2==3)
        key2=0;
   
                           


        
})

   
                           


        

          dataGlb.teachers.forEach(function(item, i, arr) {

 $('.teachers-area').html($('.teachers-area').html()+ ' <div class="block-teacher">'+
                ' <div class="img-tchr">'+
                   '  <img src="'+item.изображение+'">'+
                 '</div>'+
                ' <div class="lesson-tchr">'+
                  item.предмет+
                 '</div>'+
                ' <div class="name-tchr">'+
                   item.имя+
                ' </div>'+
                 '<div class="achv-tchr">'+
                     '<div class="ach">'+
                        ' <div><img src="img/obr.svg"></div>'+
                        item.образование+
                    ' </div>'+
                   '  <div class="ach"><div><img src="img/business.svg"></div>'+
                      '  <div> Опыт работы: <span class="logical-2">'+item.опыт+'</span></div>'+
                    ' </div>'+

               '  </div>'+
               '  <a href="teachers.html"><div class="button-2">Подробнее</div></a>'+
            ' </div>'
            )
        
})
var key=0;

dataGlb.subjects.forEach(function(item, i, arr) {
  
    if(item.категория == "язы"){
        $('.courusel-lang').html($('.courusel-lang').html()+
             '<div class="lesson" schoolCost='+item.стоимсоть_к_школе+' сtCost='+item.стоимость_к_цт+' onlineCost='+item.стоимость_онлайн+' irlCostMinsk='+item.стоимость_вживую_минск+' irlCostIva='+item.стоимость_вживую_ивацевичи+' irlCostBar='+item.стоимость_вживую_барановичи+' groupCost='+item.стоимость_минигруппы+' indCost='+item.стоимость_индивидуально+'>'+
                            '    <img src="'+item.изображение+'" class="img-lesson" alt="">'+
                          '<span class="title-lesson">'+item.название+'</span>'+
                          '<div class="button-2 button-calculator">'+
                            '  Подробнее'+
                          '</div>'+
                          '<div class="calculator" style="display: none;">'+
                                ' <div class="box program">'+
                              '<h3>Программа подготовки<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                '  <li>Подготовка к ЦТ (11 класс)</li>'+
                              '    <li>Школьная программа</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box type">'+
                              '<h3>Вживую/Онлайн<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                '  <li>Вживую (Минск)</li>'+
                                '  <li>Вживую (Барановичи)</li>'+
                                '  <li>Вживую (Ивацевичи)</li>'+
                              '    <li>Онлайн</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box format">'+
                              '<h3>Формат занятий<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                             '<ul>'+
                                '  <li>Мини-группы</li>'+
                              '    <li>Индивидуальные</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                           '<div class="button-2 calculate" >Рассчитать</div>'+
                           '<div class="button-2 send-request-subject">Записаться </div>'+
                           '<div class="cost-header"></div><div class="cost-body">стоимость указана за 60 минут</div>'+
                         ' </div>'+
                      
                         
                            
                    ' </div>')
    }
        if(item.категория == "гум"){
        $('.courusel-gym').html($('.courusel-gym').html()+
             '<div class="lesson" schoolCost='+item.стоимсоть_к_школе+' сtCost='+item.стоимость_к_цт+' onlineCost='+item.стоимость_онлайн+' irlCostMinsk='+item.стоимость_вживую_минск+' irlCostIva='+item.стоимость_вживую_ивацевичи+' irlCostBar='+item.стоимость_вживую_барановичи+' groupCost='+item.стоимость_минигруппы+' indCost='+item.стоимость_индивидуально+'>'+
                            '    <img src="'+item.изображение+'" class="img-lesson" alt="">'+
                          '<span class="title-lesson">'+item.название+'</span>'+
                          '<div class="button-2 button-calculator">'+
                            '  Подробнее'+
                          '</div>'+
                          '<div class="calculator" style="display: none;">'+
                                ' <div class="box program">'+
                              '<h3>Программа подготовки<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                '  <li>Подготовка к ЦТ (11 класс)</li>'+
                              '    <li>Школьная программа</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box type">'+
                              '<h3>Вживую/Онлайн<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                 '  <li>Вживую (Минск)</li>'+
                                '  <li>Вживую (Барановичи)</li>'+
                                '  <li>Вживую (Ивацевичи)</li>'+
                              '    <li>Онлайн</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box format">'+
                              '<h3>Формат занятий<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                               '<ul>'+
                                '  <li>Мини-группы</li>'+
                              '    <li>Индивидуальные</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                           '<div class="button-2 calculate"  >Рассчитать</div>'+
                           '<div class="button-2 send-request-subject">Записаться </div>'+
                           '<div class="cost-header"></div><div class="cost-body">стоимость указана за 60 минут</div>'+
                         ' </div>'+
                      
                         
                            
                    ' </div>')
    }
        if(item.категория == "тех"){
        $('.courusel-tech').html($('.courusel-tech').html()+
             '<div class="lesson" schoolCost='+item.стоимсоть_к_школе+' сtCost='+item.стоимость_к_цт+' onlineCost='+item.стоимость_онлайн+' irlCostMinsk='+item.стоимость_вживую_минск+' irlCostIva='+item.стоимость_вживую_ивацевичи+' irlCostBar='+item.стоимость_вживую_барановичи+'  groupCost='+item.стоимость_минигруппы+' indCost='+item.стоимость_индивидуально+'>'+
                            '    <img src="'+item.изображение+'" class="img-lesson" alt="">'+
                          '<span class="title-lesson">'+item.название+'</span>'+
                          '<div class="button-2 button-calculator">'+
                            '  Подробнее'+
                          '</div>'+
                          '<div class="calculator" style="display: none;">'+
                                ' <div class="box program">'+
                              '<h3>Программа подготовки<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                '  <li>Подготовка к ЦТ (11 класс)</li>'+
                              '    <li>Школьная программа</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box type">'+
                              '<h3>Вживую/Онлайн<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                 '  <li>Вживую (Минск)</li>'+
                                '  <li>Вживую (Барановичи)</li>'+
                                '  <li>Вживую (Ивацевичи)</li>'+
                              '    <li>Онлайн</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                          '<div class="box format">'+
                              '<h3>Формат занятий<span class="expand"><img src="img/swipe.svg" ></span></h3>'+
                              '<ul>'+
                                '  <li>Мини-группы</li>'+
                              '    <li>Индивидуальные</li>'+
                                 
                            '  </ul>'+
                          '</div>'+
                           '<div class="button-2 calculate" >Рассчитать</div>'+
                           '<div class="button-2 send-request-subject">Записаться </div>'+
                           '<div class="cost-header"></div><div class="cost-body">стоимость указана за 60 минут</div>'+
                         ' </div>'+
                      
                         
                            
                    ' </div>')
    }
    if(key==0)
    $('.lesson-area').html($('.lesson-area').html()+'<div class="row-lessons" style="z-index:'+(100-i)+'"> <div class="lesson" schoolCost='+item.стоимсоть_к_школе+' сtCost='+item.стоимость_к_цт+' onlineCost='+item.стоимость_онлайн+' irlCostMinsk='+item.стоимость_вживую_минск+' irlCostIva='+item.стоимость_вживую_ивацевичи+' irlCostBar='+item.стоимость_вживую_барановичи+' groupCost='+item.стоимость_минигруппы+' indCost='+item.стоимость_индивидуально+'>'+
                         '<img src="'+item.изображение+'" class="img-lesson" alt="">'+
                         '<span class="title-lesson">'+item.название+'</span>'+
                         '<div class="box program">'+
                          '   <h3>Программа подготовки<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                           '  <ul>'+
                            '     <li>Подготовка к ЦТ (11 класс)</li>'+
                             '    <li>Школьная программа</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         '<div class="box type">'+
                             '<h3>Вживую/Онлайн<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                             '<ul>'+
                                 '  <li>Вживую (Минск)</li>'+
                                '  <li>Вживую (Барановичи)</li>'+
                                '  <li>Вживую (Ивацевичи)</li>'+
                                 '<li>Онлайн</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         '<div class="box format">'+
                            ' <h3>Формат занятий<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                             '<ul>'+
                                '  <li>Мини-группы</li>'+
                              '    <li>Индивидуальные</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         
                          ' <div class="button-2 calculate" >Рассчитать</div>'+
                          '<div class="button-2 send-request-subject">Записаться </div>'+
                          '<div class="cost-header"></div><div class="cost-body">стоимость указана за 60 минут</div>'+
                    '</div></div>') //////////////////////////////////////////////////
    else{
            $('.lesson-area ').children().last().html($('.lesson-area').children().last().html()+' <div class="lesson" schoolCost='+item.стоимсоть_к_школе+' сtCost='+item.стоимость_к_цт+' onlineCost='+item.стоимость_онлайн+' irlCostMinsk='+item.стоимость_вживую_минск+' irlCostIva='+item.стоимость_вживую_ивацевичи+' irlCostBar='+item.стоимость_вживую_барановичи+' groupCost='+item.стоимость_минигруппы+' indCost='+item.стоимость_индивидуально+'>'+
                         '<img src="'+item.изображение+'" class="img-lesson" alt="">'+
                         '<span class="title-lesson">'+item.название+'</span>'+
                         '<div class="box program">'+
                          '   <h3>Программа подготовки<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                           '  <ul>'+
                            '     <li>Подготовка к ЦТ (11 класс)</li>'+
                             '    <li>Школьная программа</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         '<div class="box type">'+
                             '<h3>Вживую/Онлайн<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                             '<ul>'+
                                 '  <li>Вживую (Минск)</li>'+
                                '  <li>Вживую (Барановичи)</li>'+
                                '  <li>Вживую (Ивацевичи)</li>'+
                                 '<li>Онлайн</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         '<div class="box format">'+
                            ' <h3>Формат занятий<span class="expand subject-expand"><img src="img/swipe.svg" ></span></h3>'+
                             '<ul>'+
                                '  <li>Мини-группы</li>'+
                              '    <li>Индивидуальные</li>'+
                                 
                             '</ul>'+
                         '</div>'+
                         
                          ' <div class="button-2 calculate" >Рассчитать</div>'+
                          '<div class="button-2 send-request-subject">Записаться </div>'+
                          '<div class="cost-header"></div><div class="cost-body">стоимость указана за 60 минут</div>'+
                    '</div>')
    }

    key++;
        if(key==4)
        key=0;

})
  dataGlb.reviews.forEach(function(item, i, arr) {
    if(key3==0)
    {
    $('.cl1').html($('.cl1').html()+            ' <div class="review-block">'+
                '<div class="header-review">'+
                    '<img src="'+item.изображение+'">'+
                    '<div class="review-info">'+
                      '  <div class="reviewer-name">'+
                        item.имя   +
                    '    </div>'+
                   '     <div class="review-date">'+
                  item.дата+
                 '       </div>'+
                '    </div>'+
               ' </div>'+
              '  <div class="text-review">'+
                    item.текст+
             '   </div>'+
            '</div>')
    key3=1;
  }
else
{
   $('.cl2').html($('.cl2').html()+            ' <div class="review-block">'+
                '<div class="header-review">'+
                    '<img src="'+item.изображение+'">'+
                    '<div class="review-info">'+
                      '  <div class="reviewer-name">'+
                        item.имя   +
                    '    </div>'+
                   '     <div class="review-date">'+
                  item.дата+
                 '       </div>'+
                '    </div>'+
               ' </div>'+
              '  <div class="text-review">'+
                    item.текст+
             '   </div>'+
            '</div>')
    key3=0;
}
  })
    dataGlb.teachers.forEach(function(item, i, arr) {
        $('.teachers-cour').html($('.teachers-cour').html()+             '<div class="block-teacher">'+
                        ' <div class="img-tchr">'+
                         '    <img src="'+item.изображение+'">'+
                         '</div>'+
                         '<div class="lesson-tchr lesson-tchr-mob">'+
                          item.предмет+
                         '</div>'+
                         '<div class="name-tchr">'+
                          item.полное_имя+
                         '</div>'+
                         '<div class="achv-tchr">'+
                          '   <div class="ach">'+
                           '      <div><img src="img/obr.svg"></div>'+
                                 item.образование+
                             '</div>'+
                             '<div class="ach"><div><img src="img/business.svg"></div>'+
                              '  <div> Опыт работы:<br> <span class="logical-2">'+item.опыт+'</span></div>'+
                             '</div>'+

                         '</div>'+
                         '<div class="teacher-bio">'+
                           item.биография+
                        '</div>'+
                          
                     '</div>')
        if(key4==0)
        {

          $('.tchr-1').html($('.tchr-1').html()+
                  ' <div class="teacher-block-personal">'+
                      ' <div class="teacher-info-header">'+
                          '  <div class="img-teacher-personal">'+
                             '   <img src="'+item.изображение+'">'+
                         '   </div>'+
                         '   <div class="info-teacher-personal">'+
                        
                          '  <div class="name-tchr">'+
                                item.полное_имя+
                        '    </div>'+
                          '  <div class="lesson-tchr">'+
                          item.предмет+
                         '   </div>'+
                          '  <div class="achv-tchr">'+
                            '    <div class="ach">'+
                             '       <div><img src="img/obr.svg"></div>'+
                           item.образование+
                            '    </div>'+
                              '  <div class="ach"><div><img src="img/business.svg"></div>'+
                               '     <div> Опыт преподавания:<br> <span class="logical-2">'+item.опыт+'</span></div>'+
                             '   </div>'+

                          '  </div>'+
                            '</div>'+
                      '  </div>'+
                       ' <div class="teacher-bio">'+
                          item.биография+
                       ' </div>'+
                   ' </div>'
            )
          key4=1;
        }
                else
        {

          $('.tchr-2').html($('.tchr-2').html()+
                  ' <div class="teacher-block-personal">'+
                      ' <div class="teacher-info-header">'+
                          '  <div class="img-teacher-personal">'+
                             '   <img src="'+item.изображение+'">'+
                         '   </div>'+
                         '   <div class="info-teacher-personal">'+
                        
                          '  <div class="name-tchr">'+
                                item.полное_имя+
                        '    </div>'+
                          '  <div class="lesson-tchr">'+
                          item.предмет+
                         '   </div>'+
                          '  <div class="achv-tchr">'+
                            '    <div class="ach">'+
                             '       <div><img src="img/obr.svg"></div>'+
                           item.образование+
                            '    </div>'+
                              '  <div class="ach"><div><img src="img/business.svg"></div>'+
                               '     <div> Опыт преподавания:<br> <span class="logical-2">'+item.опыт+'</span></div>'+
                             '   </div>'+

                          '  </div>'+
                            '</div>'+
                      '  </div>'+
                       ' <div class="teacher-bio">'+
      item.биография+
                       ' </div>'+
                   ' </div>'
            )
          key4=0;
        }
    })
}
)