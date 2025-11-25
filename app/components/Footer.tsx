'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-300 py-8 px-4 sm:px-6 lg:px-8 pb-40">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-gray-700 pb-8 mb-8">
          <h3 className="text-white font-bold mb-4">探偵事務所 Lupin</h3>
          <div className="space-y-2 text-sm">
            <p>探偵業届出番号 第90250001号</p>
            <p>福岡県那珂川市今光2-85</p>
            <p>調査地域: 九州全域</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Lupin. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/commercial-law"
              className="hover:text-white transition"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
