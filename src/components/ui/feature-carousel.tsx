import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import cleaningDetail from "@/assets/anabiya-cleaning-detail.jpg";
import bedroom from "@/assets/anabiya-bedroom.jpg";
import hero from "@/assets/anabiya-hero.jpg";
import { Button } from "@/components/ui/button";

const features = [
  { image: hero, alt: "Professional mattress cleaning in a luxury bedroom", title: "Care, down to the last thread.", note: "Professional mattress cleaning" },
  { image: cleaningDetail, alt: "Close-up of mattress cleaning", title: "A considered approach to clean.", note: "Detailed fabric care" },
  { image: bedroom, alt: "Freshly made bed in an elegant Bahrain home", title: "A fresher feeling, at home.", note: "Mattress care in Bahrain" },
];

export function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const change = (direction: number) => setActive((current) => (current + direction + features.length) % features.length);
  const feature = features[active];

  return (
    <div className="feature-carousel relative overflow-hidden" aria-roledescription="carousel" aria-label="Mattress care image showcase">
      {features.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt={item.alt}
          width={index === 0 ? 1920 : 1200}
          height={index === 0 ? 1200 : 1504}
          loading="lazy"
          className={`feature-carousel__image ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
        />
      ))}
      <div className="feature-carousel__copy" aria-live="polite">
        <span className="eyebrow feature-carousel__eyebrow"><Sparkles aria-hidden="true" /> {feature.note}</span>
        <p>{feature.title}</p>
      </div>
      <div className="feature-carousel__controls">
        <div className="feature-carousel__dots" aria-label={`Image ${active + 1} of ${features.length}`}>
          {features.map((item, index) => (
            <button key={item.note} type="button" aria-label={`Show image ${index + 1}`} aria-current={index === active ? "true" : undefined} className={`showcase-dot ${index === active ? "is-active" : ""}`} onClick={() => setActive(index)} />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="showcase-arrow" aria-label="Previous image" onClick={() => change(-1)}><ArrowLeft /></Button>
          <Button variant="outline" size="icon" className="showcase-arrow" aria-label="Next image" onClick={() => change(1)}><ArrowRight /></Button>
        </div>
      </div>
    </div>
  );
}