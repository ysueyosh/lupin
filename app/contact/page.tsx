'use client';

import React, { useState } from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Contact() {
  const [contactMethod, setContactMethod] = useState<'none' | 'line' | 'form'>(
    'none'
  );

  const [formStep, setFormStep] = useState<'input' | 'confirm' | 'success'>(
    'input'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    inquiryType: '',
    relation: '',
    residence: '',
    surveyArea: '',
    preferredDate: '',
    preferredPlace: '',
    contactMethodDetail: '',
    phoneAllowed: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStep('confirm');
  };

  const handleEdit = () => {
    setFormStep('input');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        'https://8s79nven7k.execute-api.ap-northeast-1.amazonaws.com/sendMail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStep('success');
      } else {
        const text = await response.text();
        console.error('API error:', response.status, text);
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const prefectures = [
    '北海道',
    '青森',
    '岩手',
    '宮城',
    '秋田',
    '山形',
    '福島',
    '茨城',
    '栃木',
    '群馬',
    '埼玉',
    '千葉',
    '東京',
    '神奈川',
    '新潟',
    '富山',
    '石川',
    '福井',
    '山梨',
    '長野',
    '岐阜',
    '静岡',
    '愛知',
    '三重',
    '滋賀',
    '京都',
    '大阪',
    '兵庫',
    '奈良',
    '和歌山',
    '鳥取',
    '島根',
    '岡山',
    '広島',
    '山口',
    '徳島',
    '香川',
    '愛媛',
    '高知',
    '福岡',
    '佐賀',
    '長崎',
    '熊本',
    '大分',
    '宮崎',
    '鹿児島',
    '沖縄',
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <NavHeader currentPage="/contact" />

      <section className="bg-gradient-to-b from-gray-100 to-white pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            お見積り・ご相談は無料です。
            <br className="block sm:hidden" />
            お気軽にお問合せください。
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
            <p className="text-gray-800 leading-relaxed">
              探偵事務所Lupinでは、ご指定のご連絡先への迅速な回答を心がけておりますが、
              お問い合わせ内容によりましては回答までにお時間をいただく場合がございます。
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            お問い合わせ方法を選択してください
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setContactMethod('line')}
              className={`w-full sm:w-1/3 py-4 rounded-lg font-bold text-white transition duration-200 ${
                contactMethod === 'line'
                  ? 'bg-green-600'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              💬 LINEで相談
            </button>

            <button
              onClick={() => setContactMethod('form')}
              className={`w-full sm:w-1/3 py-4 rounded-lg font-bold text-white transition duration-200 ${
                contactMethod === 'form'
                  ? 'bg-red-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              ✉ メール・電話で相談
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {contactMethod === 'none' && (
            <p className="text-center text-gray-600">
              上記のいずれかの方法を選択してください。
            </p>
          )}

          {contactMethod === 'line' && (
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                💬 LINEでお問い合わせ
              </h2>
              <p className="text-gray-700 mb-6">
                LINEからのご相談は、プライバシーを守りながら簡単に行えます。
              </p>
              <a
                href="https://line.me/R/ti/p/@457ooatw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 w-full sm:w-auto"
              >
                LINEで相談する
              </a>
              <p className="text-sm text-gray-600 mt-4">
                ※外部サイト（LINE公式）へ移動します。
              </p>
            </div>
          )}

          {contactMethod === 'form' && (
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                ✉ メール・電話でお問い合わせ
              </h2>

              {/* 📞 電話案内 */}
              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  📞 電話でお問い合わせ
                </h3>
                <p className="text-sm text-gray-600">
                  公式LINE友達登録後、記載の電話からご連絡ください。
                </p>
                <a
                  href="https://line.me/R/ti/p/@457ooatw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 w-full sm:w-auto mt-2"
                >
                  LINEで電話する
                </a>
              </div>

              {/* ステップ1: 入力フォーム */}
              {formStep === 'input' && (
                <form onSubmit={handleNext} className="space-y-6">
                  {/* お名前 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      お名前 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* メール・電話 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        メールアドレス <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="yamada@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        電話番号 <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="090-xxxx-xxxx"
                      />
                    </div>
                  </div>

                  {/* 性別・年齢 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        性別 (任意)
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        年齢 (任意)
                      </label>
                      <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        {[...Array(8)].map((_, i) => (
                          <option key={i} value={`${i + 1}0代`}>{`${
                            i + 1
                          }0代`}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* ご相談項目 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      ご相談項目
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="浮気調査">浮気調査</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  {/* 調査対象者との関係・お住まいの地域 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        調査対象者との関係
                      </label>
                      <input
                        type="text"
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="例：配偶者"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        お住まいの地域 (任意)
                      </label>
                      <select
                        name="residence"
                        value={formData.residence}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="">選択してください</option>
                        {prefectures.map((pref) => (
                          <option key={pref} value={pref}>
                            {pref}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 調査地域・希望日時 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        調査地域 (任意)
                      </label>
                      <select
                        name="surveyArea"
                        value={formData.surveyArea}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="">選択してください</option>
                        {prefectures.map((pref) => (
                          <option key={pref} value={pref}>
                            {pref}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        ご相談希望日時 (任意)
                      </label>
                      <input
                        type="datetime-local"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 希望場所・連絡方法・電話可否 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        ご相談希望場所 (任意)
                      </label>
                      <input
                        type="text"
                        name="preferredPlace"
                        value={formData.preferredPlace}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        ご連絡方法
                      </label>
                      <select
                        name="contactMethodDetail"
                        value={formData.contactMethodDetail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="">選択してください</option>
                        <option value="LINE">LINE</option>
                        <option value="電話">電話</option>
                        <option value="メール">メール</option>
                      </select>
                    </div>
                    {formData.contactMethodDetail === 'LINE' && (
                      <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                        <h2 className="text-xl font-bold mb-6 text-gray-900">
                          LINEでお問い合わせ
                        </h2>
                        <p className="text-gray-700 mb-6">
                          公式LINEをお友達追加してください。
                        </p>
                        <a
                          href="https://line.me/R/ti/p/@457ooatw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 w-full sm:w-auto"
                        >
                          LINEで相談する
                        </a>
                        <p className="text-sm text-gray-600 mt-4">
                          ※外部サイト（LINE公式）へ移動します。
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        こちらからの電話連絡の可否
                      </label>
                      <select
                        name="phoneAllowed"
                        value={formData.phoneAllowed}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="">選択してください</option>
                        <option value="可">可</option>
                        <option value="否">否</option>
                      </select>
                    </div>
                  </div>

                  {/* 相談内容 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      お問い合わせ内容 <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                      placeholder="お困りの状況やご質問をお聞かせください。"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                  >
                    確認画面へ
                  </button>
                </form>
              )}

              {/* ステップ2: 確認画面 */}
              {formStep === 'confirm' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      以下の内容で問い合わせさせていただきます
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold text-gray-700">
                          お名前
                        </span>
                        <span className="text-gray-600">{formData.name}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold text-gray-700">
                          メールアドレス
                        </span>
                        <span className="text-gray-600">{formData.email}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-300 pb-2">
                        <span className="font-semibold text-gray-700">
                          電話番号
                        </span>
                        <span className="text-gray-600">{formData.phone}</span>
                      </div>

                      {formData.gender && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            性別
                          </span>
                          <span className="text-gray-600">
                            {formData.gender}
                          </span>
                        </div>
                      )}

                      {formData.age && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            年齢
                          </span>
                          <span className="text-gray-600">{formData.age}</span>
                        </div>
                      )}

                      {formData.inquiryType && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            ご相談項目
                          </span>
                          <span className="text-gray-600">
                            {formData.inquiryType}
                          </span>
                        </div>
                      )}

                      {formData.relation && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            調査対象者との関係
                          </span>
                          <span className="text-gray-600">
                            {formData.relation}
                          </span>
                        </div>
                      )}

                      {formData.residence && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            お住まいの地域
                          </span>
                          <span className="text-gray-600">
                            {formData.residence}
                          </span>
                        </div>
                      )}

                      {formData.surveyArea && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            調査地域
                          </span>
                          <span className="text-gray-600">
                            {formData.surveyArea}
                          </span>
                        </div>
                      )}

                      {formData.preferredDate && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            ご相談希望日時
                          </span>
                          <span className="text-gray-600">
                            {formData.preferredDate}
                          </span>
                        </div>
                      )}

                      {formData.preferredPlace && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            ご相談希望場所
                          </span>
                          <span className="text-gray-600">
                            {formData.preferredPlace}
                          </span>
                        </div>
                      )}

                      {formData.contactMethodDetail && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            ご連絡方法
                          </span>
                          <span className="text-gray-600">
                            {formData.contactMethodDetail}
                          </span>
                        </div>
                      )}

                      {formData.phoneAllowed && (
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                          <span className="font-semibold text-gray-700">
                            電話連絡の可否
                          </span>
                          <span className="text-gray-600">
                            {formData.phoneAllowed}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-start border-gray-300">
                        <span className="font-semibold text-gray-700 mr-4">
                          お問い合わせ内容
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-300">
                        <p className="text-gray-600 whitespace-pre-wrap">
                          {formData.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleEdit}
                      className="w-full sm:w-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                    >
                      修正する
                    </button>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full sm:w-1/2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                    >
                      {isSubmitting ? '送信中...' : 'この内容で問い合わせ'}
                    </button>
                  </div>
                </div>
              )}

              {/* ステップ3: 送信完了画面 */}
              {formStep === 'success' && (
                <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-4">
                      お問い合わせを送信しました
                    </h3>
                    <p className="text-green-800 mb-6">
                      この度はお問い合わせいただきありがとうございます。
                      <br />
                      当事務所よりメールにてご連絡させていただきます。
                    </p>
                    <p className="text-sm text-green-700">
                      ご記入いただいたメールアドレスに確認メールをお送りしておりますので、ご確認ください。
                    </p>
                  </div>
                  <Link href="/">
                    <button
                      onClick={() => {
                        setContactMethod('none');
                        setFormStep('input');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          gender: '',
                          age: '',
                          inquiryType: '',
                          relation: '',
                          residence: '',
                          surveyArea: '',
                          preferredDate: '',
                          preferredPlace: '',
                          contactMethodDetail: '',
                          phoneAllowed: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
                    >
                      トップに戻る
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
