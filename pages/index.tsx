import Head from "next/head";
import Link from "next/link";

function ExternalLink(props: any) {
    return (
        <a
            className="text-gray-theme hover:text-orange-theme text-sm md:text-2xl print:text-black"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.text}
            <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mb-0 sm:mb-1 inline print:hidden"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
        </a>
    );
}

function Emoji(props: any) {
    return (
        <span
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
    );
}

export default function Home() {
    return (
        <div className="text-white">
            <Head>
                <title>Qilin Yang | Home</title>
                <link rel="icon" href="/favicon.ico"/>
                <html lang="en"/>
            </Head>

            <main className="flex flex-col justify-center pl-10 pr-10 pt-10 md:pl-20 md:pr-20 md:pt-20 select-none">
                <span className="text-gray-theme font-light text-sm md:text-2xl max-w-xl print:text-black">
                    <p className="pb-5">
                        <a>Hi there!</a>
                    </p>
                    <p className="pb-5">
                        <a>My name is Qilin Yang. I recently graduated with a bachelor's degree in Computer Science from </a>
                        <ExternalLink link="https://www.iastate.edu" text="Iowa State University"/>
                        <a>.</a>
                    </p>
                    <p className="pb-5">
                        <a>I write code on </a>
                        <ExternalLink link="https://github.com/Kiriny" text="GitHub"/>
                        <a> and share my thoughts occasionally on </a>
                        <ExternalLink link="https://medium.com/@Kiriny" text="Medium"/>
                        <a>.</a>
                    </p>
                    <p className="pb-5">
                        <a>I am interested in pursuing a career in </a>
                        <ExternalLink link="https://aws.amazon.com/devops/what-is-devops/" text="DevOps"/>
                        <a> and currently reading books around the subject.</a>
                    </p>
                    <p className="pb-5">
                        <a>You should follow me on </a>
                        <ExternalLink link="https://twitter.com/iKiriny" text="Twitter"/>
                        <a>.</a>
                    </p>
                    <p className="pb-5">
                        <a>I am currently available for hire. You can find a copy of my resume </a>
                        <Link href="/resume">
                            <a className="text-gray-theme hover:text-orange-theme text-sm md:text-2xl print:hidden">here
                                <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mb-0.5 sm:mb-1 inline"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                            </a>
                        </Link>
                        <a className="hidden print:inline">at https://kiriny.dev/resume</a>
                        <a>. If you want, you can also connect with me on </a>
                        <ExternalLink link="https://www.linkedin.com/in/kiriny" text="LinkedIn"/>
                        <a>.</a>
                    </p>
                    <p className="pb-8 md:pb-14">
                        <a>Thanks for stopping by! </a>
                        <Emoji symbol="🥰️" label="sheep"/>
                    </p>
                    <p className="pb-5"><a>Qilin Yang</a></p>
                    <p className="pb-8 md:pb-14">
                        <a className="text-gray-theme hover:text-orange-theme text-sm md:text-2xl print:text-black"
                           href="mailto:kiriny@me.com">
                            kiriny@me.com
                            <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mb-0 sm:mb-0.5 ml-0.5 inline print:hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </a>
                    </p>
                </span>
            </main>

            <footer className="pl-10 pr-10 md:pl-20 md:pr-20 select-none print:text-black">
                <p className="text-gray-500 text-xs md:text-sm pb-10 md:pb-20">
                    <a>Copyright &copy; 2021 Qilin Yang. All rights reserved.</a>
                </p>
            </footer>
        </div>
    );
}
