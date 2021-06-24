import Head from "next/head";

export default function Resume() {
    return (
        <div className="max-w-5xl text-white">
            <Head>
                <title>Qilin Yang | Resume</title>
                <link rel="icon" href="/favicon.ico"/>
                <html lang="en"/>
            </Head>

            <main
                className="justify-center pt-10 pl-10 pr-10 text-gray-theme md:pl-20 md:pr-20 md:pt-20 print:text-black print:pt-2 print:pl-2 print:pr-2">
                <div className="flex flex-row max-w-4xl">
                    <div className="grid max-w-3xl gap-y-6 print:gap-y-2">
                        <div>
                            <h1 className="text-2xl md:text-4xl">Qilin Yang</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Contact</h1>
                            <div
                                className="flex flex-col max-w-3xl pt-4 print:pt-2 text-base font-light md:flex-row md:text-xl print:flex-row">
                                <div className="md:w-1/2 print:w-1/2">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex flex-row">
                                            <p className="inline w-24 md:w-28">Location</p>
                                            <span
                                                className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Ames, IA</span>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="inline mt-0.5 w-24 md:w-28">Email</p>
                                            <span
                                                className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">kiriny@me.com</span>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="inline mt-0.5 w-24 md:w-28">Website</p>
                                            <span
                                                className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">kiriny.dev</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 md:w-1/2 md:mt-0">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex flex-row">
                                            <p className="inline mt-0.5 w-24 md:w-28">GitHub</p>
                                            <span
                                                className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">github.com/Kiriny</span>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="inline mt-0.5 w-24 md:w-28">LinkedIn</p>
                                            <span
                                                className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">linkedin.com/in/kiriny</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Education</h1>

                            {/* Below optimize for breakpoint md and above */}
                            <div
                                className="invisible h-0 md:h-auto md:visible print:visible print:h-auto print:text-black">
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-light print:text-base">Bachelor of Science - Computer
                                        Science</p>
                                    <p className="text-xl font-light print:text-base">Aug 2015 - Nov 2020</p>
                                </div>
                                <p className="text-base font-light print:text-xs">Iowa State University, Ames, IA</p>
                                <div className="flex flex-row">
                                    <p className="pt-3 pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="pt-3 text-base font-light print:text-xs">Computer Science Courses:
                                        Software Development Practices (Full Stack), Introduction to the Design and
                                        Analysis of Algorithms (Java), Advanced Programming Techniques (C, C++),
                                        Introduction to Database Management Systems (SQL), Software Testing (Selenium),
                                        Computer Game and Media Programming (C#, Unity).</p>
                                </div>
                            </div>

                            {/* Below optimize for breakpoint below md */}
                            <div className="h-auto md:h-0 md:invisible print:invisible print:h-0">
                                <p className="text-base font-light">Bachelor of Science - Computer Science</p>
                                <p className="text-xs font-light">Iowa State University, Ames, IA</p>
                                <p className="text-xs font-light">Aug 2015 - Nov 2020</p>
                                <div className="flex flex-row">
                                    <p className="pt-3 pl-2 pr-2 -mt-1">•</p>
                                    <p className="pt-3 text-xs font-light">Computer Science Courses: Software
                                        Development Practices (Full Stack), Introduction to the Design and Analysis of
                                        Algorithms (Java), Advanced Programming Techniques (C, C++), Introduction to
                                        Database Management Systems (SQL), Software Testing (Selenium), Computer Game
                                        and Media Programming (C#, Unity).</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Work Experience</h1>

                            {/* Below optimize for breakpoint md and above */}
                            <div
                                className="invisible h-0 md:h-auto md:visible print:visible print:h-auto print:text-black">
                                <div className="flex flex-row justify-between">
                                    <p className="text-xl font-light print:text-base">Student Worker, Part-time</p>
                                    <p className="text-xl font-light print:text-base">Sep 2015 - May 2016</p>
                                </div>
                                <p className="text-base font-light print:text-xs">ISU Dining, Ames, IA</p>
                                <div className="flex flex-row">
                                    <p className="pt-3 pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="pt-3 text-base font-light print:text-xs">Prepared food items
                                        consistently and in compliance with recipes, portioning, cooking, and waste
                                        control guidelines.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="text-base font-light print:text-xs">Performed multiple roles,
                                        including but not limited to cashier, sandwich artist, and dishwasher.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="text-base font-light print:text-xs">Helped teammates complete tasks
                                        proactively and reactively.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="text-base font-light print:text-xs">Positively engaged with students
                                        and satisfied their daily dining needs.</p>
                                </div>
                            </div>

                            {/* Below optimize for breakpoint below md */}
                            <div className="h-auto md:h-0 md:invisible print:invisible print:h-0">
                                <p className="text-base font-light">Student Worker, Part-time</p>
                                <p className="text-xs font-light">ISU Dining, Ames, IA</p>
                                <p className="text-xs font-light">Sep 2015 - May 2016</p>
                                <div className="flex flex-row">
                                    <p className="pt-2 pl-2 pr-2 -mt-1">•</p>
                                    <p className="pt-2 text-xs font-light">Prepared food items consistently and in
                                        compliance with recipes, portioning, cooking, and waste control guidelines.</p>
                                </div>
                                <div className="flex flex-row pt-1">
                                    <p className="pl-2 pr-2 -mt-1">•</p>
                                    <p className="text-xs font-light">Performed multiple roles, including but not
                                        limited to cashier, sandwich artist, and dishwasher.</p>
                                </div>
                                <div className="flex flex-row pt-1">
                                    <p className="pl-2 pr-2 -mt-1">•</p>
                                    <p className="text-xs font-light">Helped teammates complete tasks proactively and
                                        reactively.</p>
                                </div>
                                <div className="flex flex-row pt-1">
                                    <p className="pl-2 pr-2 -mt-1">•</p>
                                    <p className="text-xs font-light">Positively engaged with students and satisfied
                                        their daily dining needs.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Volunteer Experience</h1>

                            {/* Below optimize for breakpoint md and above */}
                            <div
                                className="invisible h-0 md:h-auto md:visible print:visible print:h-auto print:text-black">
                                <div className="flex flex-row justify-between">
                                    <p className="font-light text-xl print:text-base">Photographer</p>
                                    <p className="font-light text-xl print:text-base">Jan 2020</p>
                                </div>
                                <p className="font-light text-base print:text-xs">Iowa State University College of
                                    Engineering, Ames, IA</p>
                                <div className="flex flex-row">
                                    <p className="pt-3 pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="pt-3 font-light text-base print:text-xs">Volunteered as an event
                                        photographer at the FIRST&reg; LEGO&reg; League Challenge hosted by Iowa State
                                        University College of Engineering.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="font-light text-base print:text-xs">Helped event organizers capture
                                        high-quality digital photos of attendees, parents, and volunteers.</p>
                                </div>
                            </div>

                            {/* Below optimize for breakpoint below md */}
                            <div className="h-auto md:h-0 md:invisible print:invisible print:h-0">
                                <p className="text-base font-light">Photographer</p>
                                <p className="text-xs font-light">Iowa State University College of Engineering, Ames,
                                    IA</p>
                                <p className="text-xs font-light">Jan 2020</p>
                                <div className="flex flex-row">
                                    <p className="pt-2 pl-2 pr-2 -mt-1">•</p>
                                    <p className="pt-2 text-xs font-light">Volunteered as an event photographer at the
                                        FIRST® LEGO® League Challenge hosted by Iowa State University College of
                                        Engineering.</p>
                                </div>
                                <div className="flex flex-row pt-1">
                                    <p className="pl-2 pr-2 -mt-1">•</p>
                                    <p className="text-xs font-light">Helped event organizers capture high-quality
                                        digital photos of attendees, parents, and volunteers.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Certificate</h1>

                            {/* Below optimize for breakpoint md and above */}
                            <div
                                className="invisible h-0 md:visible print:visible md:h-auto print:h-auto print:text-black">
                                <div className="flex flex-row justify-between">
                                    <p className="font-light text-xl print:text-base">Google IT Automation with Python
                                        Specialization</p>
                                    <p className="font-light text-xl print:text-base">Apr 2021</p>
                                </div>
                                <p className="font-light text-base print:text-xs">Coursera: Credential ID:
                                    J72AV5TVHHUM</p>
                                <div className="flex flex-row">
                                    <p className="pt-3 pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="pt-3 font-light text-base print:text-xs">Analyzed real-world IT
                                        problems and implemented the appropriate strategies to solve those problems.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="pl-2 pr-2 print:-mt-1.5">•</p>
                                    <p className="font-light text-base print:text-xs">Managed resources at scale, both
                                        for physical and virtual machines in the cloud. This was accomplished with
                                        an infrastructure automation tool, Puppet, and version control tool system such
                                        as Git and GitHub.</p>
                                </div>
                            </div>

                            {/* Below optimize for breakpoint below md */}
                            <div className="h-auto md:h-0 md:invisible print:invisible print:h-0">
                                <p className="text-base font-light">Google IT Automation with Python Specialization</p>
                                <p className="text-xs font-light">Coursera: Credential ID: J72AV5TVHHUM</p>
                                <p className="text-xs font-light">Apr 2021</p>
                                <div className="flex flex-row">
                                    <p className="pt-2 pl-2 pr-2 -mt-1">•</p>
                                    <p className="pt-2 text-xs font-light">Analyzed real-world IT problems and
                                        implemented the appropriate strategies to solve those problems.</p>
                                </div>
                                <div className="flex flex-row pt-1">
                                    <p className="pl-2 pr-2 -mt-1">•</p>
                                    <p className="text-xs font-light">Managed resources at scale, both for physical and
                                        virtual machines in the cloud. This was accomplished with
                                        an infrastructure automation tool, Puppet, and version control tool system such
                                        as Git and GitHub.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl">Skills</h1>
                            <div>
                                <p className="text-base font-light md:text-xl">Programming Languages</p>
                                <div className="flex flex-row flex-wrap my-2 gap-x-2 gap-y-2">
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Java</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Python</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">JavaScript</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">HTML</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">CSS</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Bash</span>
                                    <span
                                        className="inline-flex items-center px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">SQL</span>
                                </div>
                                <p className="text-base font-light md:text-xl">Tools and Frameworks</p>
                                <div className="flex flex-row flex-wrap my-2 gap-x-2 gap-y-2">
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Spring</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Node.js</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Tailwind CSS</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">React</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Linux</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Git</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">GitHub</span>
                                    <span
                                        className="items-center inline-block px-2.5 py-1 text-sm md:text-base font-medium text-black bg-white rounded-full print:bg-black print:text-white">Amazon Web Services (AWS)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute print:invisible right-10 md:relative md:left-0">
                        <a href="/Qilin Yang - Resume.pdf" download>
                            <button className="focus:outline-none">
                                <svg className="w-7 h-7 md:h-11 md:w-11" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </main>

            <footer className="pl-10 pr-10 select-none md:pl-20 md:pr-20 print:hidden">
                <p className="pt-10 pb-10 text-xs text-gray-500 md:text-sm md:pb-20">
                    <a>Copyright &copy; 2021 Qilin Yang. All rights reserved.</a>
                </p>
            </footer>
        </div>
    );
}
