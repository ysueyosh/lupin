'use client';

import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

export default function CommercialLaw() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />

      <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
            特定商取引法に基づく表記
          </h1>
          <p className="text-xl text-gray-600">法律に基づく表記</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: '販売業者', value: '探偵事務所 Lupin' },
                { label: '代表者', value: '代表者名（非公開）' },
                { label: '住所', value: '福岡県那珂川市今光2-85' },
                { label: '電話番号', value: '080-3981-5260' },
                { label: 'メールアドレス', value: 'lupin08130@gmail.com' },
                { label: 'ホームページ', value: 'https://lupin.local' },
                { label: '営業時間', value: '24時間365日' },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="bg-gray-50 p-4 font-semibold text-gray-900 w-32 sm:w-40">
                    {item.label}
                  </td>
                  <td className="p-4 text-gray-700">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-12 space-y-8">
            {[
              {
                title: '商品・サービス',
                content:
                  '浮気調査、人物調査、企業調査、身上調査、所在地調査等の探偵業務',
              },
              {
                title: 'お支払い方法',
                content:
                  '契約時にご相談させていただきます。銀行振込、現金払いなど、複数の方法に対応いたします。',
              },
              {
                title: '料金',
                content:
                  '調査内容により異なります。詳細はお問い合わせの際、ご提案させていただきます。',
              },
              {
                title: 'キャンセル・返金について',
                content:
                  '契約前のキャンセルは無料です。契約後のキャンセルについては、既に実施された調査に関連する費用をご負担いただく場合がございます。詳細はご相談ください。',
              },
              {
                title: 'お支払い期限',
                content:
                  '契約時に決定いたします。通常、調査開始前または開始時にお支払いいただきます。',
              },
              {
                title: 'トラブルについて',
                content:
                  'お客様とのトラブルが発生した場合は、まずはご相談ください。誠意を持って対応させていただきます。',
              },
              {
                title: '損害賠償請求について',
                content:
                  '当事務所では、職業賠償責任保険に加入しており、万が一の場合に備えております。詳細はお問い合わせください。',
              },
              {
                title: '個人情報について',
                content:
                  'お客様の個人情報については、法令に基づき厳格に管理し、目的外で利用することはございません。詳細はプライバシーポリシーをご参照ください。',
              },
              {
                title: '契約の解除',
                content:
                  'ご依頼者様からの依頼は、いつでも解除することができます。解除の際は、お気軽にお問い合わせください。',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              重要なお知らせ
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>当事務所は、福岡県公安委員会に届出を行った探偵事務所です。</p>
              <p className="font-semibold">探偵業届出番号: 第90250001号</p>
              <p>
                調査業務は、法令遵守の下で行われており、依頼者様、被調査者様の権利を侵害する調査は一切行いません。
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              ご不明な点がございましたら
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08039815260"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                電話でお問い合わせ
              </a>
              <a
                href="mailto:lupin08130@gmail.com"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                メールでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
