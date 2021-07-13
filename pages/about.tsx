import Header from "components/header";

export default function About() {
    return (
        <div>
            <Header/>
            <p className="text-white">{About.name}</p>
        </div>
    );
}
