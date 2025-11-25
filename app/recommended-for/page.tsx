'use client';

import React from 'react';
import Link from 'next/link';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

export default function RecommendedFor() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <section
        className="bg-no-repeat bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/recomendBackground.svg')",
          height: '100vh',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            このようなお悩みは
            <br />
            お任せください
          </h1>
          <p className="text-xl text-white">相談内容をご紹介します</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            こんな場合はご相談ください
          </h2>
          <p className="text-lg text-gray-900 mb-10 drop-shadow-sm text-center">
            最近パートナーの行動に
            <br className="block sm:hidden" />
            「なんだかおかしい」
            <br className="block sm:hidden" />
            と感じることはありませんか？
            <br />
            <br />
            ・急に帰りが遅くなった
            <br />
            ・スマホを見せてくれなくなった
            <br />
            ・予定を言わないようになった
            <br />
            <br />
            そんな小さな違和感が続くと、
            <br className="block sm:hidden" />
            心が落ち着かなくなるものです。
            <br />
            <br />
            私たちは、そんなあなたの不安に
            <br className="block sm:hidden" />
            <strong>『寄り添いながら、真実を明らかにする』</strong>
            <br className="block sm:hidden" />
            お手伝いをしています。
            <br />
            <br />
            調査の結果が<strong>「白」</strong>でも<strong>「黒」</strong>でも
            <br className="block sm:hidden" />
            今の状況を知ることが
            <br />
            これからの人生を前に進めるための、
            <br className="block sm:hidden" />
            大切な一歩になります。
            <br />
            <br />
            また、離婚や慰謝料を考えている方には、
            <br className="block sm:hidden" />
            確かな証拠を残すことがとても重要です。
            <br />
            私たちは、裁判や話し合いで使える
            <br className="block sm:hidden" />
            <strong>『法的に有効な証拠』</strong>
            <br className="block sm:hidden" />
            をしっかりと押さえます。
            <br />
            <br />
            一方で「できるなら関係を修復したい」 という方もいらっしゃいます。
            <br />
            浮気調査は、別れのためだけでなく、{' '}
            <strong>『やり直す勇気を持つため』</strong>
            <br className="block sm:hidden" />
            の調査でもあるのです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '事実を知って気持ちを整理したい',
                items: [
                  'まず「浮気しているのかどうか」を確かめ心を落ち着かせたい方。',
                ],
              },
              {
                title: '離婚や慰謝料に備え証拠が欲しい',
                items: [
                  '裁判や協議の場で有利に進めるために確かな証拠を取得したい方。',
                ],
              },
              {
                title: 'もう一度やり直したい',
                items: [
                  '相手を信じるために今の現実をきちんと確かめたい方や浮気の再発を防ぎたい方。',
                ],
              },
            ].map((group, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-bold mb-6 text-gray-900">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start text-gray-700">
                      <span className="text-red-600 font-bold mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-white p-8 rounded-lg border-2 border-red-600 ">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              このようなお悩みは
              <br className="block sm:hidden" />
              お任せください
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lupinは様々な相談内容に対応してきた実績があります。秘密厳守はもちろんのこと、あなたの気持ちに寄り添い、最適な調査プランをご提案いたします。
            </p>
            <p className="text-gray-700 leading-relaxed">
              相談は何度でも無料です。まずはお気軽にご連絡ください。
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-200 text-lg"
            >
              無料相談をする
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
