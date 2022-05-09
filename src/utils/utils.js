import mguOne from '../images/buildings/mgu/mgu_1.jpg'
import mguTwo from '../images/buildings/mgu/mgu_2.jpg'
import mguThree from '../images/buildings/mgu/mgu_3.jpg'
import mguFour from '../images/buildings/mgu/mgu_4.jpg'

import kotelnicheskayaOne from '../images/buildings/kotelnicheskaya/kotelnicheskaya_1.jpg'
import kotelnicheskayaTwo from '../images/buildings/kotelnicheskaya/kotelnicheskaya_2.webp'
import kotelnicheskayaThree from '../images/buildings/kotelnicheskaya/kotelnicheskaya_3.jpg'
import kotelnicheskayaFour from '../images/buildings/kotelnicheskaya/kotelnicheskaya_4.jpg'

import midOne from '../images/buildings/mid/mid_1.jpg'
import midTwo from '../images/buildings/mid/mid_2.jpg'
import midThree from '../images/buildings/mid/mid_3.jpg'
import midFour from '../images/buildings/mid/mid_4.webp'

import ukrOne from '../images/buildings/ukr/ukr_1.jpg'
import ukrTwo from '../images/buildings/ukr/ukr_2.jpg'
import ukrThree from '../images/buildings/ukr/ukr_3.jpg'
import ukrFour from '../images/buildings/ukr/ukr_4.webp'

import kudrinskayaOne from '../images/buildings/kudrinskaya/kudrinskaya_1.jpg'
import kudrinskayaTwo from '../images/buildings/kudrinskaya/kudrinskaya_2.jpg'
import kudrinskayaThree from '../images/buildings/kudrinskaya/kudrinskaya_3.jpg'
import kudrinskayaFour from '../images/buildings/kudrinskaya/kudrinskaya_4.jpg'

import vorotaOne from '../images/buildings/vorota/vorota_1.jpg'
import vorotaTwo from '../images/buildings/vorota/vorota_2.jpg'
import vorotaThree from '../images/buildings/vorota/vorota_3.jpg'
import vorotaFour from '../images/buildings/vorota/vorota_4.jpg'

import leningradksyaOne from '../images/buildings/leningradksya/leningradksya_1.webp'
import leningradksyaTwo from '../images/buildings/leningradksya/leningradksya_2.jpg'
import leningradksyaThree from '../images/buildings/leningradksya/leningradksya_3.jpg'
import leningradksyaFour from '../images/buildings/leningradksya/leningradksya_4.jpg'

export const totalStatics = 36

export const data = {
    msu: {
        name: 'Московский государственный университет',
        adress: 'г.Москва, ул. Воробьевы горы, д.1',
        coordinates: [55.70355545521505,37.52958176595095],
        description: {
            yearsOfBuilding: '1949 — 1953',
            architect: 'Л. В. Руднев, С. Е. Чернышёв, П. В. Абросимов, А. Ф. Хряков, В. Н. Насонов',
            height: '240 м (36 этажей)',
            type: 'В здании находится Московский государственный университет'
        },
        fullDescription: `<p>Московский государственный университет имени М. В. Ломоносова (с 1755 по 1917 год — Императорский Московский университет) — один из старейших и крупнейших классических университетов России, один из центров российской науки и культуры, расположенный в Москве.</p>
        <p>Московский государственный университет имени Ломоносова — одно из самых крупных и престижных учебных заведений страны. Кроме того, это знаковая достопримечательность столицы — полюбоваться высотным зданием на Воробьевых горах спешат практически все гости Москвы. Стоит, однако, заметить, что эта высотка 1953-го года постройки главное, но далеко не единственное здание университета — всего в его распоряжении более 600 сооружений.</p>
        <p>C 1940 года носит имя Михаила Васильевича Ломоносова. Полное название — федеральное государственное бюджетное образовательное учреждение высшего образования «Московский государственный университет имени М. В. Ломоносова». Широко используется аббревиатура «МГУ». Университет включает в себя 15 научно-исследовательских институтов, 43 факультета, более 300 кафедр и семь филиалов (в их числе шесть зарубежных — пять в странах СНГ и один в Словении). С 1992 года ректором МГУ является академик Виктор Антонович Садовничий.</p>`,
        pictures: [
            {
              image: mguOne,
              caption: ""
            },
            {
              image: mguTwo,
              caption: ""
            },
            {
              image: mguThree,
              caption: ""
            },
            {
                image: mguFour,
                caption: ""
            },
        ],
        distinctives: ['Фонтаны у высотки МГУ являются частью воздухозаборной системы здания. По этой причине вокруг практически не найти высоких деревьев — просто под сквером лежит бетонная плита.',
        'Здание, в стенах которого сегодня располагается Московский государственный университет имени М. В. Ломоносова, вначале должно было стать гостиницей.',
        'Красные полосы на фасаде здания формируют его запоминающийся облик не меньше, чем украшающие его статуи. Без линий башня будет казаться абсолютно бесформенной — линии проведены с учетом золотого сечения.',
        'На месте шпиля на высотном здании могла стоять статуя В. И. Ленина.',
        'Фасад главного здания украшают самые большие механические часы в России.'
        ],
        statistics:{
            photo: 30,
            map: 31,
            quetion: 16,
            fact: 'МГУ до 1990 года являлся самым высоким зданием в Европе, и до 2006 оставалась самым большим небоскребом столицы'
        }

    },
    kotelnicheskaya: {
        name: 'Жилой дом на Котельнической набережной',
        adress: 'г.Москва, Котельническая Набережная, 1/15 ',
        coordinates: [55.747069,37.642842],
        description: {
            yearsOfBuilding: '1948—1952',
            architect: 'Д. Н. Чечулин, А. К. Ростковский, инженер Л. М. Гохман',
            height: '176 м (33 этажа)',
            type: 'В здании располагается жилой дом'
        },
        fullDescription: `<p>Жилой дом на Котельнической набережной — одна из семи реализованных сталинских высоток в Москве. Здание расположено близ места слияния Яузы с Москвой-рекой таким образом, что два боковых корпуса стоят вдоль Котельнической и Подгорской набережных. Высотка строилась как «город в городе» в 1938—1940 и 1948—1952 годах. Авторы проекта — архитекторы Дмитрий Чечулин и Андрей Ростковский, а главный инженер — Л. М. Гохман.</p>
        <p>Центральный высотный корпус насчитывает 32 этажа, его высота вместе со шпилем составляет 176 м, этажность боковых корпусов — от 8 до 10. Изначально в доме было 540 квартир.</p>
        <p>Списки жильцов утверждал сам Сталин, поэтому заселили дом работники НКВД и люди искусства. Квартиры сдавали сразу под ключ с белоснежной мебелью на кухне, импортной сантехникой, хрустальными люстрами, потолочной лепниной, дорогим паркетом и бронзовыми светильниками. Но при этом отделка и мебель были одинаковыми во всех квартирах. Передвигать или менять их жильцам запрещали. А местоположение элементов интерьера определялось не столько удобством для проживающих, сколько удобством для прослушивания.</p>
        <p>В конце 2016 года жилой дом на Котельнической набережной отреставрировали впервые после строительства.</p>`,
        pictures: [
            {
              image: kotelnicheskayaOne,
              caption: ""
            },
            {
              image: kotelnicheskayaTwo,
              caption: ""
            },
            {
              image: kotelnicheskayaThree,
              caption: ""
            },
            {
                image: kotelnicheskayaFour,
                caption: ""
            },
        ],
        distinctives: [],
        statistics:{
            photo: 28,
            map: 16,
            quetion: 14,
            fact: 'Жилой дом на Котельнической набережной чаще других становился местом съемок'
        }

    },
    mid: {
        name: 'Министерство иностранных дел РФ',
        adress: 'г.Москва, Смоленско-Сенная площадь, 32/34 ',
        coordinates: [55.74613380125128,37.58435218300414],
        description: {
            yearsOfBuilding: '1948—1953',
            architect: 'В.Гельфрейх, М. Минкус',
            height: '172 м (27 этажа)',
            type: 'В здании находится Министерство иностранных дел РФ'
        },
        fullDescription: `<p>Здание Министерства иностранных дел — одна из семи построенных «сталинских высоток».</p>
        <p>О том, что одна из «семи сталинских сестер» будет отдана под нужды МИД СССР было известно еще на стадии проектирования. Оно проходило в несколько этапов: сперва архитекторам предложить создать три эскиза будущего небоскреба, затем два из них одобрили. Позднее один из проектов был утвержден и награжден Сталинской премией по архитектуре.</p>
        <p>Архитекторы Здания МИД — Владимир Гельфрейх и Михаил Минкус — предложили оригинальное решение: строить высотку сверху вниз. За 110 дней был полностью собран каркас, а затем рабочие стали заливать его бетоном, начиная с крыши и продвигаясь к фундаменту.</p>
        <p>Здание МИД СССР было построено в период с 1948-го по 1953-й годы. Итогом пятилетней работы стала башня в 27 этажей. Как и другие «сталинские высотки», Здание МИД состоит из центрального и боковых корпусов меньшей этажности. В 50-х годах высотка на Смоленской-Сенной площади была самым высокотехнологичным зданием, даже среди «семи сестер». В доме было установлено 28 лифтов и 4 эскалатора. Площадь всех помещений достигала 65 000 кв. метров</p>`,
        pictures: [
            {
              image: midOne,
              caption: ""
            },
            {
              image: midTwo,
              caption: ""
            },
            {
              image: midThree,
              caption: ""
            },
            {
                image: midFour,
                caption: ""
            },
        ],
        distinctives: [`В процессе строительства здание МИД на Смоленской выросло на 11 этажей. Тогда же оно обзавелось шпилем, которого не было в первоначальном проекте.
        После смерти Сталина архитектор Минкус, строивший здание МИДа, потребовал от Хрущева убрать шпиль, которого не было в оригинальном проекте. По легенде, Хрущев отказался, посчитав, что шпиль должен стать «памятником великой глупости товарища Сталина».`,
        `В здании МИД работают 42 департамента.`,
        `Штат сотрудников включает более 3 000 человек.`],
        statistics:{
            photo: 27,
            map: 23,
            quetion: 16,
            fact: `МИД'у шпиль достраивали уже после строительства самой высотки`
        }

    },
    ukr: {
        name: 'Гостиница «Украина»',
        adress: 'г.Москва, Смоленско-Сенная площадь, 32/34 ',
        coordinates: [55.75158074365076,37.56618855458621],
        description: {
            yearsOfBuilding: '1953—1957',
            architect: 'А. Г. Мордвинов при участии В. К. Олтаржевского, В. Г. Калиша, инженера П. А. Красильникова',
            height: '206 м (34 этажа)',
            type: 'В здании располагается гостиница'
        },
        fullDescription: `<p>Гостиница «Украина» сети «Рэдиссон Коллекшн» — высотный дом, седьмая и последняя из построенных сталинских высоток в Москве на Кутузовском проспекте в 1953—1957 годах по проекту архитекторов Аркадия Мордвинова, Вячеслава Олтаржевского и главного конструктора Павла Красильникова.</p>
        <p>Здание, выполненное в стиле сталинский ампир, состоит из трёх корпусов. Центральный из них состоит из 34 этажей, его высота составляет 206 метров (включая 73-метровый шпиль). В боковых корпусах дома находятся 250 квартир, которые, предположительно, появились по распоряжению Никиты Хрущёва.</p>
        <p>Здание было приватизировано в 2005 году, с 2007 по 2010 в нём шла реконструкция, после которой открылась гостиница «Рэдиссон Ройал, Москва» — на тот момент самая престижная в городе.</p>
        <p>Примерно в 2 км от здания находится деловой комплекс Москва-Сити, а прямо напротив (на Краснопресненской набережной) возвышается Дом Правительства.</p>
        <p>Сегодня в бывшей гостинице «Украина» располагается престижный отель сети «Рэдиссон Коллекшн», несколько ресторанов и баров, магазины, фитнес-центр.</p>`,
        pictures: [
            {
              image: ukrOne,
              caption: ""
            },
            {
              image: ukrTwo,
              caption: ""
            },
            {
              image: ukrThree,
              caption: ""
            },
            {
                image: ukrFour,
                caption: ""
            },
        ],
        distinctives: [`Во время строительства гостиницы «Украина» использовались насосы для откачки грунтовых вод. Из-за близости к реке это делалось постоянно.`,
        `В 1954 году Хрущев подарил Крым Украине в честь 300-летия со дня присоединения Украины к России. В честь этого события и был назван отель.`,
        'В момент строительства «Украина» являлась самой высокой гостиницей мира. Сейчас же это самая высокая гостиница Европы.'],
        statistics:{
            photo: 22,
            map: 15,
            quetion: 30,
            fact: `гостиница "Украина" получила такое в честь 300-лети воссоединения России и Украины`
        }

    },
    kudrinskaya: {
        name: 'Жилой дом на Кудринской площади',
        adress: 'г.Москва, Кудринская площадь, 1 ',
        coordinates: [55.759118652072864,37.58096187080932],
        description: {
            yearsOfBuilding: '1948—1954',
            architect: 'М. В. Посохин, А. А. Мндоянц и конструктор М. Н. Вохомского',
            height: '156 м (24 этажа)',
            type: 'В здании находится жилой дом'
        },
        fullDescription: `<p>Жилой дом на Кудринской площади- одна из семи построенных «сталинских высоток». В исторической литературе часто используют определение «высотка на Восстания», топоним связан с бывшим названием Кудринской площади. Небоскрёб отличался уникальными для советского жилого домостроения решениями: наличием подземной парковки, отделения для детских колясок на первом этаже и современной кухонной техникой.</p>
        <p>Технические этажи боковых корпусов были впоследствии модернизированы и превращены в жилые (на них можно попасть по лестнице, поднявшись из подъезда, либо по открытым переходам из центральной башни). Здание венчает пятиконечная звезда.</p>
        <p>Основная часть здания включает в себя три больших подъезда (по одному на каждый из корпусов) и большое количество малых, отличающихся планировкой. Малые подъезды оснащены одним лифтом, обладают небольшим количеством этажей (не более 12), имеют по 1—4 квартиры на этаж.</p>`,
        pictures: [
            {
              image: kudrinskayaOne,
              caption: ""
            },
            {
              image: kudrinskayaTwo,
              caption: ""
            },
            {
              image: kudrinskayaThree,
              caption: ""
            },
            {
                image: kudrinskayaFour,
                caption: ""
            },
        ],
        distinctives: [`Дом на Кудринской площади иногда называют «домом авиаторов».`,
        `Ходят легенды о правительственных бункерах, расположенных под высотками. На самом деле бункеров не было, были бомбоубежища. Одно из них, под зданием на Кудринской площади, площадью больше самой многоэтажки.`,
        'Подвалы здания стыкуются с системой подземных сооружений, в частности, с бомбоубежищем, выходящим далеко за пределы надземной части здания.',
        'Часть цоколя была переоборудована под казино, прекратившее работу в 2004 году. В настоящее время на его месте размещается боулинг-клуб.'],
        statistics:{
            photo: 19,
            map: 20,
            quetion: 16,
            fact: `часть цоколя Дома на Кудринской площади была переоборудована под казино, а после закрытия игорных заведений – в боулинг клуб`
        }

    },
    vorota: {
        name: 'Административно-жилое здание возле «Красных ворот»',
        adress: 'г.Москва, ул Спасская, 21',
        coordinates: [55.76946832862816,37.649122166295776],
        description: {
            yearsOfBuilding: '1947—1953',
            architect: 'А.Душкин, Б.Мезенцев, В.Абрамов',
            height: '138 м (24 этажа)',
            type: 'В здании располагается корпорация «Трансстрой», страховая компания «Гефест» и жилые квартиры'
        },
        fullDescription: `<p>Административно-жилое здание на Лермонтовской площади — одна из семи реализованных сталинских высоток. Центральный корпус предназначался для размещения правительственных учреждений, а в боковых были устроены 276 квартир: от двух- до пятикомнатных, причём в пятикомнатных рядом с кухнями существовали небольшие комнатки «для домработницы». Особенностью высотки стало размещение в ней наземного вестибюля станции метро. Во дворе дома действует ресторан, пристыкованный к центральному корпусу; в левом крыле здания расположен детский сад.</p>
        <p>По данным 2010-х годов, офисы в центральном корпусе занимали административные и профсоюзные организации, корпорации, банк. Основной объём башни занимает корпорация Трансстрой. На 2015 год в доме проживала внучка архитектора Наталья Душкина. Периодически она проводила экскурсии по высотке.</p>`,
        pictures: [
            {
              image: vorotaOne,
              caption: ""
            },
            {
              image: vorotaTwo,
              caption: ""
            },
            {
              image: vorotaThree,
              caption: ""
            },
            {
                image: vorotaFour,
                caption: ""
            },
        ],
        distinctives: [`Высотное здание на площади Красных Ворот возводилось под наклоном, так как его часть нависала над котлованом, который вырыли для строительства вестибюля метро. Грунт пришлось заморозить на глубину 27 метров, чтобы сохранить наклон. По окончании работ почва оттаяла, дав высотке принять вертикальное положение.`,
        `Жильцы говорят, что из бомбоубежищ этого здания есть потайные подземные ходы к неким секретным правительственным объектам.`],
        statistics:{
            photo: 21,
            map: 21,
            quetion: 21,
            fact: `в советский период в Высотном здании на площади Красных Ворот находилось Министерство транспортного строительства`
        }

    },
    leningradksya: {
        name: 'Гостиница «Ленинградская»',
        adress: 'г.Москва, ул Каланчевская, 21/40',
        coordinates: [55.76946832862816,37.649122166295776],
        description: {
            yearsOfBuilding: '1949—1954',
            architect: 'Л.Поляков, А.Борецкий',
            height: '138 м (17 этажа)',
            type: 'В здании располагается гостиница'
        },
        fullDescription: `<p>Гостиница «Ленинградская»— высотный дом, построенный в Москве на Комсомольской площади в 1949—1954 годах. Гостиница была открыта для посетителей 1 ноября 1953 года. Самая низкая из семи сталинских высоток — её шпиль достигает отметки 139 м. Проект здания разработали архитекторы Леонид Поляков и Александр Борецкий. Изначально в гостинице существовало 349 номеров: от однокроватных площадью 12 м² до трёхкомнатных люксов. С 2008 года гостиница действует под именем Hilton Moscow Leningradskaya.</p>
        <p>Внушительная башня «Ленинградской» возвышается на Комсомольской площади, рядом с тремя вокзалами — Ленинградским, Ярославским и Казанским. Несколько лет назад гостиница была приобретена владельцем самой известной в мире сети отелей Hilton, после чего ее здание было подвергнуто серьезному капитальному ремонту.</p>`,
        pictures: [
            {
              image: leningradksyaOne,
              caption: ""
            },
            {
              image: leningradksyaTwo,
              caption: ""
            },
            {
              image: leningradksyaThree,
              caption: ""
            },
            {
                image: leningradksyaFour,
                caption: ""
            },
        ],
        distinctives: [`Гостиница «Ленинградская» — самая низкая из «семи сестер». Но небольшую высоту относительно «родственников» полностью компенсирует ее роскошнейший интерьер в стиле московского барокко.`,
        `При закладке гостиницы «Ленинградская» строители наткнулись на «плывун» на глубине 8,5 метров. Для безопасного строительства рабочим пришлось забивать огромные сваи по периметру всего фундамента.`],
        statistics:{
            photo: 22,
            map: 22,
            quetion: 16,
            fact: `гостиница Ленинградская является самой низкой из своих сестер`
        }

    }
}