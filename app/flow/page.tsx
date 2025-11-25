'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

// アニメーション variants
const sectionVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Flow() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <section
        className="bg-no-repeat bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/flowBackground.svg')",
          height: '100vh',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            調査の流れ
          </h1>
          <p className="text-xl text-white">
            ご相談から報告書納品まで、5つのステップ
          </p>
        </div>
      </section>

      {/* 調査の流れ */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          調査の流れ
        </h2>
        <p className="text-lg text-gray-900 mb-10 drop-shadow-sm text-center">
          <strong>
            「不安な気持ちに寄り添いながら、
            <br className="block sm:hidden" />
            一緒に最適な一歩を見つけていきます」
          </strong>
          <br />
          <br />
          初めてのご相談は、
          <br className="block sm:hidden" />
          誰でも不安なものです。
          <br />
          無理な案内や押しつけは一切せず、
          <br />
          お話をしっかりと伺いながら、
          <br className="block sm:hidden" />
          状況に合った調査方法をご提案します。
          <br />
          <br />
          ご相談から報告までの流れを
          <br className="block sm:hidden" />
          丁寧にサポートし、
          <br />
          小さな不安もひとつひとつ解消できるよう
          <br className="block sm:hidden" />
          寄り添い続けます。
          <br />
          あなたが安心して前へ進めるよう、
          <br className="block sm:hidden" />
          私たちが力になります。
        </p>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: 1,
              title: '無料相談',
              description:
                '電話、メール、LINEなど、お客様の話しやすい方法でお問い合わせください。お客様に寄り添って丁寧にご対応させて頂きます。',
            },
            {
              step: 2,
              title: '面談',
              description:
                '詳しく状況等を把握するため、面談を行います。相談員は、調査を進行していく上での重要なパートナーとなります。お客様自身で相談員や探偵事務所が合っているのかをご判断して頂きます。気になる所や分からない所は遠慮なくお聞き下さい。',
            },
            {
              step: 3,
              title: '契約',
              description:
                'お客様の状況に合った調査方法をご提案後、お見積りをさせて頂きます。ご納得頂けましたら契約書を交わす運びとなります。',
            },
            {
              step: 4,
              title: '調査',
              description:
                'お客様と協議した日程にて調査を行います。調査中の進展状況はお客様へご報告致します。その後、お客様との打ち合わせと調査を繰り返し、調査のプロが調査の成功を目指します。',
            },
            {
              step: 5,
              title: '報告',
              description:
                '調査結果を当日中もしくは翌日までにご報告。その後、報告書を作成しお客様へ提出します。',
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              variants={itemVariant}
            >
              {/* アイコン + タイトルを横並び */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold text-lg">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* 説明文（下に配置） */}
              <p className="text-gray-700 whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 詳細リンク */}
        <motion.div className="mt-12 text-center" variants={itemVariant}>
          <Link
            href="/contact"
            className="inline-block text-red-600 hover:text-red-700 font-bold"
          >
            お問い合わせはこちら →
          </Link>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
