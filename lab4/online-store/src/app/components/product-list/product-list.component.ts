import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'Apple iPhone 14',
            description: 'Latest iPhone with amazing camera and speed.',
            price: 500000,
            rating: 4.8,
            image: 'https://cdn.new-brz.net/app/public/models/MPVX3SX-A/large/w/221108170033071455.webp',
            images: [
                'https://cdn.new-brz.net/app/public/models/MPVX3SX-A/large/w/221108170033071455.webp',
                'https://cdn.new-brz.net/app/public/models/MPVX3SX-A/large/w/221108170033146316.webp',
                'https://cdn.new-brz.net/app/public/models/MPVX3SX-A/large/w/221108170033216318.webp'
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 2,
            name: 'Samsung Galaxy S23',
            description: 'Powerful Android phone with stunning display.',
            price: 420000,
            rating: 4.6,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853087.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853088.jpg?format=preview-large'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-sirenevyi-108915896/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 3,
            name: 'Xiaomi Redmi Note 12',
            description: 'Affordable smartphone with great battery life.',
            price: 95000,
            rating: 4.4,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214849.png?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214850.png?format=preview-large'
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-chernyi-134217937/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 4,
            name: 'Apple MacBook Air M2',
            description: 'Lightweight laptop with powerful M2 chip.',
            price: 750000,
            rating: 4.9,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711029.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711030.jpg?format=preview-large'
            ],
            link: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=preview-large',
        },
        {
            id: 5,
            name: 'Samsung QLED TV 55"',
            description: 'High-definition smart TV with QLED technology.',
            price: 350000,
            rating: 4.7,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690520.jpeg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690520.jpeg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690521.jpeg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690522.jpeg?format=preview-large'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-qled-qe55ls03fauxce-140-sm-chernyi-145890835/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 6,
            name: 'Sony WH-1000XM5',
            description: 'Noise-canceling wireless headphones with great sound.',
            price: 140000,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306847.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306848.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 7,
            name: 'Apple iPad Air 5',
            description: 'Tablet with powerful A15 chip and lightweight design.',
            price: 280000,
            rating: 4.7,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134130.png?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134131.png?format=preview-large'
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 8,
            name: 'Nintendo Switch OLED',
            description: 'Portable gaming console with OLED screen.',
            price: 200000,
            rating: 4.6,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=preview-large',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188767.jpg?format=preview-large',
                'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188768.jpg?format=preview-large'
            ],
            link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 9,
            name: 'HP Envy 13 Laptop',
            description: 'Slim and lightweight laptop for productivity.',
            price: 280000,
            rating: 4.5,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h18/84480362872862.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h10/h18/84480362872862.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h10/h18/84480362872863.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h10/h18/84480362872864.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/hp-envy-x360-13-3-16-gb-ssd-512-gb-win-11-13-bf0026ci-809p4ea-114483216/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        },
        {
            id: 10,
            name: 'Canon EOS R10',
            description: 'Mirrorless camera with excellent autofocus and video.',
            price: 520000,
            rating: 4.8,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302559.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302560.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/canon-eos-r10-kit-18-45mm-is-stm-106795757/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1OhYnunb7dsqi0aQMybZZZCx6laiKSSTUowoOriYrcINZ-1ch86vhxoCowoQAvD_BwE',
        }
    ];
}