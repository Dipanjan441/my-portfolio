import { IconType } from "react-icons";

interface Props {
    icon: IconType;
    title: string;
    description: string;
    buttonText: string;
    technologies: string[];
    onButtonClick: () => void;
}

const ProjectCards = ({ icon: Icon, title, buttonText, description, onButtonClick, technologies }: Props) => {
    return (
        <div className="card text-center shadow p-3 rounded project-card">
            <div className="card-body">
                <Icon size={40} className="text-primary mb-3" />
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* Technologies Used Section */}
                <div className="mb-3">
                    <strong>Technologies</strong>
                    <ul className="list-inline mt-2">
                        {technologies.map((tech, index) => (
                            <li key={index} className="list-inline-item badge bg-secondary text-primary p-2 mx-1">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer bg-white border-0">
                    <button className="btn btn-primary" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards
