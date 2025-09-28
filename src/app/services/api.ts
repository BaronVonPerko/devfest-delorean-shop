import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getShopItems(): Observable<Item[]> {
    return of([
      {
        id: 1,
        name: 'Lightning Rod Assembly',
        price: 2500,
        image: 'lightning-rod-assembly.png',
        description: 'Essential component for harnessing 1.21 gigawatts of power from lightning strikes. Features Doc Brown\'s patented high-conductivity design. Perfect for when you\'re stuck in 1955 without plutonium!',
        alt: 'A sleek metal lightning rod with Doc Brown\'s custom conductor hookups for channeling lightning directly to the DeLorean',
        isNew: false,
      },
      {
        id: 2,
        name: 'Flying Conversion Kit',
        price: 10000,
        image: 'flying-kit.png',
        description: 'Transform your DeLorean into a hover-capable vehicle! Includes hover conversion, anti-gravity propulsion system, and automatic altitude adjustment. "Roads? Where we\'re going, we don\'t need roads."',
        alt: 'A futuristic hover conversion kit with fold-out wings and blue anti-gravity thrusters for your DeLorean',
        isNew: false,
      },
      {
        id: 3,
        name: 'Flux Capacitor',
        price: 4500,
        image: 'flux-capacitor.png',
        description: 'The heart of temporal displacement! This Y-shaped marvel makes time travel possible by harnessing the power of flux compression. Warning: Requires 1.21 gigawatts of power to function properly.',
        alt: 'The iconic Y-shaped Flux Capacitor with glowing blue light tubes that makes time travel possible',
        isNew: true,
      },
      {
        id: 4,
        name: 'Mr. Fusion',
        price: 2750,
        image: 'mr-fusion.png',
        description: 'Home Energy Reactor that converts household waste into power for the flux capacitor. Finally, a way to power your time machine with banana peels and beer cans! Future upgrade from 2015.',
        alt: 'The compact Mr. Fusion Home Energy Reactor that mounts on the DeLorean, featuring a flip-top lid for inserting waste materials',
        isNew: false,
      },
      {
        id: 5,
        name: 'Case of Plutonium',
        price: 22000,
        image: 'plutonium-case.png',
        description: 'Military-grade plutonium in a secure carrying case. Powers one trip through time. Warning: Extremely radioactive. Not available from Libyan nationalists anymore!',
        alt: 'A hazard-marked yellow case containing radioactive plutonium rods with the radiation symbol prominently displayed',
        isNew: true,
      }
    ]).pipe(
      delay(3000)
    )
  }
}
