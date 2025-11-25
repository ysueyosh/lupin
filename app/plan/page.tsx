'use client';

import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

export default function Plan() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <section
        className="bg-no-repeat bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/planBackground.svg')",
          height: '100vh',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            料金プラン
          </h1>
          <p className="text-xl text-white">
            明確な料金設定。
            <br className="block sm:hidden" />
            追加料金は一切いただきません
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            料金プラン
          </h2>
          <p className="text-lg text-gray-900 mb-10 drop-shadow-sm text-center mb-15">
            「ご状況に合わせて無理のない
            <br className="block sm:hidden" />“<strong>最適なプラン</strong>”
            をご提案します。」
            <br />
            <br />
            調査料金は、
            <br className="block sm:hidden" />
            内容や目的によって大きく変わるため、
            <br className="block sm:hidden" />
            初めての方にとっては分かりにくく、
            <br />
            不安を感じる部分かもしれません。
            <br />
            <br />
            私たちはお客様に、
            <br className="block sm:hidden" />
            必要以上の費用を勧めることは一切なく、
            <br className="block sm:hidden" />
            ご相談内容を丁寧にヒアリングした上で、
            <br className="block sm:hidden" />
            最も負担の少ない、
            <br className="block sm:hidden" />
            安心してご利用いただけるプランを
            <br className="block sm:hidden" />
            ご案内いたします。
            <br />
            <br />
            「どれくらい費用がかかるの？」
            <br className="block sm:hidden" />
            という疑問にもわかりやすくお答えし、
            <br className="block sm:hidden" />
            事前にしっかりご説明いたします。
            <br />
            <br />
            まずはお気軽にご相談ください。
            <br className="block sm:hidden" />
            あなたの状況に寄り添い、
            <br className="block sm:hidden" />
            一緒に最適な方法を見つけていきます。
          </p>
          <div className="grid gap-6 mb-10 sm:grid-cols-1 md:grid-cols-3">
            {[
              {
                title: 'パック料金',
                badge: '5時間',
                price: '10万円〜',
                description: (
                  <>
                    調査員2名の車両込みの時間契約プラン。
                    <br />
                    1時間ごとの延長も可能！
                    <br />
                    長時間の調査にオススメ！
                  </>
                ),
                levels: [
                  { icon: ['man', 'man', 'car'], price: '' },
                  { icon: [], price: '5時間　10万円〜延長3.0万円/h稼働数1' },
                  { icon: [], price: '10時間　20万円〜延長3.0万円/h稼働数2' },
                  { icon: [], price: '15時間　30万円〜延長2.5万円/h稼働数3' },
                  { icon: [], price: '20時間　40万円〜延長2.5万円/h稼働数4' },
                  { icon: [], price: '25時間　50万円〜延長2.0万円/h稼働数5' },
                ],
              },
              {
                title: '簡易調査',
                badge: '1週間',
                price: '1万円〜',
                description: (
                  <>
                    配偶者が浮気をしているかどうかを確認したい人に最適なプラン！
                    <br />
                    配偶者の車にGPSを取り付けて行動を確認します。
                  </>
                ),
              },
              {
                title: '通常調査',
                badge: '60分',
                price: '1万円〜',
                description: (
                  <>
                    調査員の人数と車両の有無を選んで頂き、
                    <br />
                    内容に応じて最適化された調査プラン。
                    <br />
                    確実性の高い証拠が欲しい方や費用を抑えたい方にオススメ！
                  </>
                ),
                levels: [
                  { icon: ['man', ''], price: '1万円/h' },
                  { icon: ['man', 'man'], price: '2万円/h' },
                  { icon: ['man', 'man', 'car'], price: '3万円/h' },
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm"
              >
                {/* タイトル行 */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.title}
                  </h3>
                  <span className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-full font-semibold">
                    {plan.badge}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>

                {/* 説明文 */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* 区切り線 */}
                {plan.levels && (
                  <div className="border-t border-gray-300 my-4"></div>
                )}

                {/* アイコン → 金額 */}
                <div className="space-y-3">
                  {plan.levels?.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-1">
                        {row.icon.map((iconName, i) => (
                          <img
                            key={i}
                            src={`/${iconName}.svg`}
                            alt={iconName}
                            className={`w-10 h-10 ${
                              iconName === 'man' ? 'mr-[-20px]' : 'ml-[10px]'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="text-l font-semibold text-gray-900">
                        {row.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              料金に含まれるもの
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '調査員の人件費',
                '*車両・機材費',
                '交通費',
                '報告書作成費',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-red-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <span className="text-gray-700 mt-4 block text-sm">
              *車両・機材費は、調査内容により発生しない場合もございます。
            </span>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-orange-200 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              ⚠️ ご注意ください
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                契約時に決めた調査内容に含まれない追加調査をご希望の場合、別途料金が発生する可能性があります。
              </p>
              <p>
                ただし、ご相談者様への確認がなければ、契約金額を超える請求は一切いたしません。
              </p>
              <p className="font-semibold">
                まずはお気軽にご相談ください。最適なプランをご提案いたします。
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              ご不明な点がございましたら
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08039815260"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                電話で相談する
              </a>
              <a
                href="mailto:lupin08130@gmail.com"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                メールで相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
