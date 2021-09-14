$(document).ready(function(){
    $('.pop-up__open').on("click", function(){
        $('.pop-up').addClass('bg-mask');
        $('.all-content').addClass('body');
        $('.pop-up').show();
    });
});
$(document).ready(function(){
    $('.pop-up__close').on("click", function(){
        $('.pop-up').removeClass('bg-mask');
        $('.all-content').removeClass('body');
        $('.pop-up').hide();
    });
});

let obj_info;

$(document).ready(function(){
    $('.pop-up__open').on("click", function(){
        let identificator = $(this).attr('id');
        switch (identificator){
            case "1":
                obj_info = {
                    img: '<img src="https://top20.ua/media-resize/company_large/zhitomirskiy-muzey-kosmonavtiki-im-sp-koroleva-65816.jpeg?timestamp=1568974445">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.0858689115407!2d28.675404715453325!3d50.2529805094553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c649932306be3%3A0xd1eedda024102b4!2z0JzRg9C30LXQuSDQutC-0YHQvNC-0L3QsNCy0YLQuNC60Lgg0ZbQvNC10L3RliDQodC10YDQs9GW0Y8g0J_QsNCy0LvQvtCy0LjRh9CwINCa0L7RgNC-0LvRjNC-0LLQsA!5e0!3m2!1sru!2sua!4v1631552509554!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Музей космонавтики им. С. Королева</h1>',
                    text: '<p>Музей космонавтики имени великого ученого и инженера Сергея Королева. Состоит из дома-музея, где Королев родился и расположенного напротив здания выставки "Космос". В экспозиции представлена уникальная коллекция образцов и макетов космической техники (макеты «Луноход-2», корабль «Союз», спускаемый аппарат «Венера-15» , спускаемый аппарат корабля «Союз-27», бывший в космосе).Также в музее находятся различное оборудование, снаряжения космонавтов, документы и фотографии.</p>'
                };
            break;
            case "2":
                obj_info = {
                    img: '<img src="https://media-cdn.tripadvisor.com/media/photo-s/05/d6/5f/b1/zhytomyr-nature-museum.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.983475735977!2d28.6533103154534!3d50.254892909317824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6492e6f9a219%3A0xe6eee99e8e067e8e!2z0JbQuNGC0L7QvNC40YDRgdC60LjQuSDQvNGD0LfQtdC5INC_0YDQuNGA0L7QtNGL!5e0!3m2!1sru!2sua!4v1631552582397!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Житомирский музей природы</h1>',
                    text: '<p>"Музей Природы" природоведческий музей, который был основан ещё в 1865 году и состоял, преимущественно, из колекции минералов и горных пород губернатора М. Черткова. На сегодняшний день, колекция экспонатов состоит из более чем 1500 музейных предметов. Цель выставки - восоздать историю природы, растительного и животного мира Житомирщины. В колекции находятся уникальные экспонаты: фрагменты рога гигантского оленя, череп и кости огромного шерстистого носорога, пещерного медведя и многое другое. До того, как построят новое здание, часть колекции находиться в здании Краеведческого музея, часть - в подвалах собора (бывшего места расположения музея природы).</p>'
                };
            break;
            case "9":
                obj_info = {
                    img: '<img src="https://www.autovykup.com.ua/wp-content/uploads/2020/09/zhitomir-1024x481.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.518963174932!2d28.662915315453066!3d50.24489101003656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6485a85f46db%3A0xe8e4df42d76a3760!2z0J_QsNGA0Log0ZbQvC4g0K7RgNGW0Y8g0JPQsNCz0LDRgNGW0L3QsA!5e0!3m2!1sru!2sua!4v1631552631565!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Гагаринский Парк</h1>',
                    text: '<p>Городской парк имени Гагарина в Житомире – одно из лучших мест для прогулок и отдыха горожан. Он протянулся на берегу реки Тетерев на площади около 36 га. Тут есть фонтаны, скульптуры, уникальные растения и зоны отдыха.</p>'
                };
            break;
            case "15":
                obj_info = {
                    img: '<img src="https://zeft.in.ua/wp-content/uploads/2020/04/Spaso-Preobrazhenskij-sobor-m.-ZHitomir-1.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.844069958726!2d28.655415815453487!3d50.25749650913077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6494ecc7e7f9%3A0xa5f9f11588353538!2z0KHQv9Cw0YHQvi3Qn9GA0LXQvtCx0YDQsNC20LXQvdGB0LrQuNC5INGB0L7QsdC-0YA!5e0!3m2!1sru!2sua!4v1631552681400!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Спасо-Преображенский собор</h1>',
                    text: '<p>Спасо-Преображенский собор - памятник архитектуры государственного значения в г.. Житомире, один из крупнейших православных храмов Украины. Кафедральный собор Житомирской епархии УПЦ (МП).</p>'
                };
            break;
        }
        $('.pop-up__img').html(obj_info.img);
        $('.pop-up__map').html(obj_info.map);
        $('.pop-up__title').html(obj_info.title);
        $('.pop-up__text').html(obj_info.text);
    });
});

new WOW().init();