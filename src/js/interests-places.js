let nextIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256l-91.582,91.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17L228.418,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g></svg>';
let prevIcon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z"/><path d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582C322.083,156.087,322.083,142.58,313.752,134.248z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g><g></g><g></g><g></g></svg>';

let screenWidth = $(window).width();

if(screenWidth <= 400){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            margin:10,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else if(screenWidth <= 650){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:2,
            margin:10,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else if(screenWidth <= 768){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:3,
            margin:10,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}else{
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:4,
            margin:10,
            mouseDrag:false,
            nav:true,
            dots:false,
            navElement: 'div',
            navText:[
            prevIcon,
            nextIcon
            ]
        });
    });
}

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
                    text: '<p>Музей Природы" природоведческий музей, который был основан ещё в 1865 году и состоял, преимущественно, из колекции минералов и горных пород губернатора М. Черткова. На сегодняшний день, колекция экспонатов состоит из более чем 1500 музейных предметов. Цель выставки - восоздать историю природы, растительного и животного мира Житомирщины. В колекции находятся уникальные экспонаты: фрагменты рога гигантского оленя, череп и кости огромного шерстистого носорога, пещерного медведя и многое другое. До того, как построят новое здание, часть колекции находиться в здании Краеведческого музея, часть - в подвалах собора (бывшего места расположения музея природы).</p>'
                };
            break;
            case "3":
                obj_info = {
                    img: '<img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Sergei_Korolyov_Museum_%28Moscow%29_-6.jpg">',
                    map: '',
                    title: '<h1>Мемориальный дом-музей С.П. Королева</h1>',
                    text: '<p>Мемориáльный дом-музе́й акаде́мика Серге́я Королёва — московский мемориальный музей, посвящённый жизни и деятельности Главного конструктора космической техники Сергея Королёва. Официальное открытие состоялось в 1975 году по инициативе жены Нины Королёвой, передавшей во владение музея около 19 тысяч предметов, ставших экспонатами. Учреждение располагается в доме на 1-й Останкинской улице, в котором академик прожил с 1959 по 1966 год</p>'
                };
            break;
            case "4":
                obj_info = {
                    img: '<img src="http://www.videnovum.com/foto/ukraine/136/zhitomir/remeslenny-dvor/sDSC_0052.JPG">',
                    map: '',
                    title: '<h1>Музей Ремесленный двор</h1>',
                    text: '<p></p>'
                };
            break;
            case "5":
                obj_info = {
                    img: '<img src="https://dost.mistaua.com/2016/2408_2_2.jpg">',
                    map: '',
                    title: '<h1>Музей истории пожарной охраны</h1>',
                    text: '<p></p>'
                };
            break;
            case "6":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19756_800x600_800px-Zhitomir.jpg">',
                    map: '',
                    title: '<h1>Житомирский литературный музей</h1>',
                    text: '<p></p>'
                };
            break;
            case "7":
                obj_info = {
                    img: '<img src="http://andreyshad.ru/wp-content/uploads/2015/10/dom-muzej-korolenko-17.jpg">',
                    map: '',
                    title: '<h1>Музей Короленко</h1>',
                    text: '<p></p>'
                };
            break;
            case "8":
                obj_info = {
                    img: '<img src="https://baza.zruchno.com.ua/upload/6aba2dec-6e71-cd89-022f-589c948125a0_obj_img_1_c">',
                    map: '',
                    title: '<h1>Этнографический музей Древлянское село</h1>',
                    text: '<p></p>'
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
            case "10":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19749_800x600_Screenshot_1.jpg">',
                    map: '',
                    title: '<h1>Парк Замковой горы</h1>',
                    text: '<p>Замковая гора в Житомире — это именно то место, где можно почувствовать историю города, а если вам повезет, то еще и наткнуться на многочисленные подземные ходы, которые прорезают гору на разной глубине. Исследуя подземные ходы, оказалось, что один из них выходил к реке Каменка и обеспечивал водоснабжения замка, ведь на территории крепости не было ни одного колодца.</p>'
                };
            break;
            case "11":
                obj_info = {
                    img: '<img src="https://media-cdn.tripadvisor.com/media/photo-s/14/e5/49/a7/caption.jpg">',
                    map: '',
                    title: '<h1>МультиЗоо контактный зоопарк</h1>',
                    text: '<p></p>'
                };
            break;
            case "12":
                obj_info = {
                    img: '<img src="https://media-cdn.tripadvisor.com/media/photo-s/09/d6/33/ca/caption.jpg">',
                    map: '',
                    title: '<h1>Скалодром</h1>',
                    text: '<p>Скалодром «Гора» — это скалолазная школа для детей и взрослых.</p>'
                };
            break;
            case "13":
                obj_info = {
                    img: '<img src="https://f.mixsport.pro/photo/6013/aP1dI.jpg">',
                    map: '',
                    title: '<h1>Ботанический сад Житомирского национального агроэкологического университета</h1>',
                    text: '<p></p>'
                };
            break;
            case "14":
                obj_info = {
                    img: '<img src="https://www.successful-city.com/wp-content/uploads/2021/08/230532275_1509632182712356_1538880526765816050_n.jpg">',
                    map: '',
                    title: '<h1>Соколовский карьер</h1>',
                    text: '<p>Соколовский карьер появился в Житомире в результате затопления гранитного карьера. Его глубина впечатляет – 100–110 метров. Своеобразная каменная чаша была сделана руками человека, а точнее специальной техникой и взрывчаткой. Раньше здесь добывали камень, но лет 25 назад его затопили, хотя сам завод до сих пор продолжает свою деятельность. Дорога, по которой гранит вывозили на поверхность, вилась спиралью против часовой стрелки. Сегодня этот подъем могут оценить только дайверы.</p>'
                };
            break;
            case "15":
                obj_info = {
                    img: '<img src="https://zeft.in.ua/wp-content/uploads/2020/04/Spaso-Preobrazhenskij-sobor-m.-ZHitomir-1.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.844069958726!2d28.655415815453487!3d50.25749650913077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6494ecc7e7f9%3A0xa5f9f11588353538!2z0KHQv9Cw0YHQvi3Qn9GA0LXQvtCx0YDQsNC20LXQvdGB0LrQuNC5INGB0L7QsdC-0YA!5e0!3m2!1sru!2sua!4v1631552681400!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Спасо-Преображенский собор</h1>',
                    text: '<p>Спасо-Преображенский собор - памятник архитектуры государственного значения в г.. Житомире, один из крупнейших православных храмов Украины. Кафедральный собор Житомирской епархии УПЦ (МП)</p>'
                };
            break;
            case "16":
                obj_info = {
                    img: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80._%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80..JPG/1200px-%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80._%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80..JPG">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.8952367100646!2d28.66162831545353!3d50.25654090919941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64968ff2c613%3A0xb1f216d3059f9b54!2sSt.%20Michael%20Cathederal!5e0!3m2!1sru!2sua!4v1631553313750!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Собор Святого Архангела Михаила</h1>',
                    text: '<p>Свято-Михайловский кафедральный собор - памятник архитектуры местного значения и храм Православной церкви Украины в. Житомире. Собор построен в 1856 году на средства житомирского купца Михаила Хаботина</p>'
                };
            break;
            case "17":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/31356_800x600_Screenshot_12.jpg">',
                    map: '',
                    title: '<h1>Успенская церковь</h1>',
                    text: '<p></p>'
                };
            break;
            case "18":
                obj_info = {
                    img: '<img src="https://periscope.com.ua/sites/default/files/dazest/sobor-svsofii-01.jpg">',
                    map: '',
                    title: '<h1>Софийский собор</h1>',
                    text: '<p></p>'
                };
            break;
            case "19":
                obj_info = {
                    img: '<img src="https://kzd.org.ua/sites/default/files/9y5b6713_m.jpg">',
                    map: '',
                    title: '<h1>Храм св. Иоанна из Дукли</h1>',
                    text: '<p></p>'
                };
            break;

            case "20":
                obj_info = {
                    img: '<img src="https://periscope.com.ua/sites/default/files/dazest/hrestov-cerkva-zt-01.jpg">',
                    map: '',
                    title: '<h1>Крестовоздвиженский собор</h1>',
                    text: '<p></p>'
                };
            break;
            case "21":
                obj_info = {
                    img: '<img src="http://ukrainaincognita.com/wp-content/uploads/files/zhtomyr_kirha7.jpg">',
                    map: '',
                    title: '<h1>Лютеранская церковь</h1>',
                    text: '<p></p>'
                };
            break;
            case "22":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19354_800x600_Screenshot_18.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.2821770150845!2d28.6618028654532!3d50.249313909718694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c649007db67c1%3A0xd70a915edabb743!2sVodonapirna%20Bashta!5e0!3m2!1sru!2sua!4v1631553355750!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Водонапорная башня</h1>',
                    text: '<p>Водонапорная башня — историческое сооружение на улице Театральной в городе Житомире, построенная в 1898 году. Использовалась как регулятор давления воды и пожарная смотровая башня — каланча. Несмотря на то, что в центре города Житомира было две полноводные реки и много меньших канав, озер и ручьев в окрестностях, обрывистые берега и гранитные скалы часто усложняли процесс водозабора.</p>'
                };
            break;
            case "23":
                obj_info = {
                    img: '<img src="https://rest.guru.ua/img/place_photo/1190/2617.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.5903135126587!2d28.647018515452995!3d50.243558210132285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c648985629789%3A0x9ca8f9e2c28843cf!2z0JzQvtC90YPQvNC10L3RgiDQodC70LDQstGL!5e0!3m2!1sru!2sua!4v1631553419912!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Мемориал Вечной Славы</h1>',
                    text: '<p>В честь 34-й годовщины победы во Второй мировой войне в Житомире появился монумент вечной славы. Место для памятника выбирали на возвышении, чтобы его было видно со всех точек города. 9 мая 1979 года состоялось торжественное открытие. Архитекторы Иванов и Игнащенко со скульпторами Хусидом и Коломийцем создали 37 метровую колонну цилиндрической формы. Выполнен монумент из лабрадорита. Увенчана колонна бронзовой скульптурой, изображающей воина красной армии, партизана и девушку, которые стоят спинами друг к другу. У подножия монумента в пятикутной звезде горит Вечный огонь.</p>'
                };
            break;
            case "24":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19320_800x600_Screenshot_9.jpg">',
                    map: '',
                    title: '<h1>Особняк Филиппова</h1>',
                    text: '<p>Особняк известного в 19 веке житомирского нотариуса Ивана Филиппова расположен на окраине города и является малоизвестным, но требующим значительного внимания памятником городской архитектуры. Это прекрасное здание в стиле барокко напоминает небольшой дворец. Сегодня здесь расположен городской ЗАГС и другие административные учреждения, однако мало кто из посетителей знает историю этого величественного здания.</p>'
                };
            break;
            case "25":
                obj_info = {
                    img: '<img src="https://we.org.ua/wp-content/uploads/2014/11/ab5af5f4a2ebb94b52ab57e7e082974b_600x1000-1024x679.jpg">',
                    map: '',
                    title: '<h1>Скала "Голова Чацкого"</h1>',
                    text: '<p>Скала Голова Чацкого  - геологический памятник природы. Расположена на юго-западе от центральной части города. Создана с целью охраны живописной монолитной скалы из серого гранита. Скала расположена на левом берегу реки Тетерев, имеет высоту около 30 м. Вместе с соседними скалами образует отвесную стену, длиной около 120 м. Вершина скалы имеет вид головы человека. При чём такая форма - это не специально сделанная скульптурная композиция, а памятник природы, который образовался в результате выветривания гранитных пород.</p>'
                };
            break;
            case "26":
                obj_info = {
                    img: '<img src="https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19330_800x600_Screenshot_15.jpg">',
                    map: '',
                    title: '<h1>Плоский дом</h1>',
                    text: '<p></p>'
                };
            break;
            case "27":
                obj_info = {
                    img: '<img src="https://uatravel.info/storage/images/5/c/9/5c9ad89de6a300999ab7ae6764f2eda4.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.991362531598!2d28.662480515453506!3d50.254745609328495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6496d0ea63e5%3A0x14fad276d97aa66c!2z0JbQuNGC0L7QvNC40YDRgdGM0LrQuNC5INCw0LrQsNC00LXQvNGW0YfQvdC40Lkg0L7QsdC70LDRgdC90LjQuSDRgtC10LDRgtGAINC70Y_Qu9GM0L7Qug!5e0!3m2!1sru!2sua!4v1631553457443!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Кукольный театр</h1>',
                    text: '<p></p>'
                };
            break;
            case "28":
                obj_info = {
                    img: '<img src="http://photos.wikimapia.org/p/00/03/44/73/35_big.jpg">',
                    map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.0388114512543!2d28.65695011545347!3d50.25385940939214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6493d86260c1%3A0x28030eeb00570fe5!2sZhytomyrs%CA%B9kyy%20Oblasnyy%20Ukrayins%CA%B9kyy%20Muzychno-Dramatychnyy%20Teatr%20Imeni%20Ivana%20Kocherhy!5e0!3m2!1sru!2sua!4v1631553485075!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
                    title: '<h1>Музыкально-драматический театр имени Ивана Кочерги</h1>',
                    text: '<p></p>'
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