import ProjectCard from "./projectCard"

export default function Projects(){

    const projectsData = [
        {
            projectTitle: "UFV Course Outline Finder",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "授業シラバスへのアクセスを素早くアクセスする為の Google Chrome 拡張機能",
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder"
        },
        {
            projectTitle: "japanhostelreviews.com",
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "SQLite", "VPS"],
            description: "国内ホステルの口コミサイト",
            gitHubLink: "https://github.com/lyuhiroyama/japanhostelreviews.com"
        },
        {
            projectTitle: "comandL.ai",
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"],
            description: "ChatGPTのChrome拡張機能版",
            gitHubLink: "https://github.com/lyuhiroyama/commandL.ai"
        },
        {
            projectTitle: "お絵かきボード",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "マウスでなぞってお絵かきができるグリッド",
            gitHubLink: "https://github.com/lyuhiroyama/Etch-a-Sketch?tab=readme-ov-file"
        }
    ]

    return (
        <div className="projects-container">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}