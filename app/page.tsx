"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
//import "./app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import Link from 'next/link'

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {


  return (
    <main>
      <h1>My todos</h1>

      <div>
      詳しくは
      <Link href="/setting">
        こちら
      </Link>
      をクリックしてください
    </div>
    </main>
  );
}
