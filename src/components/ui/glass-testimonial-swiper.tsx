import { useRef, useState, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const testimonialSlots = ["Review slot one", "Review slot two", "Review slot three"];

export function GlassTestimonialSwiper() {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const change = (direction: number) => setActive((current) => (current + direction + testimonialSlots.length) % testimonialSlots.length);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    dragStart.current = event.clientX;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 45) change(distance < 0 ? 1 : -1);
    dragStart.current = null;
  }

  return (
    <div className="testimonial-swiper" aria-label="Editable customer testimonial slots">
      <div className="testimonial-swiper__topline">
        <span className="eyebrow">Client notes</span>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="showcase-arrow" onClick={() => change(-1)} aria-label="Previous testimonial"><ArrowLeft /></Button>
          <Button variant="outline" size="icon" className="showcase-arrow" onClick={() => change(1)} aria-label="Next testimonial"><ArrowRight /></Button>
        </div>
      </div>
      <div className="testimonial-swiper__track" onPointerDown={startDrag} onPointerUp={endDrag} onPointerCancel={() => { dragStart.current = null; }}>
        {testimonialSlots.map((slot, index) => (
          <article key={slot} className={`testimonial-slot ${index === active ? "is-active" : ""}`} aria-hidden={index !== active}>
            <MessageCircle className="testimonial-slot__icon" aria-hidden="true" />
            <p className="testimonial-slot__label">{slot}</p>
            <label className="sr-only" htmlFor={`testimonial-${index}`}>Editable text for {slot}</label>
            <textarea id={`testimonial-${index}`} className="testimonial-slot__textarea" rows={3} placeholder="Add a real customer review here when you’re ready." />
            <span className="testimonial-slot__signature">ANABIYA HOMES · BAHRAIN</span>
          </article>
        ))}
      </div>
      <div className="testimonial-swiper__bottomline">
        <span> {String(active + 1).padStart(2, "0")} <span className="muted-separator">/</span> {String(testimonialSlots.length).padStart(2, "0")} </span>
        <div className="testimonial-swiper__dots" aria-label="Choose testimonial slot">
          {testimonialSlots.map((slot, index) => <button key={slot} className={`showcase-dot ${active === index ? "is-active" : ""}`} onClick={() => setActive(index)} aria-label={`Show ${slot}`} aria-current={active === index ? "true" : undefined} />)}
        </div>
        <span>Drag to explore</span>
      </div>
    </div>
  );
}