import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/navbar/Navbar";
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return (
        <main className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
            <Navbar/>
            {children}
        </main>

    )
}

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}