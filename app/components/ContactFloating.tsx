'use client';

import { useEffect, useState } from 'react';

interface ContactFloatingProps {
  href?: string;
}

export default function ContactFloating({
  href = '/contact',
}: ContactFloatingProps) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setShow(true);
        // フェードイン用に少しだけ遅延
        setTimeout(() => setVisible(true), 50);
      } else {
        setVisible(false);
        setShow(false);
      }
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className={`contact-floating ${visible ? 'visible' : ''}`}>
        <img
          src="/charactor.svg"
          alt="キャラクター"
          className="contact-charactor"
        />

        <button
          onClick={() => (window.location.href = href)}
          className="contact-button"
        >
          <span>💬</span>
          無料相談はこちらから
        </button>
      </div>

      <style jsx>{`
        .contact-floating {
          position: fixed;
          bottom: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1000;

          /* フェードイン用 */
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;

          animation: floatY 2s ease-in-out infinite;
        }

        .contact-floating.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-charactor {
          position: absolute;
          top: -90px;
          right: -10px;
          width: 100px;
          height: 100px;
          z-index: 1001;
        }

        .contact-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #f43f5e;
          color: white;
          font-weight: bold;
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.2s;
        }

        .contact-button:hover {
          background-color: #e11d48;
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}
