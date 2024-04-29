import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs"
import { footerData } from "../../constants"
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {

    const links = footerData.map(link => {
        return (
            <div key={link.id}>
                <p className="font-bold text-white">{link.title}</p>
                <ul className="mt-6 space-y-4 text-sm">

                    {
                        link.links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <Link
                                        href="/"
                                        className="transition text-white hover:opacity-75"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    const socialData = [
        {
            id: 1,
            url: 'https://www.facebook.com/profile.php?id=100014953035548',
            accessibleText: 'facebook',
            logo: <BsFacebook className="w-6 h-6" />
        },
        {
            id: 2,
            url: 'https://www.instagram.com/elsayed_kewan/',
            accessibleText: 'instagram',
            logo: <BsInstagram className="w-6 h-6" />
        },
        {
            id: 3,
            url: 'https://twitter.com/ElSayedKewan20',
            accessibleText: 'twitter',
            logo: <BsTwitter className="w-6 h-6" />
        },
        {
            id: 4,
            url: 'https://github.com/Elsayed23',
            accessibleText: 'github',
            logo: <BsGithub className="w-6 h-6" />
        },
        {
            id: 5,
            url: 'https://youtube.com',
            accessibleText: 'youtube',
            logo: <BsYoutube className="w-6 h-6" />
        },
    ]

    const social = socialData.map(link => {
        return (
            <li key={link.id}>
                <a
                    href={link.url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                >
                    {link.logo}
                </a>
            </li>
        )
    })

    let currYear = new Date().getFullYear()

    return (
        <footer className="bg-[url(./assets/images/footerBG.png)] bg-cover">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 sm:px-6 lg:space-y-16 lg:px-8">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={Logo} alt="logo" />

                        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                            Receive Updates on New Arrivals and Special Promotions!
                        </p>

                        <ul className="mt-8 flex gap-6">
                            {social}
                        </ul>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
                    >
                        {links}


                    </div>
                </div>

                <p className="text-sm text-white text-opacity-75 font-light text-center py-8 border-t-2 border-t-[#333333]">
                    &copy; {currYear} Local Face Inc. All rights reserved. Made With <span className="font-bold">Elsayed Kewan</span>
                </p>
            </div>

        </footer>
    )
}

export default Footer