const images = {};
images.starters = require('../assets/img/empanada.jpg');
images.brasa = require('../assets/img/parrillada.jpg');


export const ENG = [
        {
            title:  'Starters',
            img: images.starters,
            options: [
                {
                    name: 'Traditional Beef Empanada',
                    desc: 'Argentinian Beef, onion and olives',
                    price: '3.00',
                    allergenics: [2,3,1]
                },{
                    name: 'Chicken Empanada',
                    desc: 'Chicken, pepper and onion',
                    price: '2.50',
                    allergenics: [2,3,1]
                },{
                    name: 'Capresse Empanada',
                    desc: 'Cheese, tomato and basil',
                    price: '2.00',
                    allergenics: [2,1]
                },{
                    name: 'Provoleta',
                    desc: 'Grilled Provoleta Cheese, oregano and exta virgin olive oil',
                    price: '6.00',
                    allergenics: [1]
                },{
                    name: 'Chorizo',
                    desc: 'Traditional Argentinian recipe pork sausage',
                    price: '3.50',
                    allergenics: []
                },{
                    name: 'Black Pudding',
                    desc: 'Spanish black pudding, soft and moist with Chimichurri',
                    price: '3.50',
                    allergenics: [7]
                },{
                    name: 'Mollejas',
                    desc: null,
                    price: '8.00',
                    allergenics: []
                }
            ]
        },{
            title: 'Sandwiches',
            img: 'https://www.metropoliabierta.com/uploads/s1/11/57/71/Bocata%20Roast%20beef%205.jpg',
            options: [
                {
                    name: 'Chicken milanese, tomato, lettuce',
                    desc: null,
                    price: '5.50',
                    allergenics: [2,3]
                },{
                    name: 'Serrano ham.',
                    desc: null,
                    price: '4.50',
                    allergenics: [2]
                },{
                    name: 'Pork loin, red peppers and red onion',
                    desc: null,
                    price: '4.50',
                    allergenics: [2]
                },{
                    name: 'Bacon, Cheese, tomato and lettuce',
                    desc: null,
                    price: '4.50',
                    allergenics: [2,1]
                },{
                    name: 'Chese, tomato and basil',
                    desc: null,
                    price: '4.00',
                    allergenics: [2,1]
                },{
                    name: 'beef tenderloin, onion, peppers, lettuce and tomato',
                    desc: null,
                    price: '5.50',
                    allergenics: [2]
                }
            ]
        },{
            title: 'A la Brasa',
            img: images.brasa,
            body: "Every one of our Specials 'A la brasa' comes with Fries, Marinated Aubergines & Peppers, Chimichurri and Criolla Sauce",
            options: [
                {
                    name: 'Mix Grill (price per person, two people minimum)',
                    desc: 'Steak, chorizo, Black Pudding, Chicken leg, Secret (Pork), Short Ribs and skirt Steak.',
                    price: '18.95',
                    allergenics: []
                },{
                    name: 'Rib Eye (300gr.)',//2
                    desc: null,
                    price: '17.95',
                    allergenics: []
                },{
                    name: 'Sirloin Steak (290gr.)',//3
                    desc: null,
                    price: '15.00',
                    allergenics: []
                },{
                    name: 'Short ribs', //5
                    desc: null,
                    price: '16.95',
                    allergenics: []
                },{
                    name: 'skirt Steak',//6
                    desc: null,
                    price: '15.95',
                    allergenics: []
                },{
                    name: 'Sweetbreads',//7
                    desc: null,
                    price: '12.75',
                    allergenics: []
                },{
                    name: 'Grilled Chicken Breast',//8
                    desc: null,
                    price: '9.95',
                    allergenics: []
                },{
                    name: 'Chorizo (2 sausages)', //9
                    desc: null,
                    price: '10.75',
                    allergenics: []
                }
            ]
        },{
            title: 'Kids',
            img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-margarita-1080x671.jpg',
            options: [
                {
                    name: 'Burguer & Chips (4 oz.)',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,3,4]
                },{
                    name: 'Chicken milanese & Chips',
                    desc: 'Tenderised and breadcrumbed chicken breast and fries',
                    price: '4.90',
                    allergenics: []
                },{
                    name: 'Mini pizza margherita',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,2]
                },{
                    name: 'Spaguetti Bolognese',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,2,3]
                }
            ]
        },{
            title: 'Salads & Side Dishes',
            img: 'https://saborgourmet.com/wp-content/uploads/ensaladas-trucos-y-recomendaciones-frutos-secos-istock.jpg',
            options: [
                {
                    name: 'Spanish alioli & bread', //1
                    desc: null,
                    price: '1.50',
                    allergenics: [1,2]
                },{
                    name: 'Mix Salad( small portion )', //2
                    desc: 'Lettuce, tomato and carrot',
                    price: '3.00',
                    allergenics: []
                },{
                   name: 'Marinated Peppers',//3
                   desc: null,
                   price: '3.00',
                   allergenics: []
                },{
                    name: 'Marinated Aubergines', //4
                    desc: null,
                    price: '3.00',
                    allergenics: []
                },{
                    name: 'French Fries', //5
                    desc: null,
                    price: '2.50',
                    allergenics: []
                },{
                    name: 'French Fries (small portion)', //6
                    desc: null,
                    price: '1.00',
                    allergenics: []
                },{
                    name: 'Spicy potatoes', //7
                    desc: null,
                    price: '4.50',
                    allergenics: []
                },{
                    name: 'Sautéed vegetables',//8
                    desc: null,
                    price: '4.00',
                    allergenics: []
                },{
                    name: 'Criolla Salad',//9
                    desc: 'Tomato, red onion, orégano and garlic',
                    price: '5.00',
                    allergenics: []
                },{
                    name: 'Mix full Salad',//10
                    desc: 'Lettuce, sweetcorn, tomato, carrot, cucumber, egg and onion',
                    price: '9.75',
                    allergenics: [3]
                },{
                    name: 'Chicken Salad',//11
                    desc: 'Lettuce, chicken, crutons, anchoive´s cream y parmesan cheese',
                    price: '11.75',
                    allergenics: [1,2,6]
                },{
                    name: 'Tuna Salad', //12
                    desc: 'Lettuce, tuna, sweetcorn, tomato y eggs',
                    price: '10.75',
                    allergenics: [3,6]
                }
            ]
        },{
            title: 'Main Courses',
            img: 'https://plantd.co/wp-content/uploads/2020/02/Spaghetti-Bolognese.png',
            options: [
                {
                    name: 'Beef Burguer',
                    desc: 'Lettuce, tomato, red onion, cheese and French fries',
                    price: '6.50',
                    allergenics: [2,4]
                },{
                    name: 'The Special Burguer',
                    desc: 'Melted cheese, bacon, lettuce, tomato, onion, egg and French fries',
                    price: '8.50',
                    allergenics: [1,2,3,4]
                },{
                    name: 'Chicken Milanese',
                    desc: 'Tenderised & breadcrumbed chicken breast milanese served with fries and mix salad',
                    price: '8.95',
                    allergenics: [2,3]
                },{
                    name: 'Beef Milanese',
                    desc: 'Tenderised & breadcrumbed beef milanese served with fries and mix salad',
                    price: '10.95',
                    allergenics: [2,3]
                },{
                    name: 'Spaguetti Bolognese',
                    desc: null,
                    price: '8.95',
                    allergenics: [2]
                },{
                    name: 'Margherita Pizza',
                    desc: null,
                    price: '7.50',
                    allergenics: [2,3]
                }
            ]
        },{
            title: 'Desserts',
            img: 'https://granparrilladelplata.com/wp-content/uploads/2018/09/postre-parrilla.jpg',
            options: [
                {
                    name: 'Crepes with Dulce de Leche or Nutella',
                    desc: null,
                    price: '4.00',
                    allergenics: [1,2,3]
                },{
                    name: 'Crepes with apples and rum',
                    desc: null,
                    price: '4.50',
                    allergenics: [1,2,3,5]
                },{
                    name: 'Frigo',
                    desc: null,
                    price: null,
                    allergenics: []
                },{
                    name: 'Flan',
                    desc: 'Homemade cream caramel served with whipped cream and Dulce de Leche',
                    price: '4.00',
                    allergenics: [1,3]
                },{
                    name: 'Afogatto',
                    desc: 'Vanilla Ice Cream, espresso and homemade Argentinian style alfajor',
                    price:'4.50',
                    allergenics: [2,3]
                }
            ]
        }
    ]

export const ESP = [
        {
            title:  'Entrantes',
            img: images.starters,
            options: [
                {
                    name: 'Empanada de Carne',
                    desc: 'Rellena de carne vacuna, aceituna y cebolleta',
                    price: '3.00',
                    allergenics: [2,3,1]
                },{
                    name: 'Empanada de Pollo',
                    desc: 'Rellena de Pollo, pimiento y cebolleta',
                    price: '2.50',
                    allergenics: [2,3,1]
                },{
                    name: 'Empanada Caprese(V)',
                    desc: 'Rellena de albahaca, queso y tomate',
                    price: '2.00',
                    allergenics: [1,2]
                },{
                    name: 'Provoleta',
                    desc: null,
                    price: '6.00',
                    allergenics: [1]
                },{
                    name: 'Chorizo',
                    desc: null,
                    price: '3.50',
                    allergenics: []
                },{
                    name: 'Morcilla',
                    desc: null,
                    price: '3.50',
                    allergenics: [7]
                },{
                    name: 'Mollejas',
                    desc: null,
                    price: '8.00',
                    allergenics: []
                }
            ]
        },{
            title: 'Bocatas',
            img: 'https://www.metropoliabierta.com/uploads/s1/11/57/71/Bocata%20Roast%20beef%205.jpg',
            options: [
                {
                    name: 'Pollo rebozado, lechuga, tomate',
                    desc: null,
                    price: '5.50',
                    allergenics: [2,3]
                },{
                    name: 'Jamón Serrano.',
                    desc: null,
                    price: '4.50',
                    allergenics: [2]
                },{
                    name: 'Lomo de cerdo, cebolla roja y pimiento',
                    desc: null,
                    price: '4.50',
                    allergenics: [2]
                },{
                    name: 'Beicon, queso, tomate y lechuga',
                    desc: null,
                    price: '4.50',
                    allergenics: [2,1]
                },{
                    name: 'Queso, tomate y albahaca',
                    desc: null,
                    price: '4.00',
                    allergenics: [2,1]
                },{
                    name: 'Lomo vacuno, cebolla, pimiento, tomate, lechuga',
                    desc: null,
                    price: '5.50',
                    allergenics: [2]
                }
            ]
        },{
            title: 'A la Brasa',
            img: images.brasa,
            body: 'Nuestros principales a la brasa vienen acompañadas de patatas fritas, berenjena y pimientos a la vinagreta, chimichurri y salsa criolla',
            options: [
                {
                    name: 'Parrillada (Precio por persona,mínimo dos personas)',
                    desc: 'Entrecot, chorizo, morcilla, pollo, secreto, tira de asado y entraña.',
                    price: '18.95',
                    allergenics: []
                },{
                    name: 'Lomo Alto Argentino (300gr.)', //2
                    desc: null,
                    price: '17.95',
                    allergenics: []
                },{
                    name: 'Entrecot (290gr.)', //3
                    desc: null,
                    price: '15.00',
                    allergenics: []
                },{
                    name: 'Churrasco (tira de asado)', //5
                    desc: null,
                    price: '16.95',
                    allergenics: []
                },{
                    name: 'Entraña', //6
                    desc: null,
                    price: '15.95',
                    allergenics: []
                },{
                    name: 'Molleja', //7
                    desc: null,
                    price: '12.75',
                    allergenics: []
                },{
                    name: 'Pechuga de Pollo', //8
                    desc: null,
                    price: '9.95',
                    allergenics: []
                },{
                    name: 'Chorizo (2 por porción)',//9
                    desc: null,
                    price: '10.75',
                    allergenics: []
                },
            ]
        },{
            title: 'Niños',
            img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-margarita-1080x671.jpg',
            options: [
                {
                    name: 'Hamburguesa con patatas fritas (4 oz.)',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,2,4]
                },{
                    name: 'Milanesa de pollo con patatas fritas',
                    desc: null,
                    price: '4.90',
                    allergenics: []
                },{
                    name: 'Mini pizza margarita',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,2]
                },{
                    name: 'Spaguetti Bologñesa',
                    desc: null,
                    price: '4.90',
                    allergenics: [1,2,3]
                }
            ]
        },{
            title: 'Ensaladas & Guarniciones',
            img: 'https://saborgourmet.com/wp-content/uploads/ensaladas-trucos-y-recomendaciones-frutos-secos-istock.jpg',
            options: [
                {
                    name: 'Pan y alioli', //1
                    desc: null,
                    price: 1.50,
                    allergenics: [1,2]
                },{
                    name: 'Ensalada Mixta( pequeña )',//2
                    desc: 'Lechuga, tomate y zanahoria',
                    price: '3.00',
                    allergenics: []
                },{
                    name: 'Pimientos a la vinagreta',//3
                    desc: null,
                    price: '3.00' ,
                    allergenics: []
                },{
                    name: 'Berenjenas a la vinagreta',//4
                    desc: null,
                    price: '3.00',
                    allergenics: []
                },{
                    name: 'Patatas fritas', //5
                    desc: null,
                    price: '2.50',
                    allergenics: []
                },{
                    name: 'Patatas fritas (pequeña)', //6
                    desc: null,
                    price: '1.00',
                    allergenics: []
                },{
                    name: 'Patatas Bravas (con Patata Natural)', //6
                    desc: null,
                    price: '4.50',
                    allergenics: []
                },{
                    name: 'Vegetales a la plancha', //7
                    desc: null,
                    price: '4.00',
                    allergenics: []
                },{
                    name: 'Ensalada Criolla(V)', //8
                    desc: 'Tomate, cebolla roja, orégano y ajo',
                    price: '5.00',
                    allergenics: []
                },{
                    name: 'Ensalada Completa(V)', //9
                    desc: 'Lechuga, maíz, tomate, zanahoria, pepino, cebolla y huevo',
                    price: '9.75',
                    allergenics: [3]
                },{
                    name: 'Ensalada de pollo', //10
                    desc: 'Lechuga, pollo, crutones de pan, crema de anchoas y queso parmesano',
                    price: '11.75',
                    allergenics: [1,2,6]
                },{
                    name: 'Ensalada de Atún', //11
                    desc: 'Lechuga, atún, maíz, tomate y huevo',
                    price: '10.75',
                    allergenics: [3,6]
                }
            ]
        },{
            title: 'Principales',
            img: 'https://plantd.co/wp-content/uploads/2020/02/Spaghetti-Bolognese.png',
            options: [
                {
                    name: 'Hamburguesa de Ternera casera',
                    desc: 'Hamburguesa de vacuno con lechuga, tomate, cebolla roja, queso y huevo con patatas fritas',
                    price: '6.50',
                    allergenics: [2,4]
                },{
                    name: 'Hamburguesa de Ternera casera COMPLETA',
                    desc: 'Queso fundido, bacon, lechuga, tomate, cebolla roja y huevo con patataas fritas',
                    price: '8.50',
                    allergenics: [1,2,3,4]
                },{
                    name: 'Pollo empanado',
                    desc: 'Pechuga de pollo rebozada a la provenzal, acompañada de patatas fritas y ensalada mixta',
                    price: '8.95',
                    allergenics: [1,2]
                },{
                    name: 'Ternera empanada',
                    desc: 'Tapilla vacuna rebozada a la provenzal, acompañada de patatas fritas y ensalada mixta',
                    price: '10.95',
                    allergenics: [1,2]
                },{
                    name: 'Spaguetti Bologñesa',
                    desc: null,
                    price: '8.95',
                    allergenics: [2]
                },{
                    name: 'Pizza Margarita',
                    desc: null,
                    price: '7.50',
                    allergenics: [1,2]
                }
            ]
        },{
            title: 'Postres',
            img: 'https://granparrilladelplata.com/wp-content/uploads/2018/09/postre-parrilla.jpg',
            options: [
                {
                    name: 'Crepe de Dulce de Leche o Nutella',
                    desc: null,
                    price: '4.00',
                    allergenics: [1,2,3]
                },{
                    name: 'Crepe de Manzana flambeada al Ron',
                    desc: null,
                    price: '4.50',
                    allergenics: [1,2,3,5]
                },{
                    name: 'Frigo',
                    desc: null,
                    price: null,
                    allergenics: []
                },{
                    name: 'Flan de Huevo con Dulce de Leche y Crema',
                    desc: null,
                    price: '4.00',
                    allergenics: [1,3] 
                },{
                    name: 'Afogatto',
                    desc: 'Helado de vainilla, café solo, y mini alfajor de maicena con  Dulce de Leche',
                    price: '4.50',
                    allergenics: [2,3]
                }
            ]
        }
    ]
