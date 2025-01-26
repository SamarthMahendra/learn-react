// src/pages/qcomps/gallery_props.tsx
import React from 'react';
import { ProfileProps } from "@/types/profile";
import Image from "next/image";

export default function Gallery() {
  return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
            name="Maria Skłodowska-Curie"
            imgSrc="https://i.imgur.com/szV5sdGs.jpg"
            altText="Maria Skłodowska-Curie"
            profession="physicist and chemist"
            awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discovery="polonium (element)"
        />
        <Profile
            name="Katsuko Saruhashi"
            imgSrc="https://i.imgur.com/YfeOqp2s.jpg"
            altText="Katsuko Saruhashi"
            profession="geochemist"
            awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
            discovery="a method for measuring carbon dioxide in seawater"
        />
      </div>
  );
}

function Profile({ name, imgSrc, altText, profession, awards, discovery }: ProfileProps) {
  return (
      <section className="profile">
        <h2>{name}</h2>
        <Image
            src={imgSrc}
            alt={altText}
            width={70}
            height={70}
            priority
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
  );
}
