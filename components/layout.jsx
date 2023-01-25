import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Link from 'next/link';


export default function Layout({ children }) {
    return (
        <main className="bg-indigo-300 w-full">
            <Navbar />
            <div>{children}</div>
        </main>
    );
}