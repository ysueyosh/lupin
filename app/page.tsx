'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import ContactFloating from './components/ContactFloating';
import {
  CheckCircle,
  AccessTime,
  School,
  AttachMoney,
  Lock,
  Support,
} from '@mui/icons-material';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavHeader />

      {/* Hero */}
      <motion.section
        id="home"
        className="relative h-screen w-full bg-gradient-to-b px-4 sm:px-6 lg:px-8 overflow-hidden"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 背景画像 */}
        <div className="absolute inset-0 bg-[url('/topBackgroundImage.svg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/20" />

        <div className="relative max-w-5xl mx-auto h-full flex flex-col justify-center text-center">
          <motion.div
            variants={itemVariant}
            className="flex justify-center text-center"
          >
            <img
              src="/lupin_logo_white.png"
              alt="Lupin Logo"
              className="h-60 sm:h-60 mb-2"
            />
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-6xl font-bold mb-6 text-white drop-shadow-md text-center"
            variants={itemVariant}
          >
            信頼できる調査で安心を
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-10 drop-shadow-sm"
            variants={itemVariant}
          >
            あなたの不安に寄り添い
            <br />
            確かな調査力で"真実"を見つけます
          </motion.p>
          <motion.div variants={itemVariant}>
            <motion.button
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-200 text-lg"
              variants={itemVariant}
            >
              <Link href="/contact">無料相談はこちらから</Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 背景画像 */}
        <div className="absolute inset-0 bg-[url('/aboutBackground.svg')] bg-cover bg-center bg-no-repeat pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="bg-white/70 p-8 sm:p-12 rounded-lg backdrop-blur-sm"
            variants={itemVariant}
          >
            {/* Lupinの強み 見出し */}
            <motion.h2
              className="text-4xl font-bold text-center mb-8 text-gray-900"
              variants={itemVariant}
            >
              Lupinの強み
            </motion.h2>

            {/* 強みカード */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4">
              {[
                { title: '相談が無料', icon: <CheckCircle fontSize="large" /> },
                {
                  title: '24時間365日対応',
                  icon: <AccessTime fontSize="large" />,
                },
                {
                  title: '臨機応変な高い調査力',
                  icon: <School fontSize="large" />,
                },
                {
                  title: '安心の料金プラン',
                  icon: <AttachMoney fontSize="large" />,
                },
                { title: '秘密厳守！', icon: <Lock fontSize="large" /> },
                {
                  title: 'アフターフォロー',
                  icon: <Support fontSize="large" />,
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="flex items-center p-6 rounded-xl bg-black text-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  variants={itemVariant}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-lg mr-4">{s.icon}</div>
                  <div className="text-lg font-semibold">{s.title}</div>
                </motion.div>
              ))}
            </div>
            <motion.div className="mt-8 text-center" variants={itemVariant}>
              <Link
                href="/strengths"
                className="inline-block text-red-600 hover:text-red-700 font-bold"
              >
                強みをもっと見る →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* こんな場合はご相談ください */}
      <motion.section
        className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariant}
          >
            このようなお悩みは
            <br className="block sm:hidden" />
            お任せください
          </motion.h2>

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
              <motion.div
                key={i}
                className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200"
                variants={itemVariant}
              >
                <h3 className="text-lg font-bold mb-6 text-gray-900">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start text-gray-700"
                      variants={itemVariant}
                    >
                      <span className="text-red-600 font-bold mr-3">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-12 text-center" variants={itemVariant}>
            <Link
              href="/recommended-for"
              className="inline-block text-red-600 hover:text-red-700 font-bold"
            >
              相談内容をもっと見る →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <img
        src="/siteBackground.svg"
        className="
      fixed inset-0
      w-full h-full
      object-cover
      -z-10
      pointer-events-none
    "
        alt=""
      />

      <div className="h-[200px] bg-transparent" />

      {/* 調査の流れ */}
      <motion.section
        className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariant}
          >
            調査の流れ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: '無料相談',
                description: `・LINE等から気軽に相談OK\n・不安やお悩みをお聞かせください\n・どんな小さなことでも大丈夫です`,
              },
              {
                step: 2,
                title: '面談',
                description: `・状況をゆっくり丁寧にお伺いします\n・最適な調査方法を一緒に考えます\n・相談員との相性も確認できます\n・小さなことでもご相談ください`,
              },
              {
                step: 3,
                title: '契約',
                description: `・お客様に合った調査プランをご提案\n・わかりやすく料金をご説明します\n・十分ご納得いただいた上でご契約へ`,
              },
              {
                step: 4,
                title: '調査',
                description: `・決めた日時で慎重に調査を実施\n・状況は随時ご報告します\n・打ち合わせを行いながら進行\n・プロが調査の成功を目指します`,
              },
              {
                step: 5,
                title: '報告',
                description: `・結果は当日中にわかりやすくご説明\n・後日、詳細な報告書をお渡しします\n・今後の方向性も共に検討します`,
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
          <motion.div className="mt-12 text-center" variants={itemVariant}>
            <Link
              href="/flow"
              className="inline-block text-red-600 hover:text-red-700 font-bold"
            >
              詳しい流れを見る →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 料金プラン */}
      <motion.section
        className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariant}
          >
            料金プラン
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'パック料金',
                price: '10万円〜',
                period: '/パッケージ',
                features: [
                  '調査員2名+車両1台',
                  '報告書・写真付き',
                  '相談サポート',
                ],
                highlight: true,
              },
              {
                title: '簡易調査',
                price: '1万円～',
                period: '/週',
                features: [
                  'GPS追跡のみ',
                  '週1回の位置情報報告',
                  '専門分析付き',
                ],
              },
              {
                title: '通常調査',
                price: '1万円〜',
                period: '/時間',
                features: [
                  '調査員1名～派遣',
                  '詳細な報告書付き',
                  'カスタマイズ対応',
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-lg border-2 transition ${
                  plan.highlight
                    ? 'border-red-600 bg-red-50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
                variants={itemVariant}
              >
                {plan.highlight && (
                  <>
                    <div className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded inline-block mb-4">
                      人気
                    </div>
                    <div className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded inline-block mb-4 ml-2">
                      お得
                    </div>
                  </>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-center text-gray-700"
                      variants={itemVariant}
                    >
                      <span className="text-red-600 font-bold mr-3">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full font-bold py-2 px-4 rounded-lg transition ${
                    plan.highlight
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                  variants={itemVariant}
                >
                  <Link href="/plan">詳しく見る</Link>
                </motion.button>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-12 text-center" variants={itemVariant}>
            <Link
              href="/plan"
              className="inline-block text-red-600 hover:text-red-700 font-bold"
            >
              料金の詳細を見る →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={itemVariant}
          >
            よくあるご質問
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                q: '調査中に連絡はありますか？',
                a: '調査中リアルタイムで報告させて頂きます。',
              },
              {
                q: '後から料金の請求はきますか？',
                a: 'ご依頼者様が契約時に決めた内容以外に調査を希望した場合に限り、追加の料金をご依頼者様へ確認を行った上で請求させて頂きます。ご依頼者様への確認を行わずに後から請求が来る事はありません。',
              },
              {
                q: '相談した内容が外部に漏れませんか？',
                a: 'どんな些細な内容も漏れることのないよう徹底した情報管理・社員育成を元警察官の指示のもと行なっております。',
              },
              {
                q: '浮気の証拠が無事に揃った後、どうしたらいい？',
                a: '調査中や調査後のご相談も無料です。慰謝料請求等のアドバイスや弁護士の紹介もさせていただけますので、どんな些細な心配ごとでもご相談ください。',
              },
              {
                q: '無料相談を受ける場合はどこで行いますか？',
                a: 'ご相談者様のご希望の場所で行います。喫茶店やファミレスなどが一般的です。',
              },
              {
                q: '匿名で相談や調査を受けることは可能ですか？',
                a: '匿名で相談可能です。(電話・メール・面会時) ただし、匿名で調査を受けることは探偵業法に違反する為できません。',
              },
              {
                q: '相談やお見積もりに料金はかかりますか？',
                a: '無料ですので安心してご連絡下さい。',
              },
              {
                q: '成功報酬制度はありますか？',
                a: '成果報酬制度はありません。浮気調査には自信がありますので成果報酬制度の必要がありません。',
              },
              {
                q: '調査員が現場まで行く交通費はかかりますか？',
                a: '調査員が開始場所まで行くまでの交通費をご依頼者が負担する事は一切ありません。',
              },
            ].map((item, i) => (
              <motion.details
                key={i}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                variants={itemVariant}
              >
                <summary className="font-semibold cursor-pointer text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-gray-700 text-sm">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="bg-[#333333] text-white py-16 px-4 sm:px-6 lg:px-8"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariant}>
            無料相談のご予約
          </motion.h2>
          <motion.p className="text-lg mb-8" variants={itemVariant}>
            まずはお気軽にご相談ください。
          </motion.p>
          <motion.div className="space-y-4" variants={itemVariant}>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              無料相談はこちらから
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />

      <ContactFloating href="/contact" />
    </div>
  );
}
