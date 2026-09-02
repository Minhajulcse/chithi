 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = Array.from({ length: 12 }, (_, i) => `/photos/fahmida-${String(i + 1).padStart(2, "0")}${i === 6 ? ".jpg" : ".jpg"}`);

const captions = [
  "তোমার সেই শান্ত হাসিটা… ❤️",
  "তুমি যেমন, ঠিক তেমনটাই সুন্দর।",
  "কিছু ছবি শুধু ছবি থাকে না, স্মৃতি হয়ে যায়।",
  "তোমাকে দেখলে মনটা একটু ভালো হয়ে যায়।",
  "তোমার সরলতাটাই তোমার সবচেয়ে সুন্দর দিকগুলোর একটা।",
  "হাসিখুশি থেকো—সবসময়। 🌷",
  "তোমার চোখে যেন আলাদা একটা শান্তি আছে।",
  "এই মুহূর্তটাও তোমার মতোই মায়াবী।",
  "তোমার হাসির কাছে অনেক কথাই হার মেনে যায়।",
  "নিজের মতো করে সুন্দর থেকো।",
  "তোমার প্রতিটা ভালো দিন যেন আরও ভালো হয়।",
  "শেষ ছবিটাও একটা ছোট্ট reminder—তুমি খুব special। ❤️",
];

const letterParagraphs = [
  "প্রিয় ফাহমিদা,",
  "আমার জীবনের সবচেয়ে সুন্দর আর স্নিগ্ধ অনুভূতির নাম তুমি। হয়তো প্রতিদিন বলা হয় না, কিন্তু আমার এই দু'চোখে দেখা পৃথিবীর সবচেয়ে অপরূপা মানুষটি হলে তুমি। তোমার ওই মিষ্টি হাসি, তোমার কথা বলার ধরন, আর তোমার ওই মায়াবী চোখ—সবকিছুই আমাকে মুগ্ধ করে রাখে।",
  "তোমার মতো এমন একটা চমৎকার মনের মানুষকে নিজের জীবনে পাওয়াটা আমার জন্য ভীষণ ভাগ্যের ব্যাপার। তুমি শুধু আমার খুব ভালো একজন বন্ধুই নও, তুমি আমার জীবনের এমন এক আশ্রয়, যা আমি সবসময় চেয়েছি। তুমি সত্যিই ভীষণ ভালো একটা মেয়ে ফাহমিদা, যার ভেতরের সৌন্দর্য তার বাইরের রূপকেও হার মানায়।",
  "আমার একটাই চাওয়া—তুমি সবসময় এমন হাসিখুশি থাকো। তোমার ওই সুন্দর মুখের হাসিটা যেন কোনোদিন ম্লান না হয়। জীবনে চলার পথে অনেক কিছুই আসবে, কিন্তু কখনো মন খারাপ করবে না, আর একদম কাঁদবে না। তোমার চোখে এক ফোঁটা জলও আমার সহ্য হয় না। তোমার যেকোনো পরিস্থিতিতে, ভালো কিংবা খারাপ সময়ে, আমি সবসময় তোমার হাতটা শক্ত করে ধরে রাখতে চাই।",
  "আমি চাই তুমি নিজেকে সবসময় অনেক স্ট্রং রাখো। জীবনের কোনো বাধাই যেন তোমাকে থামিয়ে দিতে না পারে। নিজের লক্ষ্যগুলো পূরণ করার জন্য খুব মন দিয়ে পড়াশোনা করবে। আমি জানি তুমি অনেক দূর যাবে, আর তোমার সেই স্বপ্ন পূরণের যাত্রায় আমি সবসময় তোমার সবচেয়ে বড় সাপোর্ট সিস্টেম হয়ে পাশে থাকতে চাই।",
  "খুব ভালো থেকো, আর এভাবেই আমার পৃথিবীর আলো হয়ে থেকো সারাজীবন।",
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="petals" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => <span key={i} style={{ "--i": i } as React.CSSProperties}>♥</span>)}
      </div>

      <section className={`hero ${opened ? "hero-opened" : ""}`}>
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="mini-label">A little something for you</div>
          <div className="heart-mark">♡</div>
          <p className="eyebrow">FOR THE GIRL WHO DESERVES A LITTLE EXTRA SMILE</p>
          <h1>Fahmida<span>,</span></h1>
          <p className="hero-sub">তোমার জন্য লেখা একটা ছোট্ট চিঠি…<br />কোনো বিশেষ দিন ছাড়াই। শুধু কারণ তুমি special।</p>

          <button className="open-btn" onClick={() => setOpened(true)}>
            <span>চিঠিটা খুলো</span>
            <span className="btn-heart">♥</span>
          </button>
          <p className="hint">একটু সময় নিয়ে পড়ো… 💌</p>
        </div>

        <div className="scroll-cue">↓</div>
      </section>

      <section className={`letter-section ${opened ? "visible" : ""}`} id="letter">
        <div className="section-kicker">A LETTER FOR YOU</div>
        <div className="letter-card">
          <div className="paper-decor top">✦</div>
          <div className="paper-decor bottom">✦</div>
          <div className="letter-date">just a random day · just a real feeling</div>
          <div className="letter-body">
            {letterParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "salutation" : ""}>{p}</p>
            ))}
            <div className="signature">
              <span>ইতি,</span>
              <strong>মিনহাজ</strong>
              <span className="signature-heart">♥</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker">A FEW LITTLE MEMORIES</div>
            <h2>তোমাকে একটু<br /><em>দেখতে ইচ্ছে হলো।</em></h2>
          </div>
          <p>প্রতিটা ছবিতে তোমার আলাদা একটা version—আর প্রত্যেকটাতেই তুমি সুন্দর।</p>
        </div>

        <div className="gallery-grid">
          {photos.map((src, i) => (
            <button
              className={`photo-card photo-${i + 1}`}
              key={src}
              onClick={() => setSelected(i)}
              aria-label={`Open photo ${i + 1}`}
            >
              <span className="photo-image-wrap">
                <Image src={src} alt={`Fahmida photo ${i + 1}`} fill sizes="(max-width: 700px) 50vw, 33vw" />
                <span className="photo-overlay" aria-hidden="true">
                  <b>↗</b>
                </span>
              </span>
              <span className="photo-caption">{captions[i]}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="wish-section">
        <div className="wish-card">
          <div className="wish-flower">✿</div>
          <div className="section-kicker">ONE LAST THING</div>
          <h2>হাসিখুশি থেকো,<br /><em>ফাহমিদা।</em></h2>
          <p>
            তোমার সামনে অনেক সুন্দর দিন অপেক্ষা করুক।<br />
            তোমার স্বপ্নগুলো একে একে সত্যি হোক।<br />
            আর তোমার মুখের এই হাসিটা যেন কখনো হারিয়ে না যায়।
          </p>
          <div className="wish-line">— with a little love, from Minhaj ❤️</div>
        </div>
      </section>

      <footer>
        <div className="footer-heart">♥</div>
        <p>Made with a lot of care, especially for Fahmida.</p>
        <small>© {new Date().getFullYear()} · Minhaj</small>
      </footer>

      {selected !== null && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="close-lightbox" onClick={() => setSelected(null)} aria-label="Close">×</button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[selected]} alt={`Fahmida photo ${selected + 1}`} fill sizes="90vw" />
          </div>
          <p>{captions[selected]}</p>
        </div>
      )}
    </main>
  );
}
