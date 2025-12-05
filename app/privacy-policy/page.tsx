'use client';

import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader currentPage="/commercial-law" />

      {/* ヘッダー */}
      <section className="pt-40 bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
            プライバシーポリシー
          </h1>
          <p className="text-xl text-gray-600">個人情報の取扱いについて</p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* イントロ */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              探偵事務所Lupin（以下、「当事務所」）は、お客様の個人情報を適切に保護・管理することを社会的責任と認識し、
              以下の通り個人情報保護方針を定め、これを遵守いたします。
            </p>
          </div>

          {/* 各項目 */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                1. 個人情報の取得
              </h2>
              <p className="text-gray-700 leading-relaxed">
                当事務所は、調査業務・ご相談・お問い合わせ等を通じて、
                お客様の氏名、住所、電話番号、メールアドレス、相談内容等の個人情報を取得します。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                2. 利用目的
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                取得した個人情報は以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>調査依頼・契約に関する手続き</li>
                <li>調査の実施・報告書の作成</li>
                <li>お問い合わせへの対応</li>
                <li>必要な情報提供やご連絡</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                3. 第三者への提供
              </h2>
              <p className="text-gray-700 leading-relaxed">
                当事務所は、法令に基づく場合を除き、
                お客様の同意なく個人情報を第三者に提供いたしません。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                4. 管理体制
              </h2>
              <p className="text-gray-700 leading-relaxed">
                個人情報への不正アクセス、漏えい、紛失、改ざんを防止するため、
                適切な管理措置を講じます。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                5. 開示・訂正・削除
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ご本人より個人情報の開示、訂正、削除のご希望があった場合は、速やかに対応いたします。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                6. お問い合わせ窓口
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">【事業者名】</span> 探偵事務所
                  Lupin
                </p>
                <p>
                  <span className="font-semibold">【責任者】</span> 清水 隆太郎
                </p>
                <p>
                  <span className="font-semibold">【所在地】</span> 〒811-1211
                  福岡県那珂川市今光2-85
                </p>
                <p>
                  <span className="font-semibold">【メールアドレス】</span>{' '}
                  （新しいメールアドレスを入力）
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-gray-900">7. 改定</h2>
              <p className="text-gray-700 leading-relaxed">
                本ポリシーは必要に応じて予告なく変更される場合があります。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              お問い合わせ
            </h2>
            <p className="text-gray-700 mb-6">
              個人情報の取扱いについてご不明点がございましたら、下記よりお気軽にお問い合わせください。
            </p>

            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-200 text-lg"
            >
              お問い合わせはこちら
            </Link>

            <p className="text-gray-700 mt-4">営業時間: 24時間365日対応</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
