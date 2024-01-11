import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-globe-animation',
  templateUrl: './globe-animation.component.html',
  styleUrls: ['./globe-animation.component.scss']
})
export class GlobeAnimationComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }
  animations: { animation: string, backgroundColor: string,  animationDelay: string;}[] = [];
  totalParticles = 1000;
  orbSize = 200;
  time = 25;

  ngOnInit() {
    for (let i = 1; i <= this.totalParticles; i++) {
      let z = Math.random() * 360;
      let y = Math.random() * 360;
      let hue = ((40 / this.totalParticles) * i + 210) % 360;

      let style = this.document.createElement('style');
      style.textContent =             `
      @keyframes orbit${i} {
          20% { opacity: 1; }
          30% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${this.orbSize}px) rotateZ(${z}deg); }
          80% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${this.orbSize}px) rotateZ(${z}deg); opacity: 1; }
          100% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${
        this.orbSize * 3
      }px) rotateZ(${z}deg); }
      }
  `;
      this.document.head.appendChild(style);

      this.animations.push({
        animation: `orbit${i} ${this.time}s infinite`,
        backgroundColor: `hsla(${hue}, 100%, 50%, 1)`,
        animationDelay: `${i * 0.01}s`
      });
    }
  }
}
