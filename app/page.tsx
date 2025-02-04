import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>トップ画面</h1>
      <ul>
        <li><Link href="/ListIot">ListIotページ</Link></li>
      </ul>
<<<<<<< HEAD
=======

      <h1>My posts</h1>
      <button onClick={addPost}>+ new post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.Device}>{post.Controller}</li>
        ))}
      </ul>

      <h1>My lists</h1>
      <button onClick={addPost}>+ new post</button>
      <ul>
        {devices.map((device) => (
          <li key={device.Device}>{device.Controller}</li>
        ))}
      </ul>


      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
>>>>>>> a1094d3dedf27733d450f38f22666a572f502d73
    </main>
  );
}
