'use client';

import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />

      <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
            プライバシーポリシー
          </h1>
          <p className="text-xl text-gray-600">個人情報の取扱いについて</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                title: '1. 個人情報の取得と利用',
                content:
                  '当事務所は、調査のご依頼に必要な個人情報を取得いたします。取得した情報は、調査業務の遂行、ご連絡、請求など、必要な範囲内でのみ利用いたします。',
              },
              {
                title: '2. 個人情報の管理',
                content:
                  '取得した個人情報は、厳格に管理いたします。第三者への漏洩防止のため、セキュアなシステムを導入しており、定期的なセキュリティチェックを実施しています。',
              },
              {
                title: '3. 第三者への提供',
                content:
                  'ご依頼者様の同意なく、個人情報を第三者に提供することはございません。ただし、法令に基づき開示を求められた場合はこの限りではありません。',
              },
              {
                title: '4. 情報の保管期間',
                content:
                  '個人情報は調査完了後、法律で定められた期間保管いたします。その後、適切に破棄いたします。',
              },
              {
                title: '5. 開示・訂正・削除のお申し出',
                content:
                  'ご自身の個人情報について、開示・訂正・削除のお申し出がありましたら、速やかに対応いたします。お気軽にお問い合わせください。',
              },
              {
                title: '6. クッキーの使用',
                content:
                  'ウェブサイトの利便性向上のため、クッキーを使用することがあります。クッキーで取得した情報は、個人を特定するものではなく、統計情報として利用いたします。',
              },
              {
                title: '7. このプライバシーポリシーの変更',
                content:
                  '当事務所は、必要に応じてこのプライバシーポリシーを変更することがあります。変更があった場合は、ウェブサイトで告知いたします。',
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

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              お問い合わせ
            </h2>
            <p className="text-gray-700 mb-6">
              このプライバシーポリシーについてご不明な点や、個人情報の取扱いについてのご相談は、下記までお気軽にお問い合わせください。
            </p>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold">探偵事務所 Lupin</span>
              </p>
              <p className="text-gray-700">📞 080-3981-5260</p>
              <p className="text-gray-700">📧 lupin08130@gmail.com</p>
              <p className="text-gray-700">営業時間: 24時間365日対応</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
