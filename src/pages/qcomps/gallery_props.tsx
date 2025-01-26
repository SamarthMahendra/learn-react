// src/pages/qcomps/gallery_props.tsx

import React from 'react';
import Image from 'next/image';
import {Scientist, GalleryProps} from '@/types/gallery'

const scientists: Scientist[] = [
    {
        name: 'Maria Skłodowska-Curie',
        imageId: 'https://i.imgur.com/szV5sdGs.jpg',
        profession: 'physicist and chemist',
        awards: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discovery: 'polonium (element)',
    },
    {
        name: 'Katsuko Saruhashi',
        imageId: 'https://i.imgur.com/YfeOqp2s.jpg',
        profession: 'geochemist',
        awards: '2 (Miyake Prize for geochemistry, Tanaka Prize)',
        discovery: 'a method for measuring carbon dioxide in seawater',
    },
];

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            {scientists.map((scientist) => (
                <Profile key={scientist.name} scientist={scientist} size={70} />
            ))}
        </div>
    );
}

function Profile({ scientist, size = 70 }: GalleryProps) {
    return (
        <section className="profile">
            <h2>{scientist.name}</h2>
            <Image
                src={scientist.imageId}
                alt={scientist.name}
                width={size}
                height={size}
                priority
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {scientist.profession}
                </li>
                <li>
                    <b>Awards: </b>
                    {scientist.awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {scientist.discovery}
                </li>
            </ul>
        </section>
    );
}
