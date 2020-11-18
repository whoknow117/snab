
import DraftsIcon from '@material-ui/icons/Drafts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import OpacityIcon from '@material-ui/icons/Opacity';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Drill from '../../icons/Drill/Drill';
import Pump from '../../icons/Pump/Pump';
import Crane from '../../icons/Crane/Crane';
import Electric from '../../icons/Electric/Electric';
import Ventilation from '../../icons/Ventilation/Ventilation';
import Garden from '../../icons/Garden/Garden';
import Shovel from '../../icons/Shovel/Shovel';
import Boiler from '../../icons/Boiler/Boiler';
import Gas from '../../icons/Gas/Gas';
import { MenuItem } from '@material-ui/core';
import k1Img from '../../assets/k1.jpg';
import k2Img from '../../assets/k2.jpg';
import k3Img from '../../assets/k3.jpg';
import k4Img from '../../assets/k4.jpg';
import k5Img from '../../assets/k5.jpg';



const CLICK__NAVBAR = 'CLICK__NAVBAR';
const ON_MOUSE_OVER = 'ON_MOUSE_OVER';
const ON_MOUSE_LEAVE = 'ON_MOUSE_LEAVE';
const ON_OVER_DROPDOWN = 'ON_OVER_DROPDOWN';
const ON_DROPDOWN_LEAVE = 'ON_DROPDOWN_LEAVE';
const ON_LINK_OVER = 'ON_LINK_OVER';
const ON_LINK_LEAVE = 'ON_LINK_LEAVE';

let store = {

    subscribe(observer) {
        this._rerenderer = observer;
    },
    _rerenderer() {
        alert('rerender');
    },
    getState() {
        return this._state;
    },


    _state: {
        icons: [
            { icon: <PersonIcon />, path: '/', txt: 'Моента' },
            { icon: <PersonIcon />, path: '/pop', txt: 'Обратный звонок' },
            { icon: <DraftsIcon />, path: ' ', txt: 'Контакты' },
            { icon: <FavoriteIcon />, path: '/', txt: 'Личный кабинет' },
            { icon: <ShoppingCartIcon />, path: '/', txt: 'Корзина' },
        ],

        // images: [
        //     { id: 1, img: 'https://doexpert.ru/wp-content/uploads/2019/06/df330dwe1.jpg' },
        //     { id: 2, img: 'https://www.leroymerlin.ua/m/img?href=/business/v2/images/9999PRO11980920FRA1_Media_Image&format=standard' },
        //     { id: 3, img: 'https://besplatka.ua/aws/52/93/04/50/shurupovert-makita-df330dwe---df330d--12v--li-ion-rumyniya-2a-ch-photo-cfa7.jpg' },
        //     { id: 4, img: 'https://i8.rozetka.ua/goods/15401553/makita_df330dwe_images_15401553049.jpg' },
        //     { id: 5, img: 'https://maklta.com.ua/userfiles/image/catalog/ddf453rfx7_makita.jpg' },

        // ],

        mainSlider:  [
            k1Img,
            k2Img,
            k3Img,
            k4Img,
             k5Img

        ],
        sidebar: [

            {
                icon: <Pump />, name: 'Сантехника, Смесители, Трубы', id: 0, path: '/santehnika', sub: [
                    {
                        head: 'Смесители', path: '/santehnika', item1: 'Смесители для ванной', path: '/tovar', item2: 'Смесители для кухни', path: '/tovar', item3: 'Смесители для кухни', path: '/tovar',
                        item4: 'Смесители для Душ-кабин', path: '/tovar',
                    },
                    { head: 'Шланги', path: '/tovar', item1: 'Шланги для ванной', path: '/tovar', item2: 'Шланги для полива', path: '/tovar', item3: 'Сифоны', path: '/tovar', },
                    { head: 'Прокладки и манжеты', path: '/tovar', item1: 'Манжеты чуг/пластик', path: '/tovar', item2: 'Паранитовые прокладки', path: '/tovar', item3: 'Силиконовые прокладки', path: '/tovar',
                    item4: 'Резиновые прокладки', path: '/tovar',item5: 'Прокладки для американок', path: '/tovar', },
                    { head: 'Молотки и кувалды', path: '/tovar', item1: 'Молотки', path: '/tovar', item2: 'Кувалды', path: '/tovar', item3: 'Зубило', path: '/tovar', },
                    { head: 'Сифоны', path: '/tovar', item1: 'Сифоны для ванной', path: '/tovar', item4: 'Сифоны для душ-кабин', path: '/tovar', item2: 'Сифоны для кухни', path: '/tovar', item3: 'Сифоны для умывальника', path: '/tovar', },
                    {
                        head: 'Краны', path: '/tovar', item1: 'Краны под пайку', path: '/tovar', item2: 'Краны металлические водопроводные', path: '/tovar', item3: 'Краны пластиковые', path: '/tovar',
                        item4: 'Краны для летнего душа', path: '/tovar',
                    },
                    { head: 'Лейки', path: '/tovar', item1: 'Лейки для ванной', path: '/tovar', item2: 'Лейки для полива', path: '/tovar', item3: 'Лейки для биде', path: '/tovar', },
                     
                    {
                        head: 'Смесители', path: '/tovar', item1: 'Смесители для ванной', path: '/tovar', item2: 'Смесители для кухни', path: '/tovar',  path: '/tovar',
                            
                        item4: 'Смесители для Душ-кабин', path: '/tovar',
                    },
                    { head: 'Муфты и нипели', path: '/tovar', item1: 'Нипели латунные', path: '/tovar', item2: 'Муфты металлические', path: '/tovar', item3: 'Уголки латунные', path: '/tovar',
                    item4: 'Муфты латунные', path: '/tovar',item5: 'Тройник латунный', path: '/tovar', item6: 'Сгон метталический', path: '/tovar',
                    item7: 'Отвод метталический', path: '/tovar', },
                    { head: 'Гусаки', path: '/tovar', item1: 'Гусаки ванна Евро', path: '/tovar', item2: 'Гусак ванна', path: '/tovar', item3: 'Гусак для кухни', path: '/tovar', item3: 'Гусак для умывальника', path: '/tovar', },
                    { head: 'Трубы', path: '/tovar', item1: 'труба ПНД ', path: '/tovar', item2: 'Труба полипропиленовая для пайки',  },
                    {
                        head: 'Краны', path: '/tovar', item1: 'Краны под пайку', path: '/tovar', item2: 'Краны металлические водопроводные', path: '/tovar', item3: 'Краны пластиковые', path: '/tovar',
                        item4: 'Краны для летнего душа', path: '/tovar',
                    },
                    {
                        head: 'Метчики и плашки', path: '/tovar', item1: 'Метчики', path: '/tovar', item2: 'Плашки', path: '/tovar', item3: 'Метчикодержатели', path: '/tovar',item4: 'Воротки', path: '/tovar',
                        item5: 'Воротки', path: '/tovar',
                        item6: 'Наборы плашек и метчиков', path: '/tovar',
                    },
                    { head: 'Шланги', path: '/tovar', item1: 'Шланги для ванной', path: '/tovar', item2: 'Шланги для полива', path: '/tovar', item3: 'Сифоны', path: '/tovar', },
                    { head: 'Смесители', path: '/tovar', item1: 'Смесители для ванной', path: '/tovar', item2: 'Смесители для кухни', path: '/tovar', item3: 'Смесители для кухни', path: '/tovar',
                    item4: 'Смесители для кухни', path: '/tovar',item5: 'Смесители для кухни', path: '/tovar', 
                    item5: 'Смесители для кухни', path: '/tovar', item6: 'Смесители для кухни', path: '/tovar',},  

                ]
            },
            {
                icon: < Electric />, name: 'Электрика, Освещение', id: 1, path: '/..', sub: [
                    { head: 'Лампы', path: '/tovar', item1: 'Светодиодные лампы', path: '/tovar', item2: 'Лампы накаливания', path: '/tovar', item3: 'Лампы Днат,Дрл, Мгл', path: '/tovar' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <SettingsIcon />, name: 'Крепеж, Гвозди, Саморезы, Хамуты', id: 2, path: '/asd', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Shovel />, name: 'Лопаты, Сетка, Нитка ', id: 3, path: '/assd', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Crane />, name: 'Насосы, Реле, Датчики', id: 4, path: '/nasosy', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Drill />, name: 'Электроинструмент, Бензоинструмент', id: 5, path: '/tovar', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <BuildIcon />, name: 'Инструмент, Отвертки, Биты', id: 6, path: '/ss', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Gas />, name: 'Газовые балоны, горелки, электроды', id: 14, path: '/sdas', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Boiler />, name: 'Бойлеры, газовые колонки', id: 15, path: '/ssasd', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Ventilation />, name: 'Короба, Вентиляция', id: 7, path: '/s', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <Garden />, name: 'Сад-огород, Штуцера, Фитинги', id: 8, path: '/adaadss', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <OpacityIcon />, name: 'Краски, Лаки, Валики', id: 9, path: '/vasd', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <MonetizationOnIcon />, name: 'Акции', id: 10, path: '/a', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
            {
                icon: <TrendingDownIcon />, name: 'Распродажа', id: 11, path: '/as', sub: [
                    { head: 'Смесители', item1: 'Смесители для ванной', item2: 'Смесители для кухни', item3: 'Смесители для кухни' },
                    { head: 'Шланги', item1: 'Шланги для ванной', item2: 'Шланги для полива', item3: 'Сифоны' }
                ]
            },
        ],
        tovary: [
            {
                id: 123562,
                img: "https://hotline.ua/img/tx/211/2113094325.jpg",
                discription: "asda adscadscd",
                name: "Смеситель Grohe Euroeco 32743000",
                specifications:"Тип смесителя: кухонный, Тип смешивания: флажковый, Цвет: блестящий хром, Крепление: гайка, Дополнительно: подводка для чистой воды ",
                images: [
                    { id: 0, img: 'https://santehrai.com.ua/uploads/9/47487-32843002-2.jpg' },
                    { id: 1, img: 'https://santehrai.com.ua/uploads/9/47486-32843002-3.jpg' },
                    { id: 2, img: 'https://santehrai.com.ua/uploads/9/47485-32843002.jpg' },
                    { id: 3, img: 'https://santehrai.com.ua/uploads/9/47488-32843002-1.jpg' },
                   
        
                ],
                price: "2 800 грн",
                path: '/santehnika/123562' 
             


            },
            {
                id: 123561,
                img: "https://i1.foxtrot.com.ua/product/MediumImages/6377012_0.jpg",
                discription: "asda adscadscd",
                name: "Водонагреватель ATLANTIC Atlantic Opro Classic VM 80 N4 (1200W)г",
                specifications:"Мощность: 1500ВТ, Обьем: 80л, Форма: Цилиндрическая, Габариты (ВхШхГ): 85.9 х 43.3 х 45.1 см, Дополнительно: подводка для чистой воды, Вес: 21кг, Тип управления: механическое, Тип установки: настенный",
                images: [
                    { id: 0, img: 'https://i1.foxtrot.com.ua/product/MediumImages/6377012_1.jpg' },
                    { id: 1, img: 'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/a/t/atlantic_opro_classic_vm_80_n4_3.jpg' },
                    { id: 2, img: 'https://i1.foxtrot.com.ua/product/MediumImages/6377012_3.jpg' },
                    { id: 3, img: 'https://images.ua.prom.st/2095395884_w640_h640_bojler-atlantic-opro.jpg' },
                    { id: 4, img: 'https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/1/2/1269313.jpg' },
        
                ],
                price: '2 199 грн',
                path: '/tovar/123561' 
            
            },
            {
                id: 123121,
                img: "https://images.ua.prom.st/1234460199_svetodiodnyj-svetilnik-600600.jpg",
                discription: "asda adscadscd",
                name: "Светодиодный светильник 600*600 PREMIUM GTV PREMIO-45W- 4000К PANEL",
                specifications:"Смеситель кухонный, тип смешивания: флажковый, цвет: блестящий хром, крепление: гайка, дополнительно: подводка для чистой воды ",
                images: [
                    { id: 0, img: 'https://doexpert.ru/wp-content/uploads/2019/06/df330dwe1.jpg' },
                    { id: 1, img: 'https://www.leroymerlin.ua/m/img?href=/business/v2/images/9999PRO11980920FRA1_Media_Image&format=standard' },
                    { id: 2, img: 'https://besplatka.ua/aws/52/93/04/50/shurupovert-makita-df330dwe---df330d--12v--li-ion-rumyniya-2a-ch-photo-cfa7.jpg' },
                    { id: 3, img: 'https://i8.rozetka.ua/goods/15401553/makita_df330dwe_images_15401553049.jpg' },
                    { id: 4, img: 'https://maklta.com.ua/userfiles/image/catalog/ddf453rfx7_makita.jpg' },
        
                ],
                price: '120 грн',
                path: '/tovar/123121' 
              
            },
            {
                id: 123151,
                img: "https://dasinstrument.com.ua/image/cache/catalog/akk.instrument/Shurupovert/Makita/DHP453RFX8-600x554.jpg",
                discription: "asda adscadscd",
                breadCrumbs: [


                ],
                
                name: "Шуруповерт Makita 1254ab 48v stage 1",
                img: 'https://my-tools.com.ua/images/akkumulyatornyy-shurupovert-makita-df-457-dwe.jpg',
                specifications:"Смеситель кухонный, тип смешивания: флажковый, цвет: блестящий хром, крепление: гайка, дополнительно: подводка для чистой воды ",
                images: [
                    { id: 0, img: 'https://doexpert.ru/wp-content/uploads/2019/06/df330dwe1.jpg' },
                    { id: 1, img: 'https://www.leroymerlin.ua/m/img?href=/business/v2/images/9999PRO11980920FRA1_Media_Image&format=standard' },
                    { id: 2, img: 'https://besplatka.ua/aws/52/93/04/50/shurupovert-makita-df330dwe---df330d--12v--li-ion-rumyniya-2a-ch-photo-cfa7.jpg' },
                    { id: 3, img: 'https://i8.rozetka.ua/goods/15401553/makita_df330dwe_images_15401553049.jpg' },
                    { id: 4, img: 'https://maklta.com.ua/userfiles/image/catalog/ddf453rfx7_makita.jpg' },
        
                ],
                price: '1 200 грн',
                path: '/tovar/123151' 
              
            },
            {
                id: 123421,
                img: "https://s1.kaercher-media.com/products/16307500/main/1/d0.jpg",
                discription: "asda adscadscd",
                name: "Минимойка Kerher k5 + насадки",
                specifications:"Смеситель кухонный, тип смешивания: флажковый, цвет: блестящий хром,крпеление: гайка,дополнительно: подводка для чистой воды ",
                images: [
                    { id: 0, img: 'https://doexpert.ru/wp-content/uploads/2019/06/df330dwe1.jpg' },
                    { id: 1, img: 'https://www.leroymerlin.ua/m/img?href=/business/v2/images/9999PRO11980920FRA1_Media_Image&format=standard' },
                    { id: 2, img: 'https://besplatka.ua/aws/52/93/04/50/shurupovert-makita-df330dwe---df330d--12v--li-ion-rumyniya-2a-ch-photo-cfa7.jpg' },
                    { id: 3, img: 'https://i8.rozetka.ua/goods/15401553/makita_df330dwe_images_15401553049.jpg' },
                    { id: 4, img: 'https://maklta.com.ua/userfiles/image/catalog/ddf453rfx7_makita.jpg' },
        
                ],
                price: '14 500 грн',
                path: '/nasosy/123421' 
              
            },
            {
                id: 113121,
                img: "https://hotline.ua/img/tx/124/1246069445.jpg",
                discription: "asda adscadscd",
                name: "Насосная станция LEO LKSm130 (776111)",
                specifications:"Смеситель кухонный, тип смешивания: флажковый, цвет: блестящий хром,крпеление: гайка,дополнительно: подводка для чистой воды ",
                images: [
                    { id: 0, img: 'https://doexpert.ru/wp-content/uploads/2019/06/df330dwe1.jpg' },
                    { id: 1, img: 'https://www.leroymerlin.ua/m/img?href=/business/v2/images/9999PRO11980920FRA1_Media_Image&format=standard' },
                    { id: 2, img: 'https://besplatka.ua/aws/52/93/04/50/shurupovert-makita-df330dwe---df330d--12v--li-ion-rumyniya-2a-ch-photo-cfa7.jpg' },
                    { id: 3, img: 'https://i8.rozetka.ua/goods/15401553/makita_df330dwe_images_15401553049.jpg' },
                    { id: 4, img: 'https://maklta.com.ua/userfiles/image/catalog/ddf453rfx7_makita.jpg' },
        
                ],
                price: '2 250 грн',
                path: '/tovar/113121' 
              
            },
        ],






        goods: [
            {
                id: 192303,
                img: 'https://yaelectrik.ru/wp-content/uploads/2017/02/01-20-660x498.jpg',
                name: 'Провода',
                path: '',


            },
            {
                id: 192331,
                img: 'https://nasvitlo.com/uploads/shop/products/main/57e3575a30d37674255ee80cc51c46df.jpg',
                name: 'Светильники',

            },
            {
                id: 192332,
                img: 'https://katextd.com/images/detailed/1/Лампа_накаливания.jpg',
                name: 'Лампы',

            },
            {
                id: 192035,
                img: 'https://stroysovet.com.ua/image/cache/catalog/автомат%202п-500x500.gif',
                name: 'Автоматы',

            },
            {
                id: 192332,
                img: 'https://pasivka.com.ua/media/resized/catalog/category/Legrand_Celiane.jpg',
                name: 'Розетки Выключатели',

            },

            {
                id: 192132,
                img: 'https://220pro.ru/files/categories/box_legr.JPG',
                name: 'Щиты',

            },
        ]
    },

    dispatch(action) {

         
       
       
       
      
       
    }





}

export const clickNavbar = (menu) => {

    return {
        type: CLICK__NAVBAR,
        menu: menu,


    }
}

export const onMouseLeave = (menu, linkColor) => {

    return {
        type: ON_MOUSE_LEAVE,

        menu: menu,
        linkColor: linkColor,


    }
}

export const onMouseOver = (menu, linkColor) => {

    return {
        type: ON_MOUSE_OVER,
        menu: menu,
        linkColor: linkColor

    }
}

export const onDropdownLeave = (menu, linkColor) => {

    return {
        type: ON_DROPDOWN_LEAVE,
        menu: menu,
        linkColor: linkColor

    }
}

export const onLinkOver = (menu, linkColor, bg) => {

    return {
        type: ON_LINK_OVER,
        menu: menu,
        linkColor: linkColor,
        bg: bg

    }
}
export const onLinkLeave = (menu, linkColor) => {

    return {
        type: ON_LINK_LEAVE,
        menu: menu,
        linkColor: linkColor

    }
}

export const onOverDropDown = (linkColor) => {

    return {
        type: ON_OVER_DROPDOWN,

        linkColor: linkColor

    }
}

export default store;