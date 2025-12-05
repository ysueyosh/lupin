'use client';

import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CommercialLaw() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader currentPage="/privacy-policy" />

      <section className="pt-40 bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
            特定商取引法に基づく表記
          </h1>
          <p className="text-xl text-gray-600">法律に基づく表記</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* ■ 事業者情報 */}
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: '事業者名', value: '探偵事務所 Lupin' },
                { label: '代表者', value: '清水 隆太郎' },
                { label: '所在地', value: '〒811-1211 福岡県那珂川市今光2-85' },
                { label: 'メールアドレス', value: 'メールアドレス' },
                {
                  label: '探偵業届出',
                  value: '福岡県公安委員会 探偵業届出 第90250001号',
                },
                {
                  label: 'サービス内容',
                  value: '浮気調査、その他調査業務',
                },
                {
                  label: '料金',
                  value:
                    '各サービスページに記載（※ご依頼内容により個別見積もり）',
                },
                {
                  label: '商品代金以外の必要料金',
                  value:
                    '交通費、宿泊費、機材費等が別途必要な場合があります（事前にお見積もりで提示）',
                },
                { label: '支払い方法', value: '現金、銀行振込' },
                {
                  label: '支払い時期',
                  value:
                    '契約時または調査実施前までにお支払い（契約内容に準ずる）',
                },
                {
                  label: 'キャンセルについて',
                  value:
                    '契約後のキャンセルは契約書に基づき、調査準備費・実費等を請求する場合があります',
                },
                {
                  label: '引き渡し時期',
                  value:
                    '調査終了後、報告書の提出をもってサービス完了（契約内容に準ずる）',
                },
                {
                  label: '返金について',
                  value:
                    'サービスの性質上、原則返金不可（契約に基づき返金規定がある場合を除く）',
                },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="bg-gray-50 p-4 font-semibold text-gray-900 w-40 sm:w-48">
                    {item.label}
                  </td>
                  <td className="p-4 text-gray-700 whitespace-pre-line">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* お知らせ（探偵業について） */}
          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              重要なお知らせ
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>当事務所は、福岡県公安委員会に届出を行った探偵事務所です。</p>
              <p className="font-semibold">
                探偵業届出番号: 福岡県公安委員会 第90250001号
              </p>
              <p>
                調査業務は法令遵守のもと適切に実施しており、依頼者様・被調査者様の権利を侵害する調査は一切行いません。
              </p>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              ご不明な点がございましたら
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-200 text-lg"
              >
                無料相談はこちらから
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
