'use client';

import Link from 'next/link';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

export default function Strengths() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <section
        className="bg-no-repeat bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/strengthBackground.svg')",
          height: '100vh',
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Lupinの強み
          </h1>
          <p className="text-xl text-white">
            確かな調査力と信頼で、あなたの不安を安心へ変えます
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Lupinの強み
          </h2>
          <p className="text-lg text-gray-900 mb-10 drop-shadow-sm text-center">
            あなたの不安に寄り添い
            <br className="block sm:hidden" />
            確かな調査力で“真実”を見つけます
            <br />
            <br />
            大切な決断の前に必要なのは“真実”です。
            <br />
            私たちは浮気調査の専門家として
            <br className="block sm:hidden" />
            正確で迅速な調査は勿論のこと
            <br />
            無理のない調査プランと丁寧な報告で
            <br className="block sm:hidden" />
            ご依頼者様の不安を少しずつ
            <br className="block sm:hidden" />
            “安心”へと変えていきます。
            <br />
            <br />
            あなたの未来を一緒に守りましょう！
          </p>
          <div className="space-y-10">
            {[
              {
                icon: '●',
                title: '相談が無料',
                description:
                  '調査に関する相談が何度でも無料です。ご不安なことやご質問があれば、お気軽にお問い合わせください。',
              },
              {
                icon: '●',
                title: '24時間365日対応',
                description:
                  'お客様の質問やお困りごとを24時間対応でお受付しております。急な相談や調査依頼も迅速にサポートいたします。',
              },
              {
                icon: '●',
                title: '臨機応変な高い調査力',
                description:
                  '探偵歴の長い調査のプロが担当！元警察官も在籍しているから安心！さまざまなケースに対応した豊富な経験があります。',
              },
              {
                icon: '●',
                title: '安心の料金プラン',
                description:
                  '調査員人件費、機材車両費、交通費、報告書作成費、諸経費 - 全て込みの明確な料金プラン！追加料金はいただきません。',
              },
              {
                icon: '●',
                title: '秘密厳守！',
                description:
                  '元警察官も在籍しており、徹底的な情報管理・育成を行なっております。プライバシー保護を最優先にしています。',
              },
              {
                icon: '●',
                title: 'アフターフォロー',
                description:
                  '調査が終わったからといって終了ではなく、お客様それぞれに必要なサポートを提案させていただきます。',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <h2 className="text-2xl font-bold mb-4 text-black">
                  {feature.icon} {feature.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold mb-6 text-gray-600">
              - ご相談は何度でも無料です -
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition duration-200 text-lg"
            >
              無料相談はこちらから
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
