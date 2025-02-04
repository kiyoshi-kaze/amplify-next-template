import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>トップ画面</h1>
      <ul>
        <li><Link href="/ListIot">ListIotページ</Link></li>
      </ul>
    </main>
  );
}
